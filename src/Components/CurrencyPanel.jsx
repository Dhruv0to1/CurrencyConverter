import React from "react";

function CurrencyPanel({
  srcdes,
  amount,
  setAmount,
  fromCountry,
  setFromCountry,
  currencyoption,
  disable,
}) {
  function onChangeHandle(e) {
    // console.log(e.target.value);
    setFromCountry(e.target.value);
  }
  function onChangeAmount(e) {
    setAmount(Number(e.target.value));
  }
  return (
    <div className="maincontainer">
      <div>
        <label htmlFor="denote">
          {srcdes}:{fromCountry}
        </label>
        <br />
        <input
          type="number"
          id="denote"
          placeholder="Amount"
          value={amount}
          disabled={disable}
          onChange={(e) => {
            onChangeAmount(e);
          }}
        />
      </div>
      <div>
        <label htmlFor="ctype">Currency type</label>
        <select
          id="ctype"
          value={fromCountry}
          onChange={(e) => {
            onChangeHandle(e);
          }}
        >
          <option value="">Select Country</option>
          {currencyoption &&
            currencyoption.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyPanel;
