import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  Shield,
  Code,
  Rocket,
  Users,
  LineChart,
  Lightbulb,
} from "lucide-react";

const Punyarrama = () => {
  return (
    <div className="min-h-screen">
      <div className="container pb-32">
        <h1 className="text-xl lg:text-3xl font-semibold mb-5">
          Yawgi Management Portal Project
        </h1>

        <h3 className="mt-5 lg:text-xl font-semibold">Overview</h3>
        <div className="flex flex-col gap-3">
          <p>
            I had the pleasure of working on a freelance project for the
            Punyarrama Monastery together with my team from January 2024 to
            March 2024. The goal was to develop a user-friendly web portal to
            streamline internal management processes.
          </p>
        </div>

        <h3 className="mt-5 lg:text-xl font-semibold">Features</h3>
        <ul className="list-disc list-inside">
          <li>🔒 Authentication & Authorization</li>
          <li>🛠️ Admin portal to manage users, rooms, events</li>
          <li>📈 And a lot more</li>
        </ul>

        <h3 className="mt-5 lg:text-xl font-semibold">
          Tech Stack <Code className="inline-block ml-2" />
        </h3>
        <p>PHP, Laravel, JavaScript, React, MySQL</p>

        <h3 className="mt-5 lg:text-xl font-semibold">
          Preview <Rocket className="inline-block ml-2" />
        </h3>
        <p>
          The system is for internal use only, so public users will only see a
          login form. However, you can visit the link below to get a sense of
          the interface:
        </p>
        <Link
          target="_blank"
          className="hover:underline text-blue-600"
          href={"https://punyarrama.com"}
        >
          punyarrama.com
        </Link>

        <h3 className="mt-5 lg:text-xl font-semibold">
          My Role <Shield className="inline-block ml-2" />
        </h3>
        <p>
          As the full-stack developer for this project, I played a crucial role
          in building the APIs along with user interfaces and ensuring a
          seamless user experience.
        </p>

        <h3 className="mt-5 lg:text-xl font-semibold">
          Outcomes and Impact <LineChart className="inline-block ml-2" />
        </h3>
        <ul className="list-disc list-inside">
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

        <h3 className="mt-5 lg:text-xl font-semibold">
          Key Takeaways <Lightbulb className="inline-block ml-2" />
        </h3>
        <div className="flex flex-col gap-3">
          <p>This project allowed me to:</p>
          <ul className="list-disc list-inside">
            <li>🤝 Collaborate effectively within a team environment</li>
            <li>
              💻 Apply my development skills to build a feature-rich and
              user-friendly website
            </li>
            <li>
              🌍 Gain experience working with a client from the non-profit
              sector
            </li>
          </ul>
        </div>

        <h3 className="mt-5 lg:text-xl font-semibold">
          Moving Forward <Users className="inline-block ml-2" />
        </h3>
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
