import Link from "next/link";
import React from "react";

const Thread = () => {
  return (
    <div className="min-h-screen">
      <div className="container py-32">
        <h1 className="text-xl lg:text-3xl font-medium mb-5">
          Thread clone project
        </h1>
        <div>
          <iframe
            className="w-full aspect-video max-w-xl"
            src="https://www.youtube.com/embed/Q8CkmbLg2Rw?si=iAlMtqc9PHSGupld"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className="mt-5 lg:text-xl font-medium">Description</h3>
        <div className="flex flex-col gap-3">
          <p>
            Thread Clone is a social media thread clone project built using
            Django and HTMX, allowing users to create and participate in
            threaded discussions.
          </p>{" "}
        </div>
        <h3 className="mt-5 lg:text-xl font-medium">Tech stack</h3>
        <p>Python, Django, Javascript, htmx, sql database</p>
        <h3 className="mt-5 lg:text-xl font-medium">Features</h3>
        <ul>
          <li>- Create and participate in threaded discussions.</li>
          <li>- Reply to existing threads and comments.</li>
          <li>- Like and repost threads and comments</li>
          <li>- Follow users</li>
          <li>- Authentication / Authorization</li>
          <li>- Manage their user profiles.</li>
        </ul>
        <h3 className="mt-5 lg:text-xl font-medium">Source</h3>
        <Link
          className="hover:underline"
          href={"https://github.com/ahnge/thread-clone"}
          target="_blank"
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default Thread;
