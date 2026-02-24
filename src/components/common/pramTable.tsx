"use client"
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useState, useMemo } from 'react';

interface HeadCell {
    id: string;
    label: string;
}

interface Data {
    id: string;
    [key: string]: any;
}

interface TableProps{
    rows: Data[];
    headCells: readonly HeadCell[];
}

export default function TablePlainComponent({
    rows,
    headCells,
}: TableProps) {
    const theme = useTheme();
    const [filters, setFilters] = useState<Record<string, string>>({});

    const filteredRows = useMemo(() => {
        return rows.filter(row => {
            return headCells.every(headCell => {
                const filterValue = filters[String(headCell.id)]?.toLowerCase() || '';
                if (!filterValue) return true;
                const cellValue = String(row[headCell.id] || '').toLowerCase();
                return cellValue.includes(filterValue);
            });
        });
    }, [rows, filters, headCells]);

    const handleFilterChange = (columnId: string, value: string) => {
        setFilters(prev => ({ ...prev, [columnId]: value }));
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer
                    sx={{
                        overflow: 'auto',  // Ensures both vertical & horizontal scroll inside
                        position: 'relative',
                        minHeight: '200px',
                        maxHeight: '500px'
                    }}
                >
                    <Table
                        stickyHeader
                        aria-label="sticky table"
                    >
                        <TableHead
                            sx={{
                                // Important: force sticky behavior on this row too
                                position: 'sticky',
                                top: 0,
                                zIndex: 3,                    // higher than filter row
                            }}
                        >
                            <TableRow>
                                {headCells.map((headCell) => (
                                    <TableCell
                                        key={String(headCell.id)}
                                        sx={{
                                            padding:"10px",
                                            whiteSpace: 'nowrap',
                                            fontWeight: "bold",
                                            minWidth: "200px",
                                            backgroundColor: "lightblue"
                                        }}
                                    >
                                        {headCell.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                            <TableRow>
                                {headCells.map((headCell) => (
                                    <TableCell key={`filter-${String(headCell.id)}`} sx={{ backgroundColor: "#f5f5f5",padding:"10px", }}>
                                        <TextField
                                            size="small"
                                            placeholder={`Search`}
                                            value={filters[String(headCell.id)] || ''}
                                            onChange={(e) => handleFilterChange(String(headCell.id), e.target.value)}
                                            fullWidth
                                            sx={{
                                                backgroundColor: "white"
                                            }}
                                        />
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredRows.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={headCells.length} align="center" sx={{ py: 3, color: '#888', fontStyle: 'italic' }}>
                                        No records
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredRows.map((row) => {

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.id}
                                            sx={{
                                                cursor: 'pointer',
                                            }}
                                        >
                                            {headCells.map((headCell, cellIndex) => (
                                                <TableCell
                                                    key={`${row.id}-${String(headCell.id)}`}
                                                    component={cellIndex === 0 ? 'th' : undefined}
                                                    scope={cellIndex === 0 ? 'row' : undefined}
                                                    sx={{
                                                        whiteSpace: 'nowrap',
                                                    }}
                                                >
                                                    {String(row[headCell.id]) === "null" || String(row[headCell.id]) === "undefined" ? "" : String(row[headCell.id])}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    );
                                })
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}