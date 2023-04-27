import { TableHead, TableRow, TableCell } from '@mui/material';
import React from 'react';

type AppTableHeaderProps = {
    headers: {
        key: string,
        header: string,
    }[]
}

function AppTableHeader(props: AppTableHeaderProps) {
    const { headers } = props;
    return (
            <TableHead>
                <TableRow>
                    {headers.map(({ key, header }) => {
                        return (
                            <TableCell key={key} >{header}</TableCell>
                        )
                    })}
                </TableRow>
            </TableHead>
    );
}

export default AppTableHeader;
