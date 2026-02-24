// src/app/[locale]/home/page.tsx
"use client";
import { Box, Typography } from "@mui/material";
export default function Welcome() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          padding: "0 .5rem"
        }}
      >
        <Typography
          sx={{ fontSize: "1.4rem", textAlign: "center", fontWeight: "650" }}
        >
          Welcome to MUI mintools portal
        </Typography>
      </Box>
    </>
  );
}
