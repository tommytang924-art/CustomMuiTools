"use client"

import { Box, Chip, FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller, UseFormReturn } from "react-hook-form";

interface CustomSelectorProps {
    optionslist: Array<{ id: string; value: string }>;
    autoWidth?: boolean;
    label?: string;
    inputTitle?: string;
    variant?: "standard" | "filled" | "outlined"
    size?: "small" | "medium"
    multiple?: boolean;
    form: UseFormReturn<any>;
    formFieldName: string;
    width?: string;
    inputTitleColor?: string;
    disabled?: boolean;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function CustomSelect(
    {
        optionslist,
        width,
        label,
        variant = "outlined",
        size = "medium",
        multiple = false,
        form,
        formFieldName,
        autoWidth = false,
        disabled = false,
    }
        : CustomSelectorProps) {
    const labelId = `${formFieldName}-label`;
    const displayLabel = label;

    return (
        <>
            <Controller
                name={formFieldName}
                control={form.control}
                render={({ field, fieldState: { error } }) => (
                    <>
                        <FormControl
                            fullWidth={!width}
                            sx={width ? { width: width } : undefined}
                            size={size}
                            error={!!error}
                            variant={variant}
                        >
                            {displayLabel && (
                                <InputLabel
                                    id={labelId}
                                    error={!!error}
                                >
                                    {displayLabel}
                                </InputLabel>
                            )}
                            <Select
                                labelId={displayLabel ? labelId : undefined}
                                label={displayLabel}
                                multiple={multiple}
                                value={field.value ?? (multiple ? [] : '')}
                                disabled={disabled}
                                MenuProps={MenuProps}
                                onChange={field.onChange}
                                autoWidth={autoWidth}
                                {...(multiple && {
                                    renderValue: (selected) => {
                                        const selectedArray = Array.isArray(selected) ? selected : [];
                                        return (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {selectedArray.map((value) => (
                                                    <Chip key={value} label={value} />
                                                ))}
                                            </Box>
                                        );
                                    }
                                })} 
                                >
                                {
                                optionslist.map((item) => (
                                <MenuItem
                                        key={item.id}
                                        value={item.value}
                                    >
                                        {item.value}
                                    </MenuItem>
                                ))
                            }
                            </Select>
                            {error && ( <FormHelperText sx={{ color: 'red', fontSize: '12px' }}>{error.message}</FormHelperText>)}
                        </FormControl>
                    </>
                )}
            />
        </>
    )
}