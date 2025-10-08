'use client'; // クライアントコンポーネントとして宣言

import * as React from 'react';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import Image from "next/image";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: (t) => t.zIndex.appBar,
        bgcolor: "#242424",
        height: 72,
        px: 2,
        // iPhoneノッチ対策（ある環境のみ有効）
        pt: "env(safe-area-inset-top)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
      }}
    >
      <Box
        sx={{
          maxWidth: 720,
          mx: "auto",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}
      >
        {/* 左：何も置かない */}
        <Box />

        {/* 中央：アプリ名 */}
        <Stack direction={'row'} alignItems={'end'} color={'#fff'}>
          <Typography fontSize={16}
          >
            EIGHTBIT
          </Typography>
          <Typography fontSize={24} mb={-0.7}>SNS</Typography>
        </Stack>

        {/* 右：アバター */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
          <Box
            sx={{
              position: "relative",
              width: 36,
              aspectRatio: "1 / 1",     // ← 必ず正方形にする
              borderRadius: "50%",      // ← 円形
              overflow: "hidden",
              bgcolor: "#d9d9d9",
              flex: "0 0 auto",
              mr: 1       // ← flex で伸びないよう保険
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
        </Box>
      </Box>
    </Box>
  );
}
