"use client"
import Image from "next/image";
import {useState, UseEffect} from "react";
import { Firestore } from "firebase/firestore";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Typography variant="h1">Pantry Tracker</Typography>
    </Box>
  );
}
