import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 text-center lg:text-left">
        <div className="container p-6 text-gray-800 mx-auto">
          <div className="grid lg:grid-cols-2 gap-4 items-center justify-center ">
            <div className="mb-6 md:mb-0">
              <h5 className="font-medium mb-2 uppercase">Project Work</h5>

              <p className="mb-4">
                Have made use of functional components and re-usable compoenents
                whereever I could find the need for the same.
              </p>
            </div>

            <div className="mb-6 md:mb-0">
              <h5 className="font-medium mb-2 uppercase">Tech Stack</h5>

              <p className="mb-4">Developed Using React.js and Tailwind CSS</p>
            </div>
          </div>
        </div>

        <div
          className="text-center text-gray-700 p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Copyright:
          <a className="text-gray-800" href="https://tailwind-elements.com/">
            Tailwind Elements
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
