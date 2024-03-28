import Link from "next/link";
import React from "react";

const Careerhub = () => {
  return (
    <div className="min-h-screen">
      <div className="container py-32">
        <h1 className="text-xl lg:text-3xl font-medium mb-5">
          Careerhub project
        </h1>
        <div>
          <iframe
            className="w-full aspect-video max-w-xl"
            src="https://www.youtube.com/embed/TrrCWuIUeb8?si=_s85W2m1uUERhLzJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className="mt-5 lg:text-xl font-medium">Description</h3>
        <div className="flex flex-col gap-3">
          <p>
            Careerhub is a job portal web application developed using the
            Laravel framework as a final project for the CS50 course. The
            application allows employers to create job postings and job seekers
            to apply to those postings.{" "}
          </p>{" "}
          <p>
            Careerhub includes two types of accounts: employer and job_seeker.
            Employers can create job postings, which include the job title,
            description, and requirements. Job_seekers can apply to job postings
            by submitting their resume and a brief cover letter.{" "}
          </p>{" "}
          <p>
            Employers can view the list of job_seekers who have applied to their
            job postings and can communicate with them.
          </p>
          <p>
            The project leverages the power of the Laravel framework, which
            provides a rich set of features and tools for web application
            development. It includes robust validation rules, an authentication
            system, and a flextble database migration system.
          </p>
          <p>
            In conclusion, Careerhub is a sophisticated job portal web
            application that provides an intuitive and user-friendly interface
            for employers and job seekers. It leverages the power of Laravel to
            provide a scalable and robust platform for managing job postings and
            applications.
          </p>
        </div>
        <h3 className="mt-5 lg:text-xl font-medium">Tech stack</h3>
        <p>Php, Laravel, mysql, Javascript</p>
        <h3 className="mt-5 lg:text-xl font-medium">Source</h3>
        <Link
          className="hover:underline"
          href={"https://github.com/ahnge/careerhub"}
          target="_blank"
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default Careerhub;
