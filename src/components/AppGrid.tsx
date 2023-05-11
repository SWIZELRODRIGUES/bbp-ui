import { Grid } from '@mui/material';
import React, { ReactElement } from 'react';
import PageShell from './pageShell/PageShell';

type AppGridProps = {
    children: ReactElement;
}
function AppGrid(props: AppGridProps) {
    const { children } = props;
    
    return <Grid container 
    // spacing={1} 
    // justifyContent={"center"} 
    alignContent={"center"}
    >
        <PageShell>
        {children}
        </PageShell>
    </Grid>
}

export default AppGrid;