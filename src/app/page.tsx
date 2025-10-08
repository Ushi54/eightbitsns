"use client";
import styles from "./page.module.css";
import { Box, Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import LockIcon from '@mui/icons-material/Lock';
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className={styles.page} style={{ backgroundColor: "#242424" }}>

      {/* =============================== */}
      {/* ========== タイトル  ========== */}
      {/* =============================== */}
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          width: '330px',
          mt: 30,
          borderRadius: 2,
          pl: 2,
          pb: 1
        }}
      >
        <Stack direction={'row'} alignItems={'end'} color={'#fff'}>
          <Typography fontSize={36}
          >
            EIGHTBIT
          </Typography>
          <Typography fontSize={60} mb={-1}>SNS</Typography>
        </Stack>
      </Box>

      {/* =============================== */}
      {/* ==========   入力欄  ========== */}
      {/* =============================== */}

      <Typography color="#fff" fontSize={24} mb={-10}>Login</Typography>

      <Stack direction={'column'} mb={14} gap={5}>
        <TextField id="outlined-userId" label="ユーザID" slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          },
        }}
          variant="filled" sx={{
            bgcolor: '#fff', width: '300px', borderRadius: 2, height: '50px'
          }} />
        <TextField id="outlined-passWord" label="パスワード" slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          },
        }}
          variant="filled" type="password" sx={{
            bgcolor: '#fff', width: '300px', borderRadius: 2, height: '50px'
          }} />
      </Stack>

      {/* =============================== */}
      {/* ==========   ボタン  ========== */}
      {/* =============================== */}
      <Stack direction={'row'} gap={7}>
        <Button onClick={() => router.push("/createAccount")} sx={{ bgcolor: '#fff', color: '#000', width: '120px' }}>
          アカウント作成
        </Button>
        <Button onClick={() => router.push("/timeLine")} sx={{ bgcolor: '#fff', color: '#000', width: '120px' }}>ログイン</Button>
      </Stack>
    </div >
  );
}
