import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        heading:{
           padding: theme.spacing(8),
           textAlign: 'center',
           color: theme.palette.text.secondary,
        }
    }),
);

const NotFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.heading}>
                        <Typography variant="h2" component="h2">
                            Page Not Found
                        </Typography>
                    </Paper>
                </Grid>                
            </Grid>
        </div>
    );
};

export default NotFound;