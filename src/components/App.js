import React from "react";
import { initialState, reducer } from "../reducers";
import { useReducer } from "react";
import { applyNumber, changeOperation, clearDisplay } from "../actions";

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick = (number) => {
    dispatch(applyNumber(number));
  };

  const handleOperationClick = (operator) => {
    dispatch(changeOperation(operator));
  };

  const clearDisplayClick = (clear) => {
    dispatch(clearDisplay(clear));
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={(evt) => handleNumberClick(evt.target.value)}
              />
              <CalcButton
                value={2}
                onClick={(evt) => handleNumberClick(evt.target.value)}
              />
              <CalcButton
                value={3}
                onClick={(evt) => handleNumberClick(evt.target.value)}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={(evt) => handleNumberClick(evt.target.value)}
              />
              <CalcButton
                value={5}
                onClick={(evt) => handleNumberClick(evt.target.value)}
              />
              <CalcButton
                value={6}
                onClick={(evt) => handleNumberClick(evt.target.value)}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={(evt) => handleNumberClick(evt.target.value)}
              />
              <CalcButton
                value={8}
                onClick={(evt) => handleNumberClick(evt.target.value)}
              />
              <CalcButton
                value={9}
                onClick={(evt) => handleNumberClick(evt.target.value)}
              />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={(evt) => handleOperationClick(evt.target.value)}
              />
              <CalcButton
                value={"*"}
                onClick={(evt) => handleOperationClick(evt.target.value)}
              />
              <CalcButton
                value={"-"}
                onClick={(evt) => handleOperationClick(evt.target.value)}
              />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => clearDisplayClick()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
