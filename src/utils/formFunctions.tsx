import { TextField, InputLabel, Select, MenuItem } from "@mui/material";
import { ReactElement } from "react";
import { FIELD_TYPE } from "./constants";
import { CreateFields } from "./formTypes";

export const renderFormInput = (props: CreateFields): ReactElement => {
    const { type, required, id, label, fullWidth, menuItems } = props;
    switch (type) {
        case FIELD_TYPE.TEXT_FIELD: {
            return <TextField
                required={required}
                id={id}
                label={label}
                fullWidth={fullWidth}
            />
        }
        case FIELD_TYPE.SINGLE_SELECT: {
            const labelId = `${id}-label`
            return <>
                <InputLabel id={labelId}>{label}</InputLabel>
                <Select
                    required={required}
                    id={id}
                    labelId={labelId}
                    label={label}
                    fullWidth={fullWidth}
                >
                    {
                        menuItems?.map(item =>
                            <MenuItem key={item.id} value={item.value}>
                                {item.label}
                            </MenuItem>
                        )}
                </Select>
            </>
        }
        default:
            return <></>


    }
}