import React from 'react'
import styles from "./../page.module.css";
import { AppBar, Avatar, Box, IconButton, InputAdornment, Stack, Toolbar, Typography } from '@mui/material';
import TextsmsIcon from '@mui/icons-material/Textsms';

const Page = () => {
  return (
    <Box bgcolor={"#D9D9D9"}>

      <AppBar position="static" sx={{ backgroundColor: '#242424', height: 96 }}>
        <Toolbar>

          <Stack direction={'row'} alignItems={'end'} color={'#fff'}>
            <Typography fontSize={12}
            >
              EIGHTBIT
            </Typography>
            <Typography fontSize={24} mb={-0.7}>SNS</Typography>
          </Stack>

          <IconButton sx={{ p: 0 }} >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>

        </Toolbar>
      </AppBar>
// タイムライン
      <Box>
        <Box bgcolor={'#D0C5BA'} borderRadius={2} height={120} width={'95vw'} ml={'2.5vw'} p={1.5}>
          <Stack direction={'row'} alignItems={'end'}>
            <Stack direction={'row'} alignItems={'start'} mr={1}>
              <Box bgcolor={"#D9D9D9"} borderRadius={5} height={'40px'} width={'40px'} mr={1}>
                <img src="/images/三毛猫のイラスト素材.png" alt="三毛猫のイラスト素材" height={'30px'} />
              </Box>
              <Stack direction={'column'} alignItems={'start'}>
                <Stack direction={'row'} alignItems={'center'} mb={1}>
                  <Typography fontWeight={'bold'} mr={1}>みけ。</Typography>
                  <Typography mr={1}>@mofumike</Typography>
                  <Typography fontSize={'0.7rem'}>5分前</Typography>
                </Stack>
                <Box>
                  <Typography fontSize={'0.7rem'}>
                    ちゃおちゅーるに月光を3時間当てると、ちょっと不思議な味になる。
                    ※おすすめはしないにゃ。
                    #やってみた #深夜の三毛
                  </Typography>
                </Box>
              </Stack>
            </Stack>
            <InputAdornment position="start">
              <TextsmsIcon />
            </InputAdornment>
          </Stack>
        </Box>
      </Box >
    </Box >
  )
}

export default Page