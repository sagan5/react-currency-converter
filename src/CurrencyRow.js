import React from "react";

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    initialCurrency,
    onChangeAmount,
    amount
  } = props;
  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select
        value={
          selectedCurrency.length === 0 ? initialCurrency : selectedCurrency
        }
        onChange={onChangeCurrency}
        multiple={false}
      >
        {currencyOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
