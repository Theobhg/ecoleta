import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta"/>

        <Link to="/">
          <FiArrowLeft />
          Back to Home
        </Link>
      </header>

      <form>
        <h1>Collect point register</h1>

        <fieldset>
          <legend>
            <h2>Data</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Entity name</label>
            <input 
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="field-group">
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="field">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input 
              type="text"
              name="whatsapp"
              id="whatsapp"
            />
          </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Address</h2>
            <span>Select the address on the map</span>
          </legend>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">UF</label>
              <select name="uf" id="uf">
              <option value="0">Select a UF</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">City</label>
              <select name="city" id="city">
              <option value="0">Select a city</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Collection items</h2>
            <span>Select one or more items below</span>
          </legend>

          <ul className="items-grid">
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste" />
              <span>Kitchen oil</span>
            </li>

            <li className="selected">
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste" />
              <span>Kitchen oil</span>
            </li>

            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste" />
              <span>Kitchen oil</span>
            </li>

            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste" />
              <span>Kitchen oil</span>
            </li>

            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste" />
              <span>Kitchen oil</span>
            </li>

            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste" />
              <span>Kitchen oil</span>
            </li>
          </ul>
        </fieldset>
        <button type="submit">
          Register collection point
        </button>
      </form>
    </div>
  );
};

export default CreatePoint;