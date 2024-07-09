import Container from "./Container";

type TProps = {
    title: string;
}

const SectionTitle = ({title}: TProps) => {
  return (
    <Container>
      <div className="my-10">
        <h1 className="text-4xl font-bold mb-3 text-center uppercase">
          {title}
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
    </Container>
  );
};

export default SectionTitle;
