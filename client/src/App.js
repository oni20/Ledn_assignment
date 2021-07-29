/*
    Main application boilerplate
*/

import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

/* Custom Import */
import Header from './Header/Header';
import Layout from './Layout/Layout';
import DataGrid from './DataGrid/DataGrid';
import Loading from './Loading/Loading';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/accounts")
      .then((res) => res.json())
      .then((data) => setData(JSON.parse(data)));
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      margin: '30px 0'
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <Header />

      <Layout>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {data
              ? <div className="App">
                <Typography variant="h3" className={classes.title}>List of accounts</Typography>
                <DataGrid data={data} />
              </div>
              : <Loading />
            }
          </Grid>
        </Grid>
      </Layout>
    </div>
  )
}

export default App;
