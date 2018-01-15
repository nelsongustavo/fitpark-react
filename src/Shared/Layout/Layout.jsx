import React from 'react';
import Header from './_/Header';
import Footer from './_/Footer';
import './Layout.css';

export default function Layout(props) {
  return (
    <div className="layout">
      <Header />
        {props.children}
      <Footer />
    </div>
  );
}
