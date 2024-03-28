import Link from "next/link";
import Image from "next/image";
import React from "react";

import yawgiMockup from "../../../../public/yawgi_project_cover.png";

const Punyarrama = () => {
  return (
    <div className="min-h-screen">
      <div className="container py-32">
        <h1 className="text-xl lg:text-3xl font-semibold mb-5">
          Yawgi Management Portal Project
        </h1>
        <div className="grid grid-cols-1 mx-auto w-full gap-5">
          <Image
            className="w-full mx-auto max-w-4xl h-fit"
            src={yawgiMockup}
            alt="Mockup picture for the project"
            placeholder="blur"
          />
        </div>

        <h3 className="mt-5 lg:text-xl font-semibold">Overview</h3>
        <div className="flex flex-col gap-3">
          <p>
            I recently had the pleasure of working on a freelance project for
            the Punyarrama Monastery together with my team. The goal was to
            develop a user-friendly web portal to streamline internal management
            processes.
          </p>{" "}
        </div>

        <h3 className="mt-5 lg:text-xl font-semibold">Features</h3>
        <ul>
          <li>- Authentication & Authorization.</li>
          <li>- Admin portal to manage users, rooms, events.</li>
          <li>- And a lot more.</li>
        </ul>

        <h3 className="mt-5 lg:text-xl font-semibold">Tech stack</h3>
        <p>Php, Laravel, Javascript, React, Mysql</p>

        <h3 className="mt-5 lg:text-xl font-semibold">Preview</h3>
        <Link
          target="_blank"
          className="hover:underline"
          href={"https://punyarrama.com"}
        >
          punyarrama.com
        </Link>

        <h3 className="mt-5 lg:text-xl font-semibold">My role</h3>
        <p>
          As the fullstack developer for this project, I played a crucial role
          in building the APIs along with user interfaces and ensuring a
          seamless user experience.
        </p>

        <h3 className="mt-5 lg:text-xl font-semibold">Outcomes and Impact</h3>
        <ul>
          <li>
            <span className="font-semibold">Enhanced User Experience:</span> The
            website provides a user-friendly sign-up form for "yawgis" to
            register for the upcoming event.
          </li>
          <li>
            <span className="font-semibold">
              Improved Management Efficiency:
            </span>{" "}
            The admin portal streamlines user, room, and event management
            processes for the monastery staff.
          </li>
          <li>
            <span className="font-semibold">Scalable Foundation:</span> The
            website is built with a future-proof architecture to accommodate
            potential growth and feature additions.
          </li>
        </ul>

        <h3 className="mt-5 lg:text-xl font-semibold">Key Takeaways</h3>
        <div className="flex flex-col gap-3">
          <p>This project allowed me to:</p>
          <ul>
            <li>- Collaborate effectively within a team environment.</li>
            <li>
              - Apply my development skills to build a feature-rich and
              user-friendly website.
            </li>
            <li>
              - Gain experience working with a client from the non-profit
              sector.
            </li>
          </ul>
        </div>

        <h3 className="mt-5 lg:text-xl font-semibold">Moving Forward</h3>
        <p>
          I'm confident that the Punyarrama Monastery website will serve as a
          valuable tool for their internal operations. I'm also eager to
          leverage the experience gained on this project for future development
          endeavors.
        </p>
      </div>
    </div>
  );
};

export default Punyarrama;
