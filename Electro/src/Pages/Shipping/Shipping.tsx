import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.jpg";
import apple from "../../assets/apple.jpg";

interface ShippingProps {
  onContinue?: (data: ShippingFormData) => void;
}

interface ShippingFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  country: string;
  postalCode: string;
  saveInfo: boolean;
  billingAddressSame: boolean;
}

const Shipping: React.FC<ShippingProps> = ({ onContinue }) => {
  const [formData, setFormData] = useState<ShippingFormData>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "Sri Lanka",
    postalCode: "",
    saveInfo: false,
    billingAddressSame: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue?.(formData);
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="mb-12 flex justify-center">
        <div className="flex w-full max-w-4xl items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="h-4 w-4 rounded-full bg-black"></div>
            <span className="mt-2 text-sm text-gray-600">Shipping</span>
          </div>
          <div className="flex-1 border-t border-gray-300"></div>
          <div className="flex flex-col items-center">
            <div className="h-4 w-4 rounded-full border border-gray-300"></div>
            <span className="mt-2 text-sm text-gray-600">Payment</span>
          </div>
          <div className="flex-1 border-t border-gray-300"></div>
          <div className="flex flex-col items-center">
            <div className="h-4 w-4 rounded-full border border-gray-300"></div>
            <span className="mt-2 text-sm text-gray-600">Review</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col justify-center gap-16 lg:flex-row lg:items-start">
          <div className="w-full lg:max-w-sm">
            <button className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 text-center text-sm">
              Continue as a guest
            </button>

            <div className="relative mb-4 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative">
                <span className="bg-white px-2 text-sm text-gray-500">OR</span>
              </div>
            </div>

            {/* Sign In Form */}
            <div className="mb-6">
              <h2 className="mb-4 text-lg font-medium">Sign in or register</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <button className="w-full rounded-md bg-black py-2.5 text-sm text-white">
                  Continue
                </button>
                <div className="text-center">
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Trouble signing in?
                  </a>
                </div>

                <div className="space-y-3">
                  <button className="flex w-full items-center justify-center rounded-md border border-gray-300 py-2 text-sm">
                    <img src={google} alt="Google" className="mr-2 h-5 w-5" />
                    Continue with Google
                  </button>
                  <button className="flex w-full items-center justify-center rounded-md border border-gray-300 py-2 text-sm">
                    <img
                      src={facebook}
                      alt="Facebook"
                      className="mr-2 h-5 w-5"
                    />
                    Continue with Facebook
                  </button>
                  <button className="flex w-full items-center justify-center rounded-md border border-gray-300 py-2 text-sm">
                    <img src={apple} alt="Apple" className="mr-2 h-5 w-5" />
                    Continue with Apple
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:max-w-md">
            <div className="mb-8">
              <h2 className="mb-2 text-lg font-medium">Billing address</h2>
              <p className="mb-4 text-sm text-gray-600">
                Select the address that matches your card or payment method.
              </p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={formData.billingAddressSame}
                    onChange={() =>
                      setFormData({ ...formData, billingAddressSame: true })
                    }
                    className="mr-2"
                  />
                  <span className="text-sm">Same as shipping address</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={!formData.billingAddressSame}
                    onChange={() =>
                      setFormData({ ...formData, billingAddressSame: false })
                    }
                    className="mr-2"
                  />
                  <span className="text-sm">
                    Use a different billing address
                  </span>
                </label>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <h2 className="mb-4 text-lg font-medium">Shipping address</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="First name (optional)"
                    className="w-full rounded-md border border-gray-300 p-2 text-sm"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full rounded-md border border-gray-300 p-2 text-sm"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-md border border-gray-300 p-2 text-sm"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full rounded-md border border-gray-300 p-2 text-sm"
                  value={formData.apartment}
                  onChange={(e) =>
                    setFormData({ ...formData, apartment: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full rounded-md border border-gray-300 p-2 text-sm"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="relative">
                    <select
                      className="w-full appearance-none rounded-md border border-gray-300 p-2 text-sm"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                    >
                      <option value="Sri Lanka">Sri Lanka</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Postal code"
                    className="w-full rounded-md border border-gray-300 p-2 text-sm"
                    value={formData.postalCode}
                    onChange={(e) =>
                      setFormData({ ...formData, postalCode: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={formData.saveInfo}
                    onChange={(e) =>
                      setFormData({ ...formData, saveInfo: e.target.checked })
                    }
                  />
                  <span className="text-sm text-gray-600">
                    Save this information for next time
                  </span>
                </label>
              </div>

              <div className="mt-6 flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
                <a
                  href="/paymentmethod"
                  className="rounded-md bg-black px-6 py-2.5 text-sm text-white hover:bg-gray-800"
                >
                  Continue to shipping
                </a>
                <button
                  type="button"
                  className="text-sm text-red-500 hover:underline"
                >
                  Return to cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
