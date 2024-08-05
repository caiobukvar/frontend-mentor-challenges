"use client";

import Image from "next/image";
import { useState } from "react";
import CalculatorIcon from "../../../assets/images/icon-calculator.svg";

interface Mortgage {
  amount: number;
  rate: number;
  term: number;
  type: string;
}

interface Result {
  monthly: number;
  total: number;
}

export default function MortgageForm() {
  const [mortgage, setMortgage] = useState<Mortgage>({
    amount: 0,
    rate: 0,
    term: 0,
    type: "repayment",
  });

  const [currency, setCurrency] = useState<string>("USD");
  const [mortgageResult, setMortgageResult] = useState<Result>({
    monthly: 0,
    total: 0,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    let isValid = true;
    let errors: { [key: string]: string } = {};

    if (mortgage.amount <= 0) {
      errors.amount = "Mortgage amount must be greater than zero.";
      isValid = false;
    }
    if (mortgage.rate <= 0) {
      errors.rate = "Interest rate must be greater than zero.";
      isValid = false;
    }
    if (mortgage.term <= 0) {
      errors.term = "Mortgage term must be greater than zero.";
      isValid = false;
    }
    if (!mortgage.type) {
      errors.type = "Please select a mortgage type.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const calculateMortgage = () => {
    if (!validateForm()) return;

    let monthly = 0;
    let total = 0;

    if (mortgage.type === "repayment") {
      monthly =
        (mortgage.amount * (mortgage.rate / 100 / 12)) /
        (1 - Math.pow(1 + mortgage.rate / 100 / 12, -12 * mortgage.term));
      total = monthly * 12 * mortgage.term;
    } else if (mortgage.type === "interest_only") {
      monthly = (mortgage.amount * (mortgage.rate / 100)) / 12;
      total = monthly * 12 * mortgage.term + mortgage.amount;
    }

    setMortgageResult({ monthly, total });
  };

  const clearForm = () => {
    setMortgage({ amount: 0, rate: 0, term: 0, type: "repayment" });
    setMortgageResult({ monthly: 0, total: 0 });
    setErrors({});
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setMortgage({ ...mortgage, [name]: parseFloat(value) });
  };

  const handleTypeChange = (e: any) => {
    setMortgage({ ...mortgage, type: e.target.id });
    setErrors({ ...errors, type: "" }); // Clear error on type change
  };

  const handleCurrencyChange = (e: any) => {
    setCurrency(e.target.value);
  };

  const currencySymbol = (currency: string) => {
    switch (currency) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      case "GBP":
        return "£";
      case "BRL":
        return "R$";
      default:
        return "$";
    }
  };

  return (
    <form className="flex max-w-full md:max-w-screen-lg rounded-lg flex-col sm:flex-row gap-4 md:gap-0">
      <div
        id="left-side"
        className="flex flex-col bg-white p-6 pr-14 min-h-full gap-4 
      rounded-lg max-w-[500px]"
      >
        <div className="relative mb-2">
          <h2 className="font-semibold ">Mortgage Calculator</h2>
          <button
            className="absolute top-0 bottom-0 right-0 underline text-neutral-500 font-500"
            onClick={clearForm}
          >
            Clear All
          </button>
        </div>

        <label
          htmlFor="mortgage_amount"
          className="flex flex-col text-neutral-500 font-semibold"
        >
          Mortgage Amount
          <div className="flex relative">
            <input
              type="number"
              name="amount"
              id="mortgage_amount"
              placeholder="Insert mortgage amount"
              onChange={handleInputChange}
              className={`peer border-slate-300 border-[1px] rounded-r-md p-2 placeholder:font-normal flex-1 ml-12
                focus:outline-none focus:ring-2 focus:ring-slate-700 ${
                  errors.amount ? "border-red-500" : ""
                }`}
            />
            <select
              value={currency}
              onChange={handleCurrencyChange}
              className={`absolute left-0 border-slate-300 bg-slate-100 rounded-l-md h-full border-[1px] border-r-0 pl-2
                peer-focus:ring-2 peer-focus:ring-slate-700 ${
                  errors.amount ? "border-red-500" : ""
                }`}
            >
              <option value="USD">$</option>
              <option value="EUR">€</option>
              <option value="GBP">£</option>
              <option value="BRL">R$</option>
            </select>
          </div>
          {errors.amount && (
            <p className="text-red-500 text-sm">{errors.amount}</p>
          )}
        </label>

        <div className="flex flex-col md:flex-row gap-2">
          <label
            htmlFor="mortgage_term"
            className="flex flex-col text-neutral-500 font-semibold flex-1"
          >
            Mortgage Term
            <div className="flex relative">
              <input
                type="number"
                name="term"
                id="mortgage_term"
                placeholder="Insert term"
                onChange={handleInputChange}
                className={`peer border-slate-300 border-[1px] rounded-md p-2 w-full
                placeholder:font-normal pr-10 focus:outline-none focus:ring-2 focus:ring-slate-700 ${
                  errors.term ? "border-red-500" : ""
                }`}
              />
              <span
                className="absolute right-0 top-1/2 transform -translate-y-1/2
              text-gray-500 bg-slate-100 h-full p-2 border border-slate-300
                border-l-0 rounded-r-md
                peer-focus:ring-2 peer-focus:ring-slate-700"
              >
                years
              </span>
            </div>
            {errors.term && (
              <p className="text-red-500 text-sm">{errors.term}</p>
            )}
          </label>

          <label
            htmlFor="mortgage_rate"
            className="flex flex-col text-neutral-500 font-semibold flex-1"
          >
            Interest Rate
            <div className="flex relative">
              <input
                type="number"
                name="rate"
                id="mortgage_rate"
                placeholder="Insert interest rate"
                onChange={handleInputChange}
                className={`peer border-slate-300 border-[1px] rounded-md p-2 w-full 
                placeholder:font-normal pr-10 focus:outline-none focus:ring-2 focus:ring-slate-700 ${
                  errors.rate ? "border-red-500" : ""
                }`}
              />
              <span
                className="absolute right-0 top-1/2 transform -translate-y-1/2
              text-gray-500 bg-slate-100 h-full p-2 border border-slate-300
              border-l-0 rounded-r-md
              peer-focus:ring-2 peer-focus:ring-slate-700"
              >
                %
              </span>
            </div>
            {errors.rate && (
              <p className="text-red-500 text-sm">{errors.rate}</p>
            )}
          </label>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-neutral-500 font-semibold">Mortgage Type</h2>

          <label
            htmlFor="repayment"
            className="flex gap-2 p-2 border-slate-300 border-[1px] rounded-md relative z-10 cursor-pointer"
          >
            <input
              type="radio"
              name="mortgage_type"
              id="repayment"
              value="repayment"
              checked={mortgage.type === "repayment"}
              onChange={handleTypeChange}
              className="peer z-10 appearance-none p-[4px] w-[4px] h-[4px] self-center rounded-full
              ring-1 border-2 border-white bg-black ring-black checked:ring-[#D7DA2F] checked:bg-[#D7DA2F]"
            />
            <span className="flex gap-2 z-10 text-neutral-700 font-semibold">
              Repayment
            </span>
            <div
              className="absolute rounded-md top-0 bottom-0 left-0 right-0 z-0 w-full h-full
              peer-checked:ring-1 peer-checked:ring-[#D7DA2F] peer-checked:bg-[#D7DA2F] peer-checked:bg-opacity-20"
            />
          </label>

          <label
            htmlFor="interest_only"
            className="flex gap-2 p-2 border-slate-300 border-[1px] rounded-md relative z-10 cursor-pointer"
          >
            <input
              type="radio"
              name="mortgage_type"
              id="interest_only"
              value="interest_only"
              checked={mortgage.type === "interest_only"}
              onChange={handleTypeChange}
              className="peer z-10 appearance-none p-[4px] w-[4px] h-[4px] self-center rounded-full
              ring-1 border-2 border-white bg-black ring-black checked:ring-[#D7DA2F] checked:bg-[#D7DA2F]"
            />
            <span className="flex gap-2 z-10 text-neutral-700 font-semibold">
              Interest Only
            </span>
            <div
              className="absolute rounded-md top-0 bottom-0 left-0 right-0 z-0 w-full h-full
              peer-checked:ring-1 peer-checked:ring-[#D7DA2F] peer-checked:bg-[#D7DA2F] peer-checked:bg-opacity-20"
            />
          </label>
        </div>

        <div className="flex my-3">
          <button
            type="button"
            className="bg-[#D7DA2F] rounded-full text-slate-700
            px-4 py-2 flex gap-2 font-semibold text-md items-center"
            onClick={calculateMortgage}
          >
            <Image
              src={CalculatorIcon}
              alt="calc-icon"
              width={24}
              height={24}
            />
            Calculate Repayments
          </button>
        </div>
      </div>

      <div
        id="right-side"
        className="flex flex-col bg-slate-700 min-h-full rounded-lg rounded-tl-none rounded-bl-[50px] p-6
      text-white gap-4 md:translate-x-[-40px] max-w-[400px]"
      >
        <h2 className="font-semibold text-white">Your results</h2>
        <p className="text-sm">
          Your results are shown below based on the information provided. To
          adjust the results, edit the form and click &quot;calculate
          repayments&quot; again.
        </p>

        <div
          id="summary-card"
          className="flex flex-col border-t-4 border-[#D7DA2F] p-6 rounded-md bg-slate-900 gap-2"
        >
          <div className="flex flex-col gap-2 mb-4">
            <p className="text-sm">Your monthly repayments</p>
            <p className="text-4xl font-semibold text-[#D7DA2F]">
              {currencySymbol(currency)}
              {mortgageResult.monthly
                ? mortgageResult.monthly.toFixed(2)
                : "0.00"}
            </p>
          </div>

          <div className="flex flex-col gap-2 border-t-2 border-slate-500">
            <p className="text-sm mt-6">
              Total you&apos;ll repay over the term
            </p>
            <p className="text-2xl font-semibold text-white">
              {currencySymbol(currency)}
              {mortgageResult.total ? mortgageResult.total.toFixed(2) : "0.00"}
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
