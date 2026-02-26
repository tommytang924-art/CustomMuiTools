"use client"

import CodeViewer from "@/components/common/CodeViewer";
import CustomTextField from "@/components/common/CustomTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, TextField } from "@mui/material"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { useState } from "react";

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
        <Box sx={{
            marginTop: "24px",
            width:"250px"                      // wider gap looks better in demos
        }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap:"5px" }}>
            <CustomTextField
                placeholder="username" 
                form={form}
                formFieldName="username"
                fullWidth={false}
                inputTitle="Username"
                variant="outlined"
                iconPosition="start"
                IconComponent={PersonIcon}
                margin="none"
                label="username"
            />
            <CustomTextField
                placeholder="password"
                form={form}
                formFieldName="password"
                fullWidth={false}
                inputTitle="Password"
                variant="outlined"
                iconPosition="end"
                IconComponent={KeyIcon}
                margin="none"
            />
            </Box>
        </Box>
        </Box>
        
        `)

    const changeIconCode = (content: string) => {
        setIconCode(content);
    }

    return (
        <>
            <Box
                sx={{
                    mt: 4,
                    minWidth: '856px', // Adjust width as needed
                    borderRadius: '8px',

                }} >
                <h3>Icon</h3>
                <br />
                There are two param:
                <br />
                iconPosition - control the icon is end or start
                <br />
                icon - set the icon element * must be marterial icon
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
                            iconPosition="start"
                            IconComponent={PersonIcon}
                            margin="none"
                        />
                        <CustomTextField
                            placeholder="password"
                            form={form}
                            formFieldName="password"
                            fullWidth={false}
                            inputTitle="Password"
                            variant="outlined"
                            iconPosition="end"
                            IconComponent={KeyIcon}
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