/*
    Common Layout of overall application. This component act as Master template and
    load child as per passing props
*/

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography component="div" style={{ height: '100vh' }}>
                    {children}
                </Typography>
            </Container>
        </React.Fragment>
    );
}