import React from 'react';
import { Grid } from 'react-bootstrap';
import Layout from '../../Shared/Layout';
import './Home.css';

export default function Home() {
    return (
      <div className="home">
        <Layout>
          <div className="banner">
            <Grid>
              <h1>FitPark Academia</h1>
            </Grid>
          </div>
        </Layout>
      </div>
    );
  }
