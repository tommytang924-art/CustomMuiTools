"use client"

import { Box, Container } from "@mui/material"
import SelectDemo from "./SelectDemo"

export default function SelectPage(){
    return(
        <>
         <Container maxWidth={false}
                sx={{
                    mt: 2,
                    mb: 2,
                    width: '100%',
                }}>
                      <Box
                    sx={{
                        
                        borderRadius: '8px',
                        display: "flex",
                        flexDirection:"column",
                        gap:"20px"
                    }} >
                    <h3>Select</h3>
                  <SelectDemo/>
                </Box>
                
            </Container>
        </>
    )
}