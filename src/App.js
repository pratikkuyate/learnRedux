import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
import { Button, Input } from "reactstrap";

function App() {
  const myState = useSelector((state) => state.updateNumber);
  const dispatch = useDispatch();

  return (
    <div className="container text-center">
      <h1>Increment/Decrement using Redux</h1>
      <div className="quantity">
        <div className="row mt-6">
          <div className="col lg-4">
            <Button color="primary" onClick={() => dispatch(decNumber())}>
              {" "}
              -{" "}
            </Button>
          </div>
          <div className="col lg-4">
            <Input type="text" className="quantity__input" value={myState} />
          </div>
          <div className="col lg-4">
            <Button color="primary" onClick={() => dispatch(incNumber(5))}>
              {" "}
              +{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
