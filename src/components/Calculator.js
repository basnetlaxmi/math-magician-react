/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import calculate from '../logic/Calculate';

const Calculator = () => {
  const [state, NewState] = useState({});

  const handleClick = (e) => {
    NewState(calculate(state, e.target.textContent));
  };

  const { next, total } = state;
  return (
    <div className="calc-container">
      <div className="screen">
        {next || total || 0 }
      </div>
      <div className="button-box">
          <div className="button-row">
            <button type="button" className="button-column" onClick={this.handleClick}>
              AC
            </button>
            <button type="button" className="button-column" onClick={this.handleClick}>
              +/-
            </button>
            <button type="button" className="button-column" onClick={this.handleClick}>
              %
            </button>
            <button type="button" className="button-column orange" onClick={this.handleClick}>
              ÷
            </button>
          </div>
          <div className="button-row">
            <button type="button" className="button-column" onClick={this.handleClick}>
              7
            </button>
            <button type="button" className="button-column" onClick={this.handleClick}>
              8
            </button>
            <button type="button" className="button-column" onClick={this.handleClick}>
              9
            </button>
            <button type="button" className="button-column orange" onClick={this.handleClick}>
              x
            </button>
          </div>
          <div className="button-row">
            <button type="button" className="button-column" onClick={this.handleClick}>
              4
            </button>
            <button type="button" className="button-column" onClick={this.handleClick}>
              5
            </button>
            <button type="button" className="button-column" onClick={this.handleClick}>
              6
            </button>
            <button type="button" className="button-column orange" onClick={this.handleClick}>
              -
            </button>
          </div>
          <div className="button-row">
            <button type="button" className="button-column" onClick={this.handleClick}>
              1
            </button>
            <button type="button" className="button-column" onClick={this.handleClick}>
              2
            </button>
            <button type="button" className="button-column" onClick={this.handleClick}>
              3
            </button>
            <button type="button" className="button-column orange" onClick={this.handleClick}>
              +
            </button>
          </div>
          <div className="button-row">
            <button type="button" className="button-column-1" onClick={this.handleClick}>
              0
            </button>
            <button type="button" className="button-column-2" onClick={this.handleClick}>
              .
            </button>

            <button type="button" className="button-column orange" onClick={this.handleClick}>
              =
            </button>
          </div>


          <button type="button" className="button-column orange" onClick={handleClick}>
            =
          </button>
        </div>

      </div>

    </div>
  );
};
export default Calculator;
