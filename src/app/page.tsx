"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";

export default function Page() {
  return (
    <div className={styles.page} style={{ backgroundColor: "#242424" }}>
      {/* =============================== */}
      {/* ========== タイトル  ========== */}
      {/* =============================== */}
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // 背景色に透明度を適用
          padding: '16px', // 必要に応じて余白を追加
          width: '100%',
          mt: '400px', // 上部のマージンを追加
          borderRadius: '16px',
        }}
      >
        <Typography
          sx={{
            color: '#fff', // 文字色を明確に指定
            fontSize: '2rem',
            textAlign: 'center',
          }}
        >
          EIGHTBITSNS
        </Typography>
      </Box>

    </div>
  );
}
