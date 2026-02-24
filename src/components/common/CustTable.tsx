"use client"
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TextField } from "@mui/material";
import { useState, useMemo } from 'react';
import { visuallyHidden } from '@mui/utils';

interface HeadCell {
    id: string;
    label: string;
    disableSorting?: boolean; // Default is true (disabled)
    disableSearch?: boolean; // Default is false (search enabled)
}

interface Data {
    [key: string]: any;
}

interface TableProps {
    rows: Data[];
    headCells: readonly HeadCell[];
    selectedRowId: string;
    handleRowClick: (id: string) => void;
    maxHeight?: string | number;
    hoverColor?: string;
    selectedColor?:string;
    tableHeaderBgColor?: string;

}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

const stableSort = <T,>(array: readonly T[], comparator: (a: T, b: T) => number) =>
    [...array].sort(comparator);

interface EnhancedTableHeadProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
    order: Order;
    orderBy: string;
    headCells: readonly HeadCell[];
    filters: { [key: string]: string };
    handleFilterChange: (columnId: string, value: string) => void;
    tableHeaderBgColor: string;
}

function EnhancedTableHead(props: EnhancedTableHeadProps) {
    const { order, orderBy, onRequestSort, headCells, filters, handleFilterChange } = props;
    
    const createSortHandler = (property: string, disableSorting?: boolean) => 
        (event: React.MouseEvent<unknown>) => {
            if (!disableSorting) {
                onRequestSort(event, property);
            }
        };

    return (
        <TableHead>
            <TableRow sx={{ height: "50px" }}>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        sortDirection={orderBy === headCell.id && !headCell.disableSorting ? order : false}
                        sx={{
                            padding: "8px 16px",
                            whiteSpace: 'nowrap',
                            fontWeight: "bold",
                            backgroundColor: "#ebedf0",
                        }}
                    >
                        {headCell.disableSorting ? (
                            headCell.label
                        ) : (
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id, headCell.disableSorting)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        )}
                    </TableCell>
                ))}
            </TableRow>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell 
                        key={`filter-${headCell.id}`} 
                        sx={{ backgroundColor: "#f5f5f5", padding: "8px", minWidth:"200px" }}
                    >
                        {!headCell.disableSearch ? (
                            <TextField
                                size="small"
                                placeholder="Search"
                                value={filters[headCell.id] || ''}
                                onChange={(e) => handleFilterChange(headCell.id, e.target.value)}
                                fullWidth
                                sx={{
                                    backgroundColor: "white",
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#d0d0d0',
                                        },
                                    }
                                }}
                            />
                        ) : null}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default function TableComponent({
    rows,
    headCells,
    selectedRowId,
    handleRowClick,
    maxHeight = 600,
    hoverColor="rgba(25, 118, 210, 0.2)",
    tableHeaderBgColor="#ebedf0",
    selectedColor="rgba(25, 118, 210, 0.12)"
}: TableProps) {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<string>('');
    const [filters, setFilters] = useState<{ [key: string]: string }>({});

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleFilterChange = (columnId: string, value: string) => {
        setFilters(prev => ({
            ...prev,
            [columnId]: value
        }));
    };

    const filteredRows = useMemo(() => {
        return rows.filter(row => {
            return Object.keys(filters).every(key => {
                const filterValue = filters[key].toLowerCase();
                if (!filterValue) return true;
                const cellValue = String(row[key] || '').toLowerCase();
                return cellValue.includes(filterValue);
            });
        });
    }, [rows, filters]);

    const sortedRows = useMemo(() => {
        if (!orderBy) return filteredRows;
        return stableSort(filteredRows, getComparator(order, orderBy));
    }, [filteredRows, order, orderBy]);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight }}>
                <Table stickyHeader>
                    <EnhancedTableHead
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        headCells={headCells}
                        filters={filters}
                        handleFilterChange={handleFilterChange}
                        tableHeaderBgColor={tableHeaderBgColor}
                    />
                    <TableBody>
                        {sortedRows.map((row, index) => {
                            const isSelected = selectedRowId === row.id;
                            return (
                                <TableRow
                                    key={row.id || index}
                                    hover
                                    onClick={() => handleRowClick(row.id)}
                                    selected={isSelected}
                                    sx={{
                                        cursor: 'pointer',
                                        '&.Mui-selected': {
                                            backgroundColor: `${selectedColor}`,
                                        },
                                        '&.Mui-selected:hover': {
                                            backgroundColor: `${hoverColor}`,
                                        }
                                    }}
                                >
                                    {headCells.map((headCell) => (
                                        <TableCell 
                                            key={`${row.id}-${headCell.id}`}
                                            sx={{ padding: "8px 16px" }}
                                        >
                                            {row[headCell.id]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            );
                        })}
                        {sortedRows.length === 0 && (
                            <TableRow>
                                <TableCell 
                                    colSpan={headCells.length} 
                                    align="center"
                                    sx={{ padding: "24px" }}
                                >
                                    No data found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
