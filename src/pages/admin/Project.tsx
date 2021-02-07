import React from "react"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function Projects () {

    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <Paper>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper style={{color: "#000"}}>xs=6</Paper>
            </Grid>
        </Grid>
    )
    
} 
