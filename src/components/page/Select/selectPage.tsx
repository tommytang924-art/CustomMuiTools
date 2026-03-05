"use client"

import { Box, Container } from "@mui/material"
import SelectDemo from "./SelectDemo"
import SelectPropsTable from "./SelectPropsTable"

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
                      <h5 style={{color:"red"}}>Remind you can click the submit button and then open F12 console to see form data</h5>
                  <SelectDemo/>
                  <SelectPropsTable/>
                </Box>
                
            </Container>
        </>
    )
}