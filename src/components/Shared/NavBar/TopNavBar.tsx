import Container from "@/components/common/Container";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const TopNavBar = () => {
  return (
    <div className="bg-primary bg-opacity-70 py-2">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 ">
            <h2>Phone: +880 1717480093</h2>
            <h2>Email: mohabbatalit8@gmail.com</h2>
          </div>
          <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-4 gap-4">
            <FaLinkedin className="text-" />
            <FaFacebook />
            <FaGithub />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNavBar;
