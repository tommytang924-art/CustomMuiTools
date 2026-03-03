"use client"

import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";

interface DateInputShowComponentProps {
    placeholder: string;
    onClick: React.MouseEventHandler<HTMLElement> | undefined;
    ref: React.Ref<HTMLDivElement>;
    StartAndornment?: React.ReactNode | string;
    EndAndornment?: React.ReactNode | string;
}


export default function DateInputShowComponent(
    {
        placeholder,
        onClick,
        ref,
        StartAndornment,
        EndAndornment
    }: DateInputShowComponentProps
) {

    const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
        onClick && onClick(event);
    };
    return (
        <>

            <TextField
                value={placeholder}
                onClick={(e) => onClickHandler(e)}
                variant="outlined"
                ref={ref}
                fullWidth
                size="medium"
                label={"Date Range Picker"}

                slotProps={{
                    input: {
                        ...(StartAndornment && {
                            startAdornment: (
                                <InputAdornment position="start">
                                    {StartAndornment}
                                </InputAdornment>
                            )
                        }),
                        ...(EndAndornment && {
                            endAdornment: (
                                <InputAdornment position="end">
                                    {EndAndornment}
                                </InputAdornment>
                            )
                        }),
                    }
                }
                }
            />
        </>
    )
}