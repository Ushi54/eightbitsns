import { Box, InputAdornment, Stack, Typography } from '@mui/material'
import React from 'react'
import TextsmsIcon from '@mui/icons-material/Textsms';
import { Avatar } from "@mui/material";
import Image from "next/image";
import { Post, toRelativeTime } from '../types/post';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Box bgcolor={'#D0C5BA'} borderRadius={2} p={1.5} sx={{
      boxShadow:
        "6px 0 12px -6px rgba(0,0,0,.25),  /* 右側の影  (x,y,blur,spread) */" +
        "0 6px 12px -6px rgba(0,0,0,.25)"   /* 下側の影 */
    }}>
      <Stack direction="row" alignItems="end" mt={1}>
        <Stack direction="row" alignItems="start" mb={1.5}>
          {/* アイコン（AvatarでもOK / Next<Image>でもOK） */}
          <Box sx={{ position: "relative", width: 30, aspectRatio: "1/1", borderRadius: "50%", overflow: "hidden", bgcolor: "#d9d9d9" }}>
            <Image src={post.user.iconUrl} alt={`${post.user.displayName}のアイコン`} fill style={{ objectFit: "contain" }} sizes="30px" />
          </Box>
          <Stack direction={'column'} alignItems={'start'} mt={0.3} ml={1}>

            <Stack direction={'row'} alignItems={'center'} mb={1} gap={1}>
              <Typography fontWeight="bold">{post.user.displayName}</Typography>
              <Typography color="text.secondary">@{post.user.handle}</Typography>
              <Typography fontSize="0.7rem" color="text.secondary">{toRelativeTime(post.createdAt)}</Typography>
            </Stack>

            <Box>
              <Typography fontSize="0.7rem" sx={{ whiteSpace: "pre-line" }} width={'72vw'}>
                {post.text}
              </Typography>
            </Box>

          </Stack>
        </Stack>

        <InputAdornment position="start">
          <TextsmsIcon />
        </InputAdornment>

      </Stack>
    </Box >
  )
}

export default PostCard