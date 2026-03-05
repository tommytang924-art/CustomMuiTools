"use client"

import { Box, Container, Paper } from "@mui/material";
import DiffVariant from "./DiffVariant";
import { useState } from "react";
import CodeViewer from "@/components/common/CodeViewer";
import DiffSize from "./DiffSize";
import TextArea from "./TextArea";
import ColorParam from "./ColorParam";
import IconTextField from "./IconTextField";
import TextFieldPropsTable from "./TextFieldPropsTable";

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
                        fontSize: "16px"
                    }} >
                    <h3>Text Field</h3>
                    <br />
                    Here is the demo of CustomTextField Component. This component is basic on the MUI library to build it.
                </Box>
                <DiffVariant />
                <DiffSize />
                <TextArea />
                <ColorParam />
                <IconTextField />
                <TextFieldPropsTable/>
            </Container>
        </>
    )
}