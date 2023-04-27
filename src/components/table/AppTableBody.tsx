import { TableBody, TableRow } from '@mui/material';
import React, { ReactElement } from 'react';

type AppTableBodyProps = {
    rows: any[];
    renderRow: (row: any) => ReactElement;
}


function AppTableBody(props: AppTableBodyProps) {
    const { rows, renderRow } = props;

    return (
            <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        {renderRow(row)}
                    </TableRow>
                ))}
            </TableBody>
    );
}

export default AppTableBody;
