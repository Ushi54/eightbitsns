import { Box, InputAdornment, Stack, Typography } from '@mui/material'
import React from 'react'
import TextsmsIcon from '@mui/icons-material/Textsms';
import { Avatar } from "@mui/material";
import Image from "next/image";

const PostCard = () => {
  return (
    <Box bgcolor={'#D0C5BA'} borderRadius={2} p={1.5} sx={{
      boxShadow:
        "6px 0 12px -6px rgba(0,0,0,.25),  /* 右側の影  (x,y,blur,spread) */" +
        "0 6px 12px -6px rgba(0,0,0,.25)"   /* 下側の影 */
    }}>
      <Stack direction={'row'} alignItems={'end'}>
        <Stack direction={'row'} alignItems={'start'} mr={1.5}>

          <Box
            sx={{
              position: "relative",
              width: 36,
              aspectRatio: "1 / 1",     // ← 必ず正方形にする
              borderRadius: "50%",      // ← 円形
              overflow: "hidden",
              bgcolor: "#d9d9d9",
              flex: "0 0 auto",         // ← flex で伸びないよう保険
              mr: 1,
            }}
          >
            <Image
              src="/images/三毛猫のイラスト素材.png"
              alt="三毛猫のイラスト素材"
              fill
              style={{
                objectFit: "contain",   // ← 見切れ防止（全体表示）
                objectPosition: "50% 50%",
                transform: "scale(0.9)" // ← 少し小さく見せる（好みで 0.85〜0.95）
              }}
              sizes="30px"
              priority
            />
          </Box>

          <Stack direction={'column'} alignItems={'start'} mt={1}>

            <Stack direction={'row'} alignItems={'center'} mb={1}>
              <Typography fontWeight={'bold'} mr={1}>みけ。</Typography>
              <Typography mr={1}>@mofumike</Typography>
              <Typography fontSize={'0.7rem'}>5分前</Typography>
            </Stack>

            <Box>
              <Typography fontSize={'0.7rem'}>
                ちゃおちゅーるに月光を3時間当てると、ちょっと不思議な味になる。<br />
                ※おすすめはしないにゃ。<br />
                #やってみた #深夜の三毛
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