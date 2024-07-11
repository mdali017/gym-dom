import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllCategoryQuery } from "@/redux/api/api";
import { TProductData } from "@/types";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const productData: TProductData[] = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/4011762/pexels-photo-4011762.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Fitness Equipment Set",
    price: 122,
    para: "Complete set for home workouts, includes dumbbells, resistance bands, and more.",
    category: "Fitness Equipment",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Yoga Mat",
    price: 29.99,
    para: "Premium eco-friendly yoga mat for comfortable workouts.",
    category: "Yoga Accessories",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Jump Rope",
    price: 14.99,
    para: "Adjustable jump rope for cardio exercises and fitness training.",
    category: "Fitness Equipment",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/4164651/pexels-photo-4164651.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Water Bottle",
    price: 9.99,
    para: "Insulated stainless steel water bottle, keeps drinks cold for 24 hours.",
    category: "Accessories",
  },
];

const Products = () => {
  const [isOpenCategory, setIsOpenCategory] = useState(true);
  const { data } = useGetAllCategoryQuery(undefined);
  const categorySectionData = data?.data?.data;
  const location = useLocation();
  const categoryData = location?.state?.data || [];
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>(categoryData);

  useEffect(() => {
    if (categoryData.length > 0) {
      setSelectedCategories(categoryData);
    }
  }, [categoryData]);

  const toggleOpenCategory = () => {
    setIsOpenCategory(!isOpenCategory);
  };

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="flex">
      <div className="w-[20%] border border-gray-300">
        <div
          className="p-4 rounded-md cursor-pointer mb-4"
          onClick={toggleOpenCategory}
        >
          <summary className="font-semibold text-lg text-gray-700 flex justify-between items-center">
            Category
            <FaChevronDown className="text-gray-500" />
          </summary>

          <ul className="mt-2 pl-5 list-inside text-gray-600">
            {categorySectionData?.map((item: any, index: number) => (
              <li key={index}>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600 rounded"
                    checked={selectedCategories.includes(item?.category_name)}
                    onChange={() => handleCategoryChange(item?.category_name)}
                  />
                  <span className="ml-2">{item.category_name}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 rounded-md cursor-pointer">
          <summary className="font-semibold text-lg text-gray-700 flex justify-between items-center">
            Price
          </summary>

          <div className="mt-2 pl-5 text-gray-600">
            <div className="flex items-center justify-between gap-4">
              <div className="mb-2">
                <input
                  type="number"
                  className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="$"
                />
              </div>
              -
              <div>
                <input
                  type="number"
                  className="-mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="$"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="group w-full inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
          <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
            Clear Filter
          </span>
        </button>
      </div>
      <div className="w-[80%]">
        <div className="flex justify-between px-10 mt-9">
          <h2>All Products (200)</h2>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By Products" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ascending">Ascending</SelectItem>
                  <SelectItem value="descending">Descending</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {productData?.map((item, index) => (
              <div
                key={index}
                className="group w-[300px] relative block overflow-hidden border rounded-xl"
              >
                <div className="h-[250px]">
                  <img
                    src={item?.image}
                    alt=""
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                  />
                </div>
                <div className="relative border border-gray-100 bg-white px-6">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-xl font-medium text-gray-900">
                      {item?.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-gray-700">
                      ${item?.price}
                    </p>
                  </div>
                  <p className="text-gray-600 my-3">
                    {item?.para?.slice(0, 50)}
                  </p>

                  <div className="flex gap-6 py-5">
                    <button className="block rounded bg-yellow-400 px-4 py-2 text-sm font-medium transition hover:scale-105">
                      Add to Cart
                    </button>
                    <button className="block rounded bg-yellow-400 px-4 py-2 text-sm font-medium transition hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
