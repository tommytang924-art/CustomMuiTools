"use client"
import { Box, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, TextField } from "@mui/material";
import { useState, useMemo } from 'react';
import { visuallyHidden } from '@mui/utils';

interface HeadCell {
    id: string;
    label: string;
    disableSorting: boolean; // Default is true (disabled)
    disableSearch: boolean; // Default is false (search enabled)
}

interface Data {
    [key: string]: any;
}

interface TableProps {
    rows: Data[];
    headCells: readonly HeadCell[];
    needSelect: boolean;
    selectedRowId?: string;
    handleRowClick?: (id: string) => void;
    maxHeight?: string | number;
    hoverColor?: string;
    selectedColor?: string;
    tableHeaderBgColor?: string;
    rowHeight?: string;
    usePagination?: boolean;
    rowPerPage?: number;
    rowPerPageOpt?: number[];

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
        <TableHead
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 3,                    // higher than filter row
            }}
        >
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
                                active={true}
                                hideSortIcon={false}
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
            {headCells.some(headCell => !headCell.disableSearch) && (
                <TableRow>
                    {headCells.map((headCell) => (
                        <TableCell
                            key={`filter-${headCell.id}`}
                            sx={{ backgroundColor: "#f5f5f5", padding: "8px", minWidth: "200px" }}
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
            )}
        </TableHead>
    );
}

interface CustomPaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => void;
}

function CustomPaginationActions(props: CustomPaginationActionsProps) {
    const { count, page, rowsPerPage, onPageChange } = props;

    const totalPages = Math.ceil(count / rowsPerPage);

    const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
        // Pagination component is 1-based, TablePagination is 0-based
        onPageChange(null, newPage - 1);
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <Pagination
                count={totalPages}
                page={page + 1}
                onChange={handlePageChange}
                shape="circular"
            />
        </Box>
    );
}



export default function TableSearchComponent({
    rows,
    headCells,
    selectedRowId,
    handleRowClick,
    maxHeight = 600,
    hoverColor = "rgba(25, 118, 210, 0.2)",
    tableHeaderBgColor = "#ebedf0",
    selectedColor = "rgba(25, 118, 210, 0.12)",
    rowHeight = "25px",
    usePagination = false,
    rowPerPage = 5,
    rowPerPageOpt = [5, 10, 20],
    needSelect
}: TableProps) {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<string>('');
    const [filters, setFilters] = useState<{ [key: string]: string }>({});
    const [search, setSearch] = useState('');

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


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowPerPage);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight }}>
                <Table stickyHeader aria-label="sticky table">
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
                        {(usePagination ? sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : sortedRows).map((row, index) => {
                            const isSelected = needSelect && selectedRowId === row.id;
                            return (
                                <TableRow
                                    key={row.id || index}
                                    hover
                                    {...needSelect && handleRowClick && {
                                        onClick: () => handleRowClick(row.id)
                                    }
                                    }
                                    selected={isSelected}
                                    sx={{
                                        cursor: needSelect ? 'pointer' : 'default',
                                        '&.Mui-selected': {
                                            backgroundColor: needSelect ? `${selectedColor}` : 'transparent',
                                        },
                                        '&.Mui-selected:hover': {
                                            backgroundColor: needSelect ? `${hoverColor}` : 'transparent',
                                        },
                                        height: `${rowHeight}`
                                    }}
                                >
                                    {headCells.map((headCell) => (
                                        <TableCell
                                            key={`${row.id}-${headCell.id}`}
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
            {

                usePagination && (
                    <TablePagination
                        rowsPerPageOptions={rowPerPageOpt}
                        component="div"
                        ActionsComponent={CustomPaginationActions}
                        count={sortedRows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                )
            }

        </Paper >
    );
}
