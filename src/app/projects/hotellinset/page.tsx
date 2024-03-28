import Link from "next/link";

const HotelLinset = () => {
  return (
    <div className="min-h-screen">
      <div className="container py-32">
        <h1 className="text-xl lg:text-3xl font-medium mb-5">
          Hotel Linset project
        </h1>
        <h3 className="mt-5 lg:text-xl font-medium">Description</h3>
        <div className="flex flex-col gap-3">
          <p>
            A freelance project for a hotel. A landing page highlighting their
            services and facilities.
          </p>{" "}
        </div>
        <h3 className="mt-5 lg:text-xl font-medium">Tech stack</h3>
        <p>Wordpress</p>
        <h3 className="mt-5 lg:text-xl font-medium">Preview</h3>
        <Link
          href={"https://hotellinsetpyinoolwin.com/"}
          className="hover:underline"
          target="_blank"
        >
          hotellinsetpyinoolwin.com
        </Link>
      </div>
    </div>
  );
};

export default HotelLinset;
