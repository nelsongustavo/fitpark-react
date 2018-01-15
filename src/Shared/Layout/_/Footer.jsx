import React from 'react';
import { Grid, Navbar, Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <Navbar inverse className="layout-footer">
      <Grid>
        <Row className="show-grid" />
      </Grid>
    </Navbar>
  );
}
