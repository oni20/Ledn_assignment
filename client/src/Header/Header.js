/*
    Header component of overall application
*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { getConfig } from '../Config'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    customAppBar: {
        backgroundColor: 'rgb(22, 102, 142)'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    brandLogo: {
        width: '90px',
        maxWidth: '100%'
    }
}));

export default function Header() {
    const headerConfig = getConfig('Header');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.customAppBar}>
                <Toolbar>
                    <img src={headerConfig.logoSrc} className={classes.brandLogo} alt="Ledn, Financial services for holders of Digital assets" />
                </Toolbar>
            </AppBar>
        </div>
    );
}