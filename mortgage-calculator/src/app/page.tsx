import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-blue-100 justify-center items-center">
      <div className="flex max-w-full md:max-w-screen-lg rounded-lg flex-col sm:flex-row gap-4 md:gap-0">
        <div className="flex flex-col bg-white p-6 pr-14 min-h-full gap-2  rounded-lg max-w-[500px]">
          <div className="relative mb-4">
            <h2 className="font-semibold ">Mortgage Calculator</h2>
            <button className="absolute top-0 bottom-0 right-0 underline text-gray-500 font-500">
              Clear All
            </button>
          </div>

          <label
            htmlFor="mortgage"
            className="flex flex-col text-gray-500 font-semibold"
          >
            Mortgage Amount
            <input
              type="number"
              name="mortgage"
              id="mortgage"
              className="border-gray-300 border-[1px] rounded-sm p-2"
            />
          </label>

          <div className="flex flex-col md:flex-row gap-2">
            <label
              htmlFor="mortgage_term"
              className="flex flex-col text-gray-500 font-semibold flex-1"
            >
              Mortgage Term
              <input
                type="text"
                name="mortgage_term"
                id="mortgage_term"
                className="border-gray-300 border-[1px] rounded-sm p-2 w-full"
              />
            </label>

            <label
              htmlFor="interest_rate"
              className="flex flex-col text-gray-500 font-semibold flex-1"
            >
              Interest Rate
              <input
                type="text"
                name="interest_rate"
                id="interest_rate"
                className="border-gray-300 border-[1px] rounded-sm p-2 w-full"
              />
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-gray-500 font-semibold">Mortgage Type</h2>
            <div className="flex gap-2 p-2 border-gray-300 border-[1px] rounded-sm">
              <label htmlFor="repayment" className="flex gap-2">
                <input
                  type="radio"
                  name="mortgage_type"
                  id="repayment"
                  value="repayment"
                />
                Repayment
              </label>
            </div>
            <div className="flex gap-2 p-2 border-gray-300 border-[1px] rounded-sm">
              <label htmlFor="interest_only" className="flex gap-2">
                <input
                  type="radio"
                  name="mortgage_type"
                  id="interest_only"
                  value="interest_only"
                />
                Interest Only
              </label>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col bg-sky-950 min-h-full rounded-lg rounded-tl-none rounded-bl-[50px] p-6
         text-white gap-4 translate-x-[-40px] max-w-[500px]"
        >
          <h2 className="font-semibold">Your results</h2>
          <p className="text-sm">
            Your results are shown below based on the information provided. To
            adjust the results, edit the form and click &quot;calculate
            repayments&quot; again.
          </p>
          <div className="border-t-2 border-yellow-400 p-6">
            <p>Your monthly repayments</p>
            <p className="text-2xl font-semibold text-yellow-400">$99999.99</p>

            <p>Total you&quot;ll repay over the term</p>
            <p className="text-2xl font-semibold">$221123.99</p>
          </div>
        </div>
      </div>
    </main>
  );
}
