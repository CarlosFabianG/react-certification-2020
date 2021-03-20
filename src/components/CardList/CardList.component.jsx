import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '../Card';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Cardlist() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <Grid item xs={3}>
            <Card />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
