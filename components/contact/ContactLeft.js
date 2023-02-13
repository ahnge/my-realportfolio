import { FacebookLogo, GithubLogo, LinkedInLogo } from "../logos/logo";

const ContactLeft = () => {
  return (
    <div className="mt-5 md:flex-1 md:pt-9">
      <p className="text-white text-sm sm:text-base">You can find me here.</p>
      <div className="flex space-x-3 mt-3">
        <a
          href="https://github.com/ahnge"
          className={`w-10 block text-action-pur hover:text-white transition duration-1000 `}
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo />
        </a>
        <a
          href="https://www.linkedin.com/in/nayzaw-minnaing/"
          target="_blank"
          className={`w-10 text-action-pur block hover:text-white transition duration-1000 `}
          rel="noreferrer"
        >
          <LinkedInLogo />
        </a>
        <a
          href="https://www.facebook.com/nayzawminnaing1/"
          target="_blank"
          rel="noreferrer"
          className={`w-10 text-action-pur block hover:text-white transition duration-1000 `}
        >
          <FacebookLogo />
        </a>
      </div>
    </div>
  );
};

export default ContactLeft;
