"use client";
import { signIn, SignInResponse } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Box, Paper, Typography, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import KeyIcon from '@mui/icons-material/Key';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface LoginForm {
  sysuserId: string;
  sysuserPwd: string;
}

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [showPassword, setShowPwd] = useState<boolean>(false)
  const schema: yup.AnyObjectSchema = yup.object({
    sysuserId: yup.string().required("User Name is a required field"),
    sysuserPwd: yup.string().required("Password is a required field")
  })

  const handleClickShowPassword = () => setShowPwd((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      sysuserId: "",
      sysuserPwd: "",
    },
  });

  const onSubmit = async (data: LoginForm) => {
    signIn("credentials", {
      redirect: false,
      ...data,
      callbackUrl: "/home",
    }).then((SignInResult: SignInResponse | undefined) => {
      if (SignInResult?.ok) {
        router.push("/home");
      } else if (SignInResult?.status === 401) {
        setError("Invalid Password please try again.");
      } else {
        setError(`Something went wrong: ${SignInResult?.error}`);
        setTimeout(() => {
          router.push(`/error?error=${SignInResult?.error || "UnknownError"}`);
        }, 5000);
      }
    });
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f0f0f0', // Light background for the entire screen
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            minWidth: '856px', // Adjust width as needed
            borderRadius: '8px',
            overflow: 'hidden', // To handle inner borders cleanly
          }}
        >
          <Box sx={{ display: 'flex', flex: 1 }}>
            {/* Left side */}
            <Box
              sx={{
                backgroundImage: "linear-gradient(180deg, rgba(186, 209, 104, 1), rgba(185, 68, 78, 0.8))",
                color: '#fff',
                p: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}
            >
              <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                MUI tools Portals
              </Typography>
            </Box>

            {/* Right side */}
            <Box
              sx={{
                backgroundColor: '#fff',
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
              }}
              component="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Typography variant="h5" sx={{ color: '#000000ff', mb: 1, fontWeight: 600 }}>
                Login
              </Typography>
              <Typography variant="body2" sx={{ color: '#757575', mb: 3 }}>
                Sign in to your account
              </Typography>

              <Controller
                control={control}
                name="sysuserId"
                render={({ field: formField, fieldState: { error } }) => (
                  <TextField
                    {...formField}
                    variant="outlined"
                    placeholder="Username"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                    autoComplete="off"
                    sx={{ mb: 2, fontWeight: 600, }}
                    type="text"
                    value={formField.value}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon sx={{ color: '#757575' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              >
              </Controller>

              <Controller
                control={control}
                name="sysuserPwd"
                render={({ field: formField, fieldState: { error } }) => (
                  <TextField
                    {...formField}
                    variant="outlined"
                    placeholder="Password"
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    error={!!error}
                    helperText={error?.message}
                    autoComplete="off"
                    sx={{ mb: 2 }}
                    value={formField.value}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon sx={{ color: '#757575' }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label={
                              showPassword ? 'hide the password' : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                )}
              >
              </Controller>
              {error ? (
                <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                  {error}
                </Typography>
              ) : null}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                sx={{ textTransform: 'capitalize' }}

              >
                Login
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
