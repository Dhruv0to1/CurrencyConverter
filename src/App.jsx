import React, { useEffect, useState } from "react";
import CurrencyPanel from "./Components/CurrencyPanel";

function App() {
  let arr = ["From", "To"];
  const [amount, setAmount] = useState(0);
  const [fromCountry, setFromCountry] = useState("usd");
  const [currency, setCurrency] = useState({});
  const [currencyoption, setCurrencyOption] = useState([]);
  const [convertAmount, setConvertAmount] = useState(0);
  const [toCountry, setToCountry] = useState("inr");
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCountry}.json`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setCurrency(data[fromCountry]);
        // console.log(data[fromCountry]);
      });
  }, [fromCountry]);
  useEffect(() => {
    setCurrencyOption(Object.keys(currency));
    // console.log(Object.keys(currency));
  }, [currency]);

  function onClickHandle() {
    setFromCountry(toCountry);
    setToCountry(fromCountry);
  }
  function onConversionHandle() {
    let val = amount * currency[toCountry];
    setConvertAmount(val);
  }
  return (
    <>
      <div className="outercont">
        <h2>Currency Converter</h2>
        <CurrencyPanel
          srcdes={arr[0]}
          amount={amount}
          setAmount={setAmount}
          fromCountry={fromCountry}
          setFromCountry={setFromCountry}
          currencyoption={currencyoption}
          disable={false}
        />
        <button
          className="swapBut"
          onClick={() => {
            onClickHandle();
          }}
        >
          Swap
        </button>
        <CurrencyPanel
          srcdes={arr[1]}
          amount={convertAmount}
          fromCountry={toCountry}
          setFromCountry={setToCountry}
          currencyoption={currencyoption}
          disable={true}
        />
        <button className="swapBut main" onClick={onConversionHandle}>
          Convert {fromCountry} to {toCountry}
        </button>
      </div>
    </>
  );
}

export default App;
