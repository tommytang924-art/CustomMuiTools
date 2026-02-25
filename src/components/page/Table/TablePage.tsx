"use client"

import { Box, Container, Paper } from "@mui/material";
import { useState } from "react";
import Table from "./TableDemo1";


export default function TablePageComponent() {

    return (
        <>
            <Container maxWidth={false}
                sx={{
                    mt: 2,
                    mb: 2,
                    width: '100%',
                    overflow: 'hidden' // Extra safety
                }}>
                {/* <Box
                    sx={{
                        minWidth: '856px', // Adjust width as needed
                        borderRadius: '8px',
                        overflow: 'hidden', // To handle inner borders cleanly
                    }} >
                    <h1>Table</h1>
                    Here is the demo of Table Component. At the bottom, there are table to show the parameter of that component
                </Box> */}
                <Table/>
            </Container>
        </>
    )
}