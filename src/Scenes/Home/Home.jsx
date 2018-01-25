import React from 'react';
import { Grid } from 'react-bootstrap';
import Layout from '../../Shared/Layout';
import Intro from './_/Intro';
import './Home.css';

export default function Home() {
    return (
      <div className="home">
        <Layout>
          <div className="banner">
            <Grid>
              <Intro />
            </Grid>
          </div>
        </Layout>
      </div>
    );
  }
