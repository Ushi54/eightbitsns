import React from 'react'
import styles from "./../page.module.css";
import { AppBar, Avatar, Box, IconButton, InputAdornment, Stack, Toolbar, Typography } from '@mui/material';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import posts from "../data/posts.json";

const Page = () => {
  return (
    <Box>
      <Header />

      <Stack p={1} direction={'column'} spacing={1}>
        {posts.map((p) => <PostCard key={p.id} post={p} />)}
      </Stack >
    </Box >
  )
}

export default Page