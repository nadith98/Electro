import React from "react";
import face_mask from "../../assets/face_mask.jpg";
import garden from "../../assets/garden.jpg";
import gift from "../../assets/gift.jpg";
import wall_decor from "../../assets/wall_decor.jpg";
import watch from "../../assets/watch.jpg";
import keyboard from "../../assets/keyboard.jpeg";
import mouse from "../../assets/mouse.jpg";
import sunglass from "../../assets/sunglass.jpg";
import wallet from "../../assets/wallet.jpeg";
import shoes from "../../assets/shoes.jpg";
import mobileadd from "../../assets/mobileadd.jpg";

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

interface FlashDealProps {
  image: string;
  currentPrice: number;
  originalPrice?: number;
  discount?: number;
  isBestseller?: boolean;
  freeShipping?: boolean;
}

interface TrendingOfferProps {
  title: string;
  image: string;
  discount: string;
  cta: string;
  ctaText: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, link }) => (
  <div className="relative group rounded-full overflow-hidden bg-green-50 p-3 cursor-pointer transition-transform hover:scale-105">
    <img
      src={image}
      alt={title}
      className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full mx-auto"
    />
    <div className="text-center mt-2">
      <p className="text-gray-700 text-xs md:text-sm font-medium">
        {title} <span className="ml-1">→</span>
      </p>
    </div>
  </div>
);

const FlashDealCard: React.FC<FlashDealProps> = ({
  image,
  currentPrice,
  originalPrice,
  discount,
  isBestseller,
  freeShipping,
}) => (
  <div className="relative group cursor-pointer">
    <div className="aspect-square overflow-hidden rounded-lg">
      <img
        src={image}
        alt="Product"
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
      />
    </div>
    <div className="mt-2">
      <div className="flex items-center gap-2">
        <span className="text-base font-medium">
          USD {currentPrice.toFixed(2)}
        </span>
        {originalPrice && (
          <span className="text-sm text-gray-500 line-through">
            USD {originalPrice.toFixed(2)}
          </span>
        )}
        {discount && (
          <span className="text-green-600 text-sm">({discount}% off)</span>
        )}
      </div>
      <div className="flex gap-2 mt-1">
        {isBestseller && (
          <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">
            Bestseller
          </span>
        )}
        {freeShipping && (
          <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
            FREE shipping
          </span>
        )}
      </div>
    </div>
  </div>
);

const TrendingOfferCard: React.FC<TrendingOfferProps> = ({
  title,
  image,
  discount,
  cta,
  ctaText,
}) => (
  <div className="group cursor-pointer flex flex-col items-center text-center">
    <div className="aspect-square w-full overflow-hidden rounded-lg mb-2">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
      />
    </div>
    <h3 className="text-sm md:text-base font-medium text-gray-800">{title}</h3>
    <p className="text-green-600 text-xs md:text-sm font-medium">{discount}</p>
    <a href={cta} className="text-gray-500 text-xs hover:text-gray-700">
      {ctaText}
    </a>
  </div>
);

const Home = () => {
  const categories = [
    {
      title: "Face masks",
      image: face_mask,
      link: "/face-masks",
    },
    {
      title: "Gift ideas",
      image: garden,
      link: "/gifts",
    },
    {
      title: "Wall decor",
      image: gift,
      link: "/wall-decor",
    },
    {
      title: "Outdoor & garden",
      image: wall_decor,
      link: "/outdoor",
    },
  ];

  const flashDeals = [
    {
      image: shoes,
      currentPrice: 21.75,
      originalPrice: 29.0,
      discount: 25,
    },
    {
      image: wallet,
      currentPrice: 28.12,
      originalPrice: 46.87,
      discount: 40,
      freeShipping: true,
    },
    {
      image: sunglass,
      currentPrice: 54.0,
      isBestseller: true,
    },
    {
      image: mouse,
      currentPrice: 27.29,
      originalPrice: 38.99,
      discount: 30,
    },
    {
      image: keyboard,
      currentPrice: 31.39,
      originalPrice: 44.85,
      discount: 30,
    },
    {
      image: watch,
      currentPrice: 40.0,
      isBestseller: true,
    },
  ];

  const trendingOffers = [
    {
      title: "Women's Sarees",
      image: face_mask,
      discount: "Extra 20% off",
      cta: "/sarees",
      ctaText: "Explore Now!",
    },
    {
      title: "Wrist Watches",
      image: watch,
      discount: "Extra 5% Off",
      cta: "/watches",
      ctaText: "Hurry, Don't Miss Out!",
    },
    {
      title: "Wallets",
      image: wallet,
      discount: "Extra 20% off",
      cta: "/wallets",
      ctaText: "Grab Now!",
    },
    {
      title: "Women's Dress Materials",
      image: gift,
      discount: "Extra 20% off",
      cta: "/dress-materials",
      ctaText: "Shop Now!",
    },
    {
      title: "Sunglasses",
      image: sunglass,
      discount: "Extra 20% off",
      cta: "/sunglasses",
      ctaText: "Discover now!",
    },
    {
      title: "Jewellery Sets",
      image: wall_decor,
      discount: "Extra 20% off",
      cta: "/jewelry",
      ctaText: "Great Savings!",
    },
    {
      title: "Sports Shoes",
      image: shoes,
      discount: "Extra 20% Off",
      cta: "/shoes",
      ctaText: "Buy Now!",
    },
    {
      title: "Women's Jackets",
      image: garden,
      discount: "Extra 10% Off",
      cta: "/jackets",
      ctaText: "Explore Now!",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Categories Grid - Left Side */}
        <div className="md:w-1/3">
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                image={category.image}
                link={category.link}
              />
            ))}
          </div>
        </div>
        {/* Banner - Right Side */}
        <div
          className="md:w-2/3 relative h-[300px] rounded-lg bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${mobileadd})` }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-70 rounded-lg"></div>
          <div className="relative z-10 p-6">
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
                ENHANCE YOUR
                <br />
                ENTERTAINMENT
              </h2>
              <p className="text-gray-600 mb-4">
                LAST CALL FOR UP TO{" "}
                <span className="text-2xl md:text-3xl font-bold">$250</span>{" "}
                OFF!
              </p>
              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
                Start Buying
              </button>
            </div>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>

      {/* Flash Deals Section */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <h2 className="text-xl font-semibold">Flash Deals</h2>
            <div className="flex gap-1 ml-2">
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-sm">
                04
              </span>
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-sm">
                14
              </span>
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-sm">
                55
              </span>
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-sm">
                47
              </span>
            </div>
          </div>
          <button className="text-gray-600 hover:text-gray-800">
            SEE MORE →
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {flashDeals.map((deal, index) => (
            <FlashDealCard key={index} {...deal} />
          ))}
        </div>
      </div>

      {/* Trending Offers Section */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Trending Offers</h2>
          <button className="text-gray-600 hover:text-gray-800 text-sm">
            SEE MORE →
          </button>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {trendingOffers.map((offer, index) => (
              <TrendingOfferCard key={index} {...offer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
