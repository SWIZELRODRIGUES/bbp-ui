import { Grid } from '@mui/material';
import React, { ReactElement } from 'react';

type AppGridProps = {
    children: ReactElement;
}
function AppGrid(props: AppGridProps) {
    const { children } = props;
    
    return <Grid container 
    // spacing={1} 
    justifyContent={"center"} 
    alignContent={"center"}
    >
        {children}
    </Grid>
}

export default AppGrid;