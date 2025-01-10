import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

interface NavbarProps {
  freeDeliveryThreshold?: number;
  cartTotal?: number;
  cartItems?: number;
  wishlistItems?: number;
}

const Navbar: React.FC<NavbarProps> = ({
  freeDeliveryThreshold = 500,
  cartTotal = 0,
  cartItems = 0,
  wishlistItems = 0,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { name: "All", icon: "≡", path: "/" },
    { name: "Today Deals", icon: "🌂", path: "/todaydeals" },
    { name: "Laptops & Computers", icon: "💻", path: "/laptops-computers" },
    { name: "Cameras", icon: "📸", path: "/cameras" },
    { name: "Smartphones & Tablets", icon: "📱", path: "/smartphones-tablets" },
    { name: "Gaming", icon: "🎮", path: "/gaming" },
    { name: "TV & Audio", icon: "📺", path: "/tv-audio" },
    { name: "Headphones", icon: "🎧", path: "/headphones" },
    { name: "Drones", icon: "🚁", path: "/drones" },
    { name: "Virtual Reality", icon: "🥽", path: "/virtual-reality" },
  ];

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="bg-gray-50 py-2 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-2 md:mb-0">
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              <span>(+800) 123 456 7890</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="h-4 w-4 mr-2" />
              <span>sample@email.com</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Gift Cards
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Track Your Order
            </a>
            <div className="flex items-center space-x-2">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Register
              </a>
              <span className="text-gray-400">or</span>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-4">
        <div className="flex flex-col md:flex-row items-center px-6 md:px-8">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="/" className="text-2xl font-bold pl-2">
              electro<span className="text-gray-400">.</span>
            </a>
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          <div className="hidden md:flex items-center justify-between w-full">
            <div className="flex items-center text-gray-600 mx-8">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Sri Lanka - Jaffna</span>
            </div>

            {/*Search bar */}
            <div className="flex-1 max-w-xl mx-auto px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-lime-500"
                />
                <button className="absolute right-0 top-0 h-full px-6 bg-lime-500 text-white rounded-r-full hover:bg-lime-600">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-6 ml-8">
              <div className="text-sm">
                <div className="text-gray-500">Remaining to</div>
                <div className="flex items-center">
                  <span>Free Delivery</span>
                  <span className="ml-2 text-blue-600 font-semibold">
                    ${freeDeliveryThreshold.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="relative">
                <Heart className="h-6 w-6 text-gray-600 cursor-pointer" />
                {wishlistItems > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center bg-lime-500 text-white text-xs rounded-full">
                    {wishlistItems}
                  </span>
                )}
              </div>

              <div className="relative">
                <ShoppingBag className="h-6 w-6 text-gray-600 cursor-pointer" />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center bg-lime-500 text-white text-xs rounded-full">
                    {cartItems}
                  </span>
                )}
                <div className="ml-2 text-sm font-semibold">
                  ${cartTotal.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-center space-x-8 py-3 overflow-x-auto">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.path}
                className="flex items-center text-gray-600 hover:text-lime-500 whitespace-nowrap text-sm"
              >
                <span className="mr-2">{category.icon}</span>
                <span>{category.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Categories */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-3">
              <div className="grid grid-cols-2 gap-4">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href="todaydeals"
                    className="flex items-center text-gray-600 hover:text-lime-500 text-sm"
                  >
                    <span className="mr-2">{category.icon}</span>
                    <span>{category.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 mt-4"></div>
      </div>
    </div>
  );
};

export default Navbar;
