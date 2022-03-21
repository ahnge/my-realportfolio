export const Hamburger = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  );
};

export const User = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 ml-3"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 10C12.3012 10 14.1667 8.13452 14.1667 5.83333C14.1667 3.53214 12.3012 1.66666 10 1.66666C7.69882 1.66666 5.83334 3.53214 5.83334 5.83333C5.83334 8.13452 7.69882 10 10 10Z"
        fill="white"
      />
      <path
        d="M9.99999 12.0833C5.82499 12.0833 2.42499 14.8833 2.42499 18.3333C2.42499 18.5667 2.60832 18.75 2.84165 18.75H17.1583C17.3917 18.75 17.575 18.5667 17.575 18.3333C17.575 14.8833 14.175 12.0833 9.99999 12.0833Z"
        fill="white"
      />
    </svg>
  );
};

export const Eye = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 ml-3"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path
        fillRule="evenodd"
        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
