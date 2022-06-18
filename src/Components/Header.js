import React from "react";
import ListItem from "./Shared/ListItem";
import { motion, useAnimation } from "framer-motion";
import { ReactSVG } from "react-svg";

const Header = ({ items }) => {
  return (
    <header>
      <nav className="relative container mx-auto p-6 rounded-xl bg-neutral-500 mt-3">
        <div className="flex items-center justify-between">
          <div className="pt-2"></div>
          <div className="hidden md:flex flex-row space-x-6 ">
            {items.map((item, idx) => {
              return <ListItem text={item} key={idx} />;
            })}
          </div>
          <a
            href="#"
            className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline  transition ease-in hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </nav>
      <div className="container flex flex-col mt-5 mx-auto px-5 md:flex-row space-x-5 items-center justify-center">
        <a
          href="#"
          class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div class="flex flex-col mt-3 mx-auto justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </a>
        <a
          href="#"
          class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div class="flex flex-col mt-3 mx-auto justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
