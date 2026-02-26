"use client"

import { Box, Container } from "@mui/material"
import NumberFieldDemo from "./NumberFieldDemo"

export default function DatePickerPage() {

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
                        
                        borderRadius: '8px',
                       
                        mb:3,
                    }} >
                    <h3>Number Field</h3>
                  
                </Box>
                <NumberFieldDemo/>
            </Container>
        </>
    )
}