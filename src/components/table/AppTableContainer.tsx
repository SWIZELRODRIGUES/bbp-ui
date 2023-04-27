import { Table, TableContainer } from '@mui/material';
import React, { ReactElement } from 'react';
import AppTableBody from './AppTableBody';
import Paper from '@mui/material/Paper';

type AppTableContainerProps = {
    header: ReactElement;
    rows : any[];
    renderRow:   (row:any) => ReactElement;
}

function AppTableContainer(props: AppTableContainerProps) {
    const { header, rows, renderRow } = props;
    return (
        <div>
            <TableContainer component={Paper}>
                <Table >
                    {header}
                    <AppTableBody rows={rows} renderRow={renderRow}/>
                </Table>
            </TableContainer>
        </div>
    );
}

export default AppTableContainer;
