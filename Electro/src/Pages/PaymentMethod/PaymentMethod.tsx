import React, { useState } from "react";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import amex from "../../assets/amex.png";
import paypal from "../../assets/paypal.png";
import { LockIcon, CreditCard, HelpCircle } from "lucide-react";

interface PaymentMethodProps {
  onMethodSelect?: (method: string) => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ onMethodSelect }) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [giftCode, setGiftCode] = useState<string>("");
  const [billingIsSameAsShipping, setBillingIsSameAsShipping] = useState(true);
  const [setAsDefault, setSetAsDefault] = useState(false);

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method);
    onMethodSelect?.(method);
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      {/* Progress Bar */}
      <div className="mb-12 flex justify-center">
        <div className="flex w-full max-w-4xl items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="h-4 w-4 rounded-full border border-gray-300"></div>
            <span className="mt-2 text-sm text-gray-600">Shipping</span>
          </div>
          <div className="flex-1 border-t border-gray-300"></div>
          <div className="flex flex-col items-center">
            <div className="h-4 w-4 rounded-full border bg-black"></div>
            <span className="mt-2 text-sm text-gray-600">Payment</span>
          </div>
          <div className="flex-1 border-t border-gray-300"></div>
          <div className="flex flex-col items-center">
            <div className="h-4 w-4 rounded-full border border-gray-300"></div>
            <span className="mt-2 text-sm text-gray-600">Review</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto p-4">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-medium text-gray-800 mb-2">
              Choose a payment method
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              You will not be charged until you review this order on the next
              page.
            </p>

            <div className="space-y-4">
              {/* Credit Card Option */}
              <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    className="w-4 h-4 text-blue-600"
                    checked={selectedMethod === "card"}
                    onChange={() => handleMethodSelect("card")}
                  />
                  <span className="text-gray-700">Card</span>
                </div>
                <div className="flex space-x-2">
                  <img src={mastercard} alt="Mastercard" className="h-5" />
                  <img src={visa} alt="Visa" className="h-5" />
                  <img src={amex} alt="Amex" className="h-5" />
                </div>
              </label>

              {/* Card Details Form */}
              {selectedMethod === "card" && (
                <div className="mt-6 p-6 border rounded-lg space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="cardName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name on card <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="cardNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Card number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cardNumber"
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <LockIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="expiry"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Expiration date{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="expiry"
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          <option>1</option>
                        </select>
                      </div>
                      <div className="relative">
                        <label
                          htmlFor="securityCode"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Security code <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="securityCode"
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                          <LockIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <HelpCircle className="absolute right-8 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={billingIsSameAsShipping}
                          onChange={(e) =>
                            setBillingIsSameAsShipping(e.target.checked)
                          }
                          className="h-4 w-4 rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm text-gray-600">
                          My billing address is the same as my shipping address:
                          <div className="text-gray-500 text-xs mt-1">
                            No10, colombo 10, flower RD
                          </div>
                        </span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={setAsDefault}
                          onChange={(e) => setSetAsDefault(e.target.checked)}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm text-gray-600">
                          Set as default
                        </span>
                      </label>
                    </div>

                    <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                      Review your order
                    </button>
                  </div>
                </div>
              )}

              <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    className="w-4 h-4 text-blue-600"
                    checked={selectedMethod === "paypal"}
                    onChange={() => handleMethodSelect("paypal")}
                  />
                  <span className="text-gray-700">Pay with PayPal</span>
                </div>
                <img src={paypal} alt="PayPal" className="h-5" />
              </label>

              <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    className="w-4 h-4 text-blue-600"
                    checked={selectedMethod === "cash"}
                    onChange={() => handleMethodSelect("cash")}
                  />
                  <span className="text-gray-700">Cash on Delivery</span>
                </div>
              </label>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium text-gray-800 mb-6">
              Gift cards & Etsy Credit
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter code"
                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={giftCode}
                onChange={(e) => setGiftCode(e.target.value)}
              />
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
