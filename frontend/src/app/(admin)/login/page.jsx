"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      router.push("/admin/dashboard");
      toast.success("Successfully logged in");
    } catch (error) {
      toast.error("Login failed: Incorrect credentials");
    }
  };

  return (
    <Paper elevation={6} sx={{ p: 3, maxWidth: 400, mx: "auto", mt: 8 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Admin Login
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email Address"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
      <ToastContainer />
    </Paper>
  );
};

export default LoginPage;
