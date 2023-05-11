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
        id: "color",
        label: "Color",
        fullWidth: true,
        type: FIELD_TYPE.SINGLE_SELECT,
        menuItems: [{
            id: 10,
            value: 10,
            label: 'Ten'
        }]
    },
]

function CreateTransactionCategoryForm() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                Create New Transaction Category
            </Grid>

            {createFields.map((item) => <Grid key={item.id} item xs={4}>
                {renderFormInput(item)}
            </Grid>)}

            <Grid item xs={8}>
                <Button variant="contained">Save Category</Button>
            </Grid>
        </Grid>
    );
}

export default CreateTransactionCategoryForm;
