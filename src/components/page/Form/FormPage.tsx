"use client"

import { Box, Container, Paper } from "@mui/material";
import { useState } from "react";
import Form from "./FormDemo1";


export default function FormPageComponent() {

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
                    <h1>Form</h1>
                    <h5 style={{color:"red"}}>Remind you can click the submit button and then open F12 console to see form data</h5>
                </Box>
                <Form/>
            </Container>
        </>
    )
}