import { useState } from "react";
import { useNavigate } from "react-router-dom";
import diamond_ring from "../assets/diamond_ring.jpg";
import keyboard from "../assets/keyboard.jpeg";
import mouse from "../assets/mouse.jpg";
import sunglass from "../assets/sunglass.jpg";
import wallet from "../assets/wallet.jpeg";
import shoes from "../assets/shoes.jpg";
import mobileadd from "../assets/mobileadd.jpg";

const DiamondRing = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState("without-exchange");
  const navigate = useNavigate();

  const thumbnails = [keyboard, mouse, sunglass, wallet, shoes, mobileadd];

  const handleBuyNow = () => {
    // pass product details and quantity
    const productDetails = {
      name: "Rose Gold Plated Diamond Ring with Moonstone",
      price: 1000,
      quantity: quantity,
      image: diamond_ring,
      total: 1000 * quantity,
    };

    navigate("/shipping", { state: { productDetails } });
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex">
          <div className="hidden md:flex flex-col space-y-2 mr-4">
            {thumbnails.map((thumb, index) => (
              <div
                key={index}
                className="w-16 h-16 border rounded cursor-pointer hover:border-blue-500"
              >
                <img
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex-1 relative">
            <img
              src={diamond_ring}
              alt="Diamond Ring"
              className="w-full rounded"
            />
            <button className="absolute top-4 right-4 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-medium mb-2">
            Rose Gold Plated Diamond Ring with Moonstone
          </h1>

          {/* Ratings */}
          <div className="flex items-center mb-4">
            <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">
              4.6 ★
            </span>
            <span className="ml-2 text-sm text-gray-600">
              87,748 Ratings & 7,515 Reviews
            </span>
          </div>

          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-medium">$ 1000</span>
              <span className="text-gray-500 line-through">$1500</span>
              <span className="text-green-600">11% off</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Available offers</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span className="text-green-600 mr-2">✓</span>
                Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit
                Card T&C
              </li>
              <li className="flex items-center text-sm">
                <span className="text-green-600 mr-2">✓</span>
                Special Price Extra ₹3901 off (price inclusive of discount) T&C
              </li>
              <li className="flex items-center text-sm">
                <span className="text-green-600 mr-2">✓</span>
                No cost EMI ₹7,834/month. Standard EMI also available
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex space-x-4 mb-4">
              <button
                className={`px-4 py-2 rounded-lg ${
                  selectedTab === "without-exchange"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-gray-50"
                }`}
                onClick={() => setSelectedTab("without-exchange")}
              >
                Buy without Exchange
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  selectedTab === "with-exchange"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-gray-50"
                }`}
                onClick={() => setSelectedTab("with-exchange")}
              >
                Buy with Exchange
              </button>
            </div>
            {selectedTab === "with-exchange" && (
              <div className="text-sm text-gray-600">
                Enter pincode to check if exchange is available
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <span className="text-sm">Quantity</span>
            <div className="flex items-center border rounded">
              <button
                className="px-3 py-1 border-r"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                className="px-3 py-1 border-l"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-yellow-400 text-white py-3 rounded-lg font-medium hover:bg-yellow-500">
              ADD TO CART
            </button>
            <div className="flex-1">
              <button
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600"
                onClick={handleBuyNow}
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondRing;
