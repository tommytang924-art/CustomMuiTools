"use client"

import { TextareaAutosize } from "@mui/material"

interface CodeViewerProps {
    content: string;
    setContent: (content: string) => void;
}

export default function CodeViewer({content,setContent}:CodeViewerProps){
    return(
        <>
        <TextareaAutosize
        maxRows={20}
        id={String(content.length)}
        style={{
            backgroundColor:"#171717",
            color: "white",
            overflow:"hidden",
            scrollBehavior:"auto",
            width:'100%',
            fontSize:"16px"
        }}
        value={content}
        disabled
        
        onChange={(e)=>setContent(e.target.value)}
        />
        </>
    )
}