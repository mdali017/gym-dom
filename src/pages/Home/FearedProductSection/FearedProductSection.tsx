import Container from "@/components/common/Container";

type TProductData = {
  id: number;
  image: string;
  title: string;
  price: number;
  para: string;
  category: string;
};

const FearedProductSection = () => {
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
  return (
    <Container>
      <div className="my-10">
        <h1 className="text-4xl font-bold mb-3 text-center uppercase">
          Featured Products
        </h1>
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-2 rounded border border-indigo-600 px-3 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
            href="#"
          >
            <span className="text-sm font-medium"> Explore More... </span>

            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {productData?.map((item, index) => (
          <div
            key={index}
            className="group w-[300px] relative block overflow-hidden border rounded-xl"
          >
            <div className="h-[250px]">
              <img
                src={item?.image}
                alt=""
                className=" w-full h-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
            </div>
            <div className="relative border border-gray-100 bg-white px-6 ">
              <div className="flex justify-between mb-4">
                <h3 className=" text-xl font-medium text-gray-900">
                  {item?.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-700">${item?.price}</p>
              </div>
              <p className="text-gray-600 my-3">{item?.para?.slice(0, 50)}</p>

              <div className="flex gap-6 py-5">
                <button className="block  rounded bg-yellow-400 px-4 py-2 text-sm font-medium transition hover:scale-105">
                  Add to Cart
                </button>
                <button className="block  rounded bg-yellow-400 px-4 py-2 text-sm font-medium transition hover:scale-105">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FearedProductSection;
