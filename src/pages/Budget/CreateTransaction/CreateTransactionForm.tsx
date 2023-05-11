import { Button, Grid } from '@mui/material';
import { FIELD_TYPE } from '../../../utils/constants';
import { renderFormInput } from '../../../utils/formFunctions';

const createFields = [
    {
        xsSize: 4,
        required: true,
        id: "date",
        label: "Date",
        fullWidth: true,
        type: FIELD_TYPE.TEXT_FIELD
    },
    {
        xsSize: 4,
        required: true,
        id: "description",
        label: "Description",
        fullWidth: true,
        type: FIELD_TYPE.TEXT_FIELD
    },
    {
        xsSize: 4,
        required: true,
        id: "category",
        label: "Category",
        fullWidth: true,
        type: FIELD_TYPE.TEXT_FIELD
    },
    {
        xsSize: 4,
        required: true,
        id: "credit",
        label: "Credit",
        fullWidth: true,
        type: FIELD_TYPE.TEXT_FIELD
    },
    {
        xsSize: 4,
        required: true,
        id: "Debit",
        label: "Debit",
        fullWidth: true,
        type: FIELD_TYPE.TEXT_FIELD
    },
    {
        xsSize: 4,
        required: true,
        id: "budget_period",
        label: "Budget Period",
        fullWidth: true,
        type: FIELD_TYPE.SINGLE_SELECT,
        menuItems: [{
            id: 1,
            value: '03-2023',
            label: 'March 2023'
        },{
            id: 1,
            value: '04-2023',
            label: 'April 2023'
        }]
    },
]



function CreateTransactionForm() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                Create New Transaction 
            </Grid>
{createFields.map((item) => <Grid key={item.id} item xs={4}>
                {renderFormInput(item)}
            </Grid>)}

            <Grid item xs={8}>
                <Button variant="contained">Save Transaction</Button>
            </Grid>
        </Grid>
    );
}

export default CreateTransactionForm;
