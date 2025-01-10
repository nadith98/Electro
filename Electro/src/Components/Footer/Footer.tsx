import React from "react";
import { Mail } from "lucide-react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full">
      <div className="bg-lime-500 p-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Mail className="text-white" size={24} />
            <span className="text-white text-lg">Sign up to Newsletter</span>
          </div>
          <span className="text-white">
            ...and receive $20 coupon for first shopping and free delivery.
          </span>
          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-md flex-1 md:w-64"
            />
            <button className="bg-gray-800 text-white px-6 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">electro.</h2>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🎧</span>
                </div>
                <div>
                  <p className="text-sm">Got questions? Call us 24/7!</p>
                  <p className="text-gray-600">
                    (800) 8001-8588, (0600) 874 548
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Find In Fast</h3>
              <ul className="space-y-2">
                {[
                  "Accessories",
                  "Gaming",
                  "Laptops & Computer",
                  "Mac Computers",
                  "PC Computers",
                  "Ultrabooks",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">In the Spotlight</h3>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Contact Us",
                  "All Collections",
                  "Privacy policy",
                  "Terms & Conditions",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Customer Care</h3>
              <ul className="space-y-2">
                {[
                  "Electronics",
                  "Toys",
                  "Video Games",
                  "Home Products",
                  "Clothing",
                  "Sports & Outdoors",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 flex gap-4">
            {["facebook", "twitter", "instagram", "pinterest", "youtube"].map(
              (social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                >
                  <span className="sr-only">{social}</span>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
