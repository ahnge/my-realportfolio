import Link from "next/link";
import Image from "next/image";
import React from "react";

import loginScreen from "../../../../public/login_screen.png";
import dashboardScreen from "../../../../public/dashboard_screen.png";

const Punyarrama = () => {
  return (
    <div className="min-h-screen">
      <div className="container py-32">
        <h1 className="text-xl lg:text-3xl font-medium mb-5">
          Yawgi Management Portal project
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full gap-5">
          <Image
            className="w-full mx-auto max-w-sm h-fit"
            src={loginScreen}
            alt="Picture of the author"
            placeholder="blur"
          />
          <Image
            className="w-full mx-auto max-w-sm h-fit"
            src={dashboardScreen}
            alt="Picture of the author"
            placeholder="blur"
          />
        </div>
        <h3 className="mt-5 lg:text-xl font-medium">Description</h3>
        <div className="flex flex-col gap-3">
          <p>
            This project is an in house project for the Punyarrama Monastery
            that I built together with our team.
          </p>{" "}
        </div>
        <h3 className="mt-5 lg:text-xl font-medium">Tech stack</h3>
        <p>Php, Laravel, Javascript, React, Mysql</p>
        <h3 className="mt-5 lg:text-xl font-medium">Features</h3>
        <ul>
          <li>- Authentication & Authorization.</li>
          <li>- Admin portal to manage users, rooms, events.</li>
          <li>- And a lot more.</li>
        </ul>
        <h3 className="mt-5 lg:text-xl font-medium">Preview</h3>
        <Link
          target="_blank"
          className="hover:underline"
          href={"https://punyarrama.com"}
        >
          punyarrama.com
        </Link>
      </div>
    </div>
  );
};

export default Punyarrama;
