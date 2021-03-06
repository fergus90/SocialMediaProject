import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import untitle from './images/memories.png';
import useStyles from './style';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography
          className={classes.heading}
          variant="h2"
          align="center"
          style={{ fontWeight: 600 }}
        >
          Untitle Project
        </Typography>
        <img
          className={classes.image}
          src={untitle}
          alt="untitle"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          ></Grid>
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
