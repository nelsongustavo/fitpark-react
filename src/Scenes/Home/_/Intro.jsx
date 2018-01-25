import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default function Intro() {
    return (
      <section className="intro">
        <Grid>
          <Row className="show-grid footer-menu">
            <Col sm={12} md={6}>
              <h3>Institucional</h3>
            	<ul className="list">
                <li className="item"><a href="/">teste</a></li>
                <li className="item"><a href="/">teste</a></li>
                <li className="item"><a href="/">teste</a></li>
              </ul>
            </Col>
            <Col sm={12} md={6}>
              <h3>Planos</h3>
              <ul className="list">
                <li className="item"><a href="/">teste</a></li>
                <li className="item"><a href="/">teste</a></li>
                <li className="item"><a href="/">teste</a></li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
