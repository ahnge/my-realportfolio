import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full min-h-[85vh] pb-10 dark:bg-primary-bg bg-white sm:pb-0">
      <main className="mx-auto text-black p-7 lg:p-10 dark:text-white max-w-7xl lg:pt-14">
        <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">About</h1>
        <p className="mt-4">
          Hi, I&#39;m Nay Zaw Min Naing, a self-taught web developer with a
          passion for creating beautiful and functional websites. While I
          don&#39;t have any formal work experience, I&#39;ve spent countless
          hours learning and practicing the craft of web development. I&#39;m
          driven by a desire to create engaging online experiences that are both
          visually appealing and user-friendly.
        </p>
        <p className="mt-4">
          I&#39;ve developed a solid foundation in HTML, CSS, and JavaScript, as
          well as experience with React, NextJs, Tailwind, Python, SQL, Flask,
          PHP and Laravel. I&#39;m always eager to learn more and stay
          up-to-date with the latest trends and best practices in web
          development.
        </p>
        <p className="mt-4">
          My personal approach to web development involves understanding the
          unique needs and goals of each client, and creating customized
          solutions that are tailored to their specific requirements. I believe
          in clear communication, attention to detail, and a dedication to
          delivering high-quality work.
        </p>
        <p className="mt-4">
          Thank you for taking the time to visit my portfolio website. I'm
          excited to hear about your next project and how I can help bring it to
          life.
        </p>
        <br />
        <h1 className="text-2xl font-bold sm:text-3xl mt-4 lg:text-4xl">
          Certificates
        </h1>
        <p className="mt-3">
          <Link
            href="https://certificates.cs50.io/d8878a4d-eba1-4c6b-9d30-d02aae197450.pdf?size=letter"
            target="_blank"
          >
            CS50x
          </Link>
        </p>
      </main>
    </div>
  );
};

export default About;
