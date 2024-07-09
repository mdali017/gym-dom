import  { ReactNode } from "react";

type TProps = {
    children: ReactNode
}

const Container = ({children}: TProps) => {
  return (
    <div className="container px-6  mx-auto">
      <h1>{children}</h1>
    </div>
  );
};

export default Container;
