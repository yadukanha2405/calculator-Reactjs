import { useState } from "react";
import "./styles.css";

export default function App() {
  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");
  const [final, setFinal] = useState(false);
  const [finalResult, setFInalResult] = useState("");

  const oprts = ["+", "-", "*", "/", "."];

  const countDigits = () => {
    let digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => handleClick(i.toString())}
          className="button"
          key={i}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  const handleClick = (val) => {
    setFinal(false);
    if (
      (oprts.includes(val) && oprts.includes(cal.slice(-1))) ||
      (oprts.includes(val) && cal === "")
    ) {
      return;
    }
    setCal(cal + val);
    if (!oprts.includes(val)) {
      setResult(eval(cal + val).toString());
    }
  };

  const handleResult = () => {
    setFinal(true);
    if (!oprts.includes(cal.slice(-1))) {
      setFInalResult(result);
    }
  };

  const handleDelet = () => {
    setCal("");
    setResult("");
    setFinal(false);
  };

  const handleCancle = () => {
    setFinal(false);
    if (cal === "") {
      setResult("");
      return;
    }
    let temp = cal.slice(0, -1);
    console.log(temp);
    setCal(temp);
    console.log(cal);

    if (oprts.includes(temp.slice(-1))) {
      setResult(eval(temp.slice(0, -1)).toString());
    } else {
      setResult(eval(temp));
    }
  };
  return (
    <div className="App">
      <div className="container">
        <div className="display">
          <span className="result">({result ? result : 0})</span>

          {final ? finalResult : cal ? cal : "0"}
        </div>
        <div className="oprators">
          <button onClick={() => handleClick("+")} className="button oprator ">
            +
          </button>
          <button onClick={() => handleClick("-")} className="button oprator">
            -
          </button>
          <button onClick={() => handleClick("*")} className="button oprator">
            *
          </button>
          <button onClick={() => handleClick("/")} className="button oprator">
            /
          </button>
          <button onClick={handleCancle} className="button oprator">
            C
          </button>
          <button onClick={handleDelet} className="button oprator">
            DEL
          </button>
        </div>

        <div className="buttons">
          {countDigits()}

          <button onClick={() => handleClick(".")} className="button">
            .
          </button>
          <button onClick={() => handleClick("0")} className="button">
            0
          </button>
          <button onClick={handleResult} className="button">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
