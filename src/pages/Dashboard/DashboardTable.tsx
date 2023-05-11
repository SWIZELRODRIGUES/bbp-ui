import React, { ReactElement } from 'react';
import AppTableContainer from '../../components/table/AppTableContainer';
import AppTableHeader from '../../components/table/AppTableHeader';
import { TableCell } from '@mui/material';
import { data } from './Data';

const headers = [{
    key: 'period',
    header: 'Budgeting Period'
}, {
    key: 'inflow',
    header: 'Inflow'
}, {
    key: 'debt',
    header: 'Debt'
}, {
    key: 'investment',
    header: 'Investment'
},
{
    key: 'savings',
    header: 'Savings'
}, {
    key: 'expenses',
    header: 'Expenses'
}, {
    key: 'rollover',
    header: 'Rollover'
}]

const header = (): ReactElement => {
    return (
        <AppTableHeader headers={headers} />
    )
}
const renderCell = (value: string | number): ReactElement => {
    return (
        <TableCell >
            {value}
        </TableCell>
    )
}
const renderRow = (row: any) => {
    return (
        <>
            {headers.map(header => {
                return renderCell(row[header.key])
            })}
        </>
    )
}

function DashboardTable() {
    return (
        <div>
            <AppTableContainer header={header()} renderRow={renderRow} rows={data} />
        </div>
    );
}

export default DashboardTable;
