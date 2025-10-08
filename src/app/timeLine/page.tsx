import React from 'react'
import styles from "./../page.module.css";
import { AppBar, Avatar, Box, IconButton, InputAdornment, Stack, Toolbar, Typography } from '@mui/material';

import Header from '../components/Header';
import PostCard from '../components/PostCard';

const Page = () => {
  return (
    <Box>
      <Header />

      <Stack p={1} direction={'column'} spacing={1}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Stack >
    </Box >
  )
}

export default Page