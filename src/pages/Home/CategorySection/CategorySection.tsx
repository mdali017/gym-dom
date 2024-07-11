import Container from "@/components/common/Container";
import { useGetAllCategoryQuery } from "@/redux/api/api";
import { Link } from "react-router-dom";

const CategorySection = () => {
  // const { data, isLoading, isError } = useGetAllTodoQuery(undefined);

  const { data, isLoading, isError } = useGetAllCategoryQuery(undefined);
  const categorySectionData = data?.data?.data;
  // console.log(categorySectionData);
  // const categorySectionData = [
  //   {
  //     id: 1,
  //     title: "Dumbbells",
  //     image:
  //       "https://images.pexels.com/photos/5327487/pexels-photo-5327487.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     id: 2,
  //     title: "Exercise Bikes",
  //     image:
  //       "https://images.pexels.com/photos/9524658/pexels-photo-9524658.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     id: 3,
  //     title: "Weight Plates",
  //     image:
  //       "https://images.pexels.com/photos/14623668/pexels-photo-14623668.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     id: 4,
  //     title: "Conditioning",
  //     image:
  //       "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  // ];
  return (
    <div>
      <Container>
        <h1 className="text-4xl font-bold my-7">Shop By Category</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 cursor-pointer">
          {categorySectionData?.map((item: any, index: number) => (
            <Link to={"/products"} state={{ data: item?.category_name }}>
              <div key={index} className="card relative">
                <div className="w-[300px] h-[290px] relative group">
                  <img
                    className="w-full h-full object-cover"
                    src={item?.image}
                    alt="Dumbbells"
                  />
                  <div className="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 py-2 shadow-md">
                    <p className="text-2xl font-bold transition-transform duration-300 transform group-hover:scale-110">
                      {item?.category_name}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategorySection;
