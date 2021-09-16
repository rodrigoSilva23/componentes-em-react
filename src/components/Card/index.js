import { useState } from "react";
import Button from "../Button"

const Card = () => {
  const [count, setCount] = useState(0);

  function adicionar() {
    setCount(count + 1);
  }
  function remover() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="card">
      <div className="card-header">Meu primeiro card</div>
      <div className="card-body">
        <h5 className="card-title">contador:{count}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button color="info" onClick={adicionar}>
          Clique para soma
        </Button>
        <Button onClick={remover} className="ml-2">
          Clique para subtrair
        </Button>
      </div>
    </div>
  );
};

export default Card;
