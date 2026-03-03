"use client"

import CodeViewer from "@/components/common/CodeViewer";
import CustomTextField from "@/components/common/CustomTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, IconButton, TextField } from "@mui/material"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { useState } from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
})

type IconForm = yup.InferType<typeof schema>

export default function IconTextField() {
    const form = useForm<IconForm>({
        resolver: yupResolver(schema),
        defaultValues: {
            username: "",
            password: ""
        }
    })
    const [iconCode, setIconCode] = useState<string>(`
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const VisiblePwd = 
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
        
    return(
        <>
         <Box sx={{
                    marginTop: "24px",
                    width: "250px"                      // wider gap looks better in demos
                }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <CustomTextField
                    placeholder="username"
                    form={form}
                    formFieldName="username"
                    fullWidth={false}
                    inputTitle="Username"
                    variant="outlined"
                    StartAndornment={<PersonIcon />}
                    margin="none"
                />
                <CustomTextField
                    placeholder="password"
                    form={form}
                    formFieldName="password"
                    fullWidth={false}
                    inputTitle="Password"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    StartAndornment={<KeyIcon />}
                    EndAndornment={VisiblePwd}
                    margin="none"
                />
            </Box>
        </Box>
        </>
        )
        `)

    const changeIconCode = (content: string) => {
        setIconCode(content);
    }


    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const VisiblePwd =
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

    return (
        <>
            <Box
                sx={{
                    mt: 4,
                    minWidth: '856px', // Adjust width as needed
                    borderRadius: '8px',
                    fontSize:"16px"
                }} >
                <h3>Icon</h3>
                <br />
                There are two param:
                <br />
                StartAndornment - control the start element in TextField. it can be Icon, string or ReactNode
                <br />
                EndAndornment - control the end element in TextField. it can be Icon, string or ReactNode
                <Box sx={{
                    marginTop: "24px",
                    width: "250px"                      // wider gap looks better in demos
                }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        <CustomTextField
                            placeholder="username"
                            form={form}
                            formFieldName="username"
                            fullWidth={false}
                            inputTitle="Username"
                            variant="outlined"
                            StartAndornment={<PersonIcon />}
                            margin="none"
                        />
                        <CustomTextField
                            placeholder="password"
                            form={form}
                            formFieldName="password"
                            fullWidth={false}
                            inputTitle="Password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            StartAndornment={<KeyIcon />}
                            EndAndornment={VisiblePwd}
                            margin="none"
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        mt: 2,
                        minWidth: '856px', // Adjust width as needed
                        borderRadius: '8px',
                        overflow: 'hidden', // To handle inner borders cleanly
                    }}
                >
                    <CodeViewer
                        content={iconCode}
                        setContent={changeIconCode}
                    />
                </Box>
            </Box>
        </>
    )
}