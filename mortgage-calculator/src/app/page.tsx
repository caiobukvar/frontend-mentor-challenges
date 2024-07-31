import Image from "next/image";
import CalculatorIcon from "../../assets/images/icon-calculator.svg";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-blue-100 justify-center items-center">
      <div className="flex max-w-full md:max-w-screen-lg rounded-lg flex-col sm:flex-row gap-4 md:gap-0">
        <div
          id="left-side"
          className="flex flex-col bg-white p-6 pr-14 min-h-full gap-4 
          rounded-lg max-w-[500px]"
        >
          <div className="relative mb-2">
            <h2 className="font-semibold ">Mortgage Calculator</h2>
            <button className="absolute top-0 bottom-0 right-0 underline text-neutral-500 font-500">
              Clear All
            </button>
          </div>

          <label
            htmlFor="mortgage"
            className="flex flex-col text-neutral-500 font-semibold"
          >
            Mortgage Amount
            <input
              type="number"
              name="mortgage"
              id="mortgage"
              placeholder="Insert mortgage amount"
              className="border-neutral-300 border-[1px] rounded-sm p-2 placeholder:font-normal"
            />
          </label>

          <div className="flex flex-col md:flex-row gap-2">
            <label
              htmlFor="mortgage_term"
              className="flex flex-col text-neutral-500 font-semibold flex-1"
            >
              Mortgage Term
              <input
                type="text"
                name="mortgage_term"
                id="mortgage_term"
                placeholder="0"
                className="border-neutral-300 border-[1px] rounded-sm p-2 w-full placeholder:font-normal"
              />
            </label>

            <label
              htmlFor="interest_rate"
              className="flex flex-col text-neutral-500 font-semibold flex-1"
            >
              Interest Rate
              <input
                type="text"
                name="interest_rate"
                id="interest_rate"
                placeholder="%"
                className="border-neutral-300 border-[1px] rounded-sm p-2 w-full placeholder:font-normal"
              />
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-neutral-500 font-semibold">Mortgage Type</h2>

            <label
              htmlFor="repayment"
              className="flex gap-2 p-2 border-neutral-300 border-[1px] rounded-sm relative z-10 cursor-pointer"
            >
              <input
                type="radio"
                name="mortgage_type"
                id="repayment"
                value="repayment"
                className="peer z-10 appearance-none p-[4px] w-[4px] h-[4px] self-center rounded-full
      ring-1 border-2 border-white bg-black ring-black checked:ring-yellow-500 checked:bg-yellow-600"
              />
              <span className="flex gap-2 z-10 peer-checked:text-neutral-700">
                Repayment
              </span>
              <div
                className="absolute rounded-sm top-0 bottom-0 left-0 right-0 z-0 w-full h-full
      peer-checked:ring-1 peer-checked:ring-yellow-500 peer-checked:bg-yellow-100"
              />
            </label>

            <label
              htmlFor="interest_only"
              className="flex gap-2 p-2 border-neutral-300 border-[1px] rounded-sm relative z-10 cursor-pointer"
            >
              <input
                type="radio"
                name="mortgage_type"
                id="interest_only"
                value="interest_only"
                className="peer z-10 appearance-none p-[4px] w-[4px] h-[4px] self-center rounded-full
      ring-1 border-2 border-white bg-black ring-black checked:ring-yellow-500 checked:bg-yellow-600"
              />
              <span className="flex gap-2 z-10 peer-checked:text-neutral-700">
                Interest Only
              </span>
              <div
                className="absolute rounded-sm top-0 bottom-0 left-0 right-0 z-0 w-full h-full
      peer-checked:ring-1 peer-checked:ring-yellow-500 peer-checked:bg-yellow-100"
              />
            </label>
          </div>

          <div className="flex my-3">
            <button
              className="bg-yellow-400 rounded-full text-neutral-700
            px-4 py-2 flex gap-2 font-semibold text-md items-center"
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
          className="flex flex-col bg-sky-900 min-h-full rounded-lg rounded-tl-none rounded-bl-[50px] p-6
         text-neutral-300 gap-4 translate-x-[-40px] max-w-[400px]"
        >
          <h2 className="font-semibold text-white">Your results</h2>
          <p className="text-sm">
            Your results are shown below based on the information provided. To
            adjust the results, edit the form and click &quot;calculate
            repayments&quot; again.
          </p>

          <div
            id="summary-card"
            className="flex flex-col border-t-2 border-yellow-400 p-6 rounded-md bg-sky-950 gap-2"
          >
            <div className="flex flex-col gap-2 mb-4">
              <p className="text-sm">Your monthly repayments</p>
              <p className="text-4xl font-semibold text-yellow-400">
                $99999.99
              </p>
            </div>

            <div className="flex flex-col gap-2 border-t-2 border-neutral-600">
              <p className="text-sm mt-6">
                Total you&quot;ll repay over the term
              </p>
              <p className="text-2xl font-semibold text-white">$221123.99</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
