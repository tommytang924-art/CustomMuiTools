"use client"

import { InputAdornment, InputLabel, TextField, TextFieldProps } from "@mui/material";
import { Controller, UseFormReturn } from "react-hook-form";
import { useTheme } from "@mui/material/styles";

// Extend with MUI props for flexibility, omitting conflicts
interface CustomTextFieldProps extends Omit<TextFieldProps, "variant" | "size" | "rows" | "maxRows" | "margin"> {
  placeholder?: string;
  size?: "medium" | "small"; // medium is default
  variant?: "outlined" | "filled" | "standard"; // outlined is default
  label?: string;
  disabled?: boolean;
  IconComponent?: React.ElementType;
  iconPosition?: "start" | "end";
  fullWidth?: boolean;
  borderColor?: string; // border color
  textColor?: string;
  bgColor?: string;
  form: UseFormReturn<any>;
  inputTitle?: string;
  formFieldName: string; // name of formValue
  useLabel: boolean;
  multiline?: boolean; // Explicit for textarea mode
  rows?: number; // Renamed to match MUI
  maxRows?: number; // Renamed to match MUI
  multilineLabelOffset?: number; // New: px to adjust shrunk label position (higher number = more space below label)
  fontSize?: number; // the font size of content
  labelFontSize?: number; //the font size of label
  labelColor?: string;
  borderWidth?: number;
  hoverBorderColor?: string;
  focusedBorderColor?: string;
  margin?: "none" | "normal" | "dense";
}

export default function CustomTextField({
  placeholder,
  size = "medium",
  variant = "outlined",
  label,
  IconComponent,
  iconPosition = "start",
  fullWidth = true,
  borderColor,
  textColor,
  bgColor,
  form,
  inputTitle,
  formFieldName,
  useLabel,
  multiline: explicitMultiline,
  rows,
  maxRows,
  multilineLabelOffset = 15,
  fontSize = 16,
  labelFontSize = 18,
  labelColor,
  borderWidth = 2,
  hoverBorderColor,
  focusedBorderColor,
  margin = "dense",
  ...rest // Spread remaining TextFieldProps
}: CustomTextFieldProps) {


  const theme = useTheme();
  const isMultiline = explicitMultiline || !!rows || !!maxRows;
  return (
    <>
      <Controller
        name={formFieldName}
        control={form.control}
        render={({ field, fieldState: { error } }) => (
          <>
            {inputTitle && <InputLabel>{inputTitle}</InputLabel>}
            <TextField
              {...field}
              {...rest}
              {...(useLabel && { label })}
              placeholder={placeholder}
              variant={variant}
              size={size}
              fullWidth={fullWidth}
              error={!!error}
              helperText={error?.message}
              multiline={isMultiline}
              rows={rows}
              maxRows={maxRows}
              margin={margin}
              

              InputLabelProps={{
                sx: {
                  color: labelColor, // Default label color
                  fontSize: `${labelFontSize}px`,
                  "&.Mui-focused": {
                    color: labelColor, // Match focused border for consistency
                  },
                  ...(isMultiline && {
                    "&.MuiInputLabel-shrink": {
                      transform: `translate(14px, -${multilineLabelOffset}px) scale(0.75)`,
                    },
                  }),
                },
              }}
              slotProps={{
                input: {
                  ...(IconComponent && {
                    [iconPosition === "start" ? "startAdornment" : "endAdornment"]: (
                      <InputAdornment position={iconPosition}>
                        <IconComponent />
                      </InputAdornment>
                    ),
                  }),
                  sx: {
                    color: textColor,
                    backgroundColor: bgColor,
                    fontSize: `${fontSize}px`,
                    
                    // Filled variant specific handling
                    ...(variant === "filled" && bgColor && {
                      "&:hover": {
                        backgroundColor: bgColor,
                      },
                      "&.Mui-focused": {
                        backgroundColor: bgColor,
                        opacity: 0.6,
                        color: textColor
                      },
                    }),
                  },
                },
              }}
              // 3. Root-level sx for borders and multiline padding
              sx={{
                // Outlined variant border customizations
                ...(variant === "outlined" && {
                  "& .MuiOutlinedInput-root": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor,
                      borderWidth: `${borderWidth}px`,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: hoverBorderColor,
                      borderWidth: `${borderWidth}px`,
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: focusedBorderColor,
                      borderWidth: `${borderWidth + 1}px`, // Slightly thicker on focus
                    },
                    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.error.main,
                    },
                    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.action.disabled,
                    },
                    // ...(isMultiline && {
                    //   "&.MuiInputBase-multiline": {
                    //     padding: "0 14px", // Consistent multiline padding
                    //   },
                    // }),
                  },
                }),
                // Standard variant underline customizations (if needed)
                ...(variant === "standard" && {
                  "& .MuiInput-root": {
                    "&:before": {
                      borderBottomColor: borderColor,
                      borderBottomWidth: `${borderWidth}px`,
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottomColor: hoverBorderColor,
                      borderBottomWidth: `${borderWidth}px`,
                    },
                    "&.Mui-focused:after": {
                      borderBottomColor: focusedBorderColor,
                      borderBottomWidth: `${borderWidth + 1}px`,
                    },
                    "&.Mui-error:after": {
                      borderBottomColor: theme.palette.error.main,
                    },
                  },
                }),
                // Filled variant underline customizations (if needed)
                ...(variant === "filled" && {
                  "& .MuiFilledInput-root": {
                    "&:before": {
                      borderBottomColor: borderColor,
                      borderBottomWidth: `${borderWidth}px`,
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottomColor: hoverBorderColor,
                      borderBottomWidth: `${borderWidth}px`,
                    },
                    "&.Mui-focused:after": {
                      borderBottomColor: focusedBorderColor,
                      borderBottomWidth: `${borderWidth + 1}px`,
                    },
                    "&.Mui-error:after": {
                      borderBottomColor: theme.palette.error.main,
                    },
                  },
                }),
              }}
            />
          </>
        )}
      />
    </>
  );
}