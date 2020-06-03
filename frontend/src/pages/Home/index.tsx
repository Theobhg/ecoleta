import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <main>
          <h1>Your waste collection marketplace.</h1>
          <p>We help people find collection points efficiently.</p>

          <a href="/register">
            <span>
              <FiLogIn />
            </span>
            <strong>Register a colect point</strong>
          </a>
        </main>
      </div>
    </div>
  )
}

export default Home;