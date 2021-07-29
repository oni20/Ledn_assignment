/*
    Loading spinner component. Will be used as Fall back component
*/

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',        
        placeContent: 'center',
        marginTop: '25%'
    },    
}));

export default function CircularUnderLoad() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress
                size={40}
                thickness={4}
                value={100}
            />
        </div>
    );
}