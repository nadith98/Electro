import React from "react";
import { Star } from "lucide-react";
import diamond_ring from "../../assets/diamond_ring.jpg";
import emerald_ring from "../../assets/Emerald_ring.jpg";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  seller: string;
  freeShipping?: boolean;
  moreColors?: boolean;
}

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
    {children}
  </div>
);

const ProductCard: React.FC<Product> = ({
  id,
  title,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  seller,
  freeShipping,
  moreColors,
}) => (
  <Link
    to={`/product/${id}`}
    className="block border rounded-lg p-2 hover:shadow-lg transition-shadow"
  >
    <div className="relative aspect-square mb-2">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-md"
      />
      {moreColors && (
        <span className="absolute top-2 right-2 bg-white px-2 py-1 text-xs rounded">
          More colors
        </span>
      )}
    </div>
    <div className="p-2">
      <h3 className="text-sm text-gray-800 truncate">{title}</h3>
      <p className="text-xs text-gray-500">Ad by {seller}</p>
      <div className="flex items-center mt-1">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }
            />
          ))}
        </div>
        <span className="text-xs text-gray-500 ml-1">({reviews})</span>
      </div>
      <div className="flex items-center mt-1">
        <span className="font-medium">USD {price.toFixed(2)}</span>
        {originalPrice && (
          <span className="text-xs text-gray-500 line-through ml-2">
            USD {originalPrice.toFixed(2)}
          </span>
        )}
      </div>
      {freeShipping && (
        <span className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded mt-1 inline-block">
          FREE shipping
        </span>
      )}
    </div>
  </Link>
);

const TodayDeals = () => {
  const products: Product[] = [
    {
      id: 1,
      title: "Diamond Ring",
      price: 98.47,
      rating: 5,
      reviews: 9,
      image: diamond_ring,
      seller: "EtsJewelsDesign",
      freeShipping: true,
    },
    {
      id: 2,
      title: "Pear Emerald Engagement Ring",
      price: 460.03,
      originalPrice: 511.15,
      rating: 4,
      reviews: 12,
      image: emerald_ring,
      seller: "PhoenixJewelers",
      freeShipping: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <FilterSection title="Special offers">
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm">FREE shipping</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm">On sale</span>
              </label>
            </div>
          </FilterSection>

          <FilterSection title="Price ($)">
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="price" className="form-radio" />
                <span className="ml-2 text-sm">Any price</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="price" className="form-radio" />
                <span className="ml-2 text-sm">Under USD 25</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="price" className="form-radio" />
                <span className="ml-2 text-sm">USD 25 to USD 50</span>
              </label>
            </div>
          </FilterSection>

          <FilterSection title="Shop location">
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="location" className="form-radio" />
                <span className="ml-2 text-sm">Anywhere</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="location" className="form-radio" />
                <span className="ml-2 text-sm">Sri Lanka</span>
              </label>
            </div>
          </FilterSection>
        </div>

        <div className="col-span-9">
          <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayDeals;
