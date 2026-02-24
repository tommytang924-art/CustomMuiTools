"use client"

import { Box, Container, Paper } from "@mui/material";
import DiffVariant from "./DiffVariant";
import { useState } from "react";
import CodeViewer from "@/components/common/CodeViewer";
import DiffSize from "./DiffSize";
import TextArea from "./TextArea";
import ColorParam from "./ColorParam";
import IconTextField from "./IconTextField";
interface TableData {
    id: string;
    name: string;
    type: string;
    default: string | null;
    Description: string;
}

export default function TextFieldComponent() {

    return (
        <>
            <Container maxWidth={false}
                sx={{
                    mt: 2,
                    mb: 2,
                    width: '100%',
                    overflow: 'hidden' // Extra safety
                }}>
                <Box
                    sx={{
                        minWidth: '856px', // Adjust width as needed
                        borderRadius: '8px',
                        overflow: 'hidden', // To handle inner borders cleanly
                    }} >
                    <h1>Text Field</h1>
                    Here is the demo of MyTextField Component. At the bottom, there are table to show the parameter of that component
                </Box>
                    <DiffVariant />
                    <DiffSize/>
                    <TextArea/>
                    <ColorParam/>
                    <IconTextField/>
            </Container>
        </>
    )
}