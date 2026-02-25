"use client"

import { Box, Container } from "@mui/material"
import DatePickerDemo1 from "./DatePickerDemo1"

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
                        overflow: 'hidden', // To handle inner borders cleanly
                        mb:3,
                    }} >
                    <h3>Date Picker</h3>
                  
                </Box>
                <DatePickerDemo1/>
            </Container>
        </>
    )
}