import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer">
        <Grid>
          <img class="logo" alt="Smart Fit" title="Smart Fit" src="http://www.fitparkacademia.com.br/wp-content/themes/ovid/data/1330435782_Logomarca_fitPark.png" />
          <Row className="show-grid footer-menu">
            <Col sm={6} md={6}>
              <h3>Institucional</h3>
            	<ul className="list">
                <li className="item"><a href="/">teste</a></li>
                <li className="item"><a href="/">teste</a></li>
                <li className="item"><a href="/">teste</a></li>
              </ul>
            </Col>
            <Col sm={6} md={6}>
              <h3>Planos</h3>
              <ul className="list">
                <li className="item"><a href="/">teste</a></li>
                <li className="item"><a href="/">teste</a></li>
                <li className="item"><a href="/">teste</a></li>
              </ul>
            </Col>
            <Col sm={6} md={3}>
              <h3>Corporativo</h3>
              <ul className="list">
                <li className="item"><a href="/">teste</a></li>
                <li className="item"><a href="/">teste</a></li>
                <li className="item"><a href="/">teste</a></li>
              </ul>
            </Col>
            <Col sm={6} md={3}>
              <h3>Siga a FitPark</h3>
              <ul className="list">
                <li className="item"><a href="/">teste</a></li>
                <li className="item"><a href="/">teste</a></li>
                <li className="item"><a href="/">teste</a></li>
              </ul>
            </Col>
          </Row>
          <Row>
            <div className="footer-info">
              <h3>Bla Bla Bla</h3>
              <p>
                O preço da mensalidade não inclui taxa de adesão ou de manutenção anual.
                Pagamento mensal por débito automático em conta corrente ou no cartão de crédito.
                Sujeito a alterações em aviso prévio. Não aceitamos cheques. Pagamento em dinheiro
                deve ser feito à vista, direto na unidade, incluindo mensalidades do período de 12 meses,
                taxa de adesão e manutenção anual vigentes.
              </p>
            </div>
          </Row>
        </Grid>
    </footer>
  );
}
