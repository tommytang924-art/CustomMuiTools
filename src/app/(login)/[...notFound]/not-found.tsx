import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "93vh",
        textAlign: "center",
        p: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "4rem", color: "#1e2324ff" }}>
        404
      </Typography>
      <Typography variant="h2" sx={{ mb: 2, color: "#333" }}>
        Page Not Found
      </Typography>
      <Typography sx={{ mb: 3, color: "#666" }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Link href="/home" style={{ textDecoration: 'none' }}>
        <Typography
          sx={{
            backgroundColor: "#272727ff",
            color: "#FFFFFF",
            px: 2,
            py: 1,
            borderRadius: 1,
            cursor: "pointer",
            "&:hover": { backgroundColor: "#a89b9bff" }
          }}
        >
          Back to Home
        </Typography>
      </Link>
    </Box>
  );
}
