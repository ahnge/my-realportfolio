import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FacebookLogo, GithubLogo, LinkedInLogo } from "../logos/logo";

const ContactLeft = () => {
  // states
  const [linkIsInview, setLinkIsInview] = useState(false);
  const [faceIsInview, setFaceIsInview] = useState(false);

  // useInview hook
  const { ref: gitRef, inView: gitInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const { ref: linkRef, inView: linkInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const { ref: faceRef, inView: faceInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  useEffect(() => {
    let timeout;
    let secTimeout;
    if (linkInView) {
      timeout = setTimeout(() => {
        setLinkIsInview(true);
      }, 500);
    }
    if (faceInView) {
      secTimeout = setTimeout(() => {
        setFaceIsInview(true);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
      clearTimeout(secTimeout);
    };
  }, [linkInView, faceInView]);

  return (
    <div className="mt-5 md:flex-1 md:pt-9">
      <p className="text-white text-sm sm:text-base">You can find me here.</p>
      <div className="flex space-x-3 mt-3">
        <a
          ref={gitRef}
          href="https://github.com/ahnge"
          className={`w-10 block text-action-pur hover:text-white transition duration-1000 ${
            gitInView ? "opacity-100 translate-y-0" : "translate-y-5 opacity-0"
          }`}
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo />
        </a>
        <a
          ref={linkRef}
          href="https://www.linkedin.com/in/nayzaw-minnaing/"
          target="_blank"
          className={`w-10 text-action-pur block hover:text-white transition duration-1000 ${
            linkIsInview
              ? "opacity-100 translate-y-0"
              : "translate-y-5 opacity-0"
          }`}
          rel="noreferrer"
        >
          <LinkedInLogo />
        </a>
        <a
          ref={faceRef}
          href="https://www.facebook.com/nayzawminnaing1/"
          target="_blank"
          rel="noreferrer"
          className={`w-10 text-action-pur block hover:text-white transition duration-1000 ${
            faceIsInview
              ? "opacity-100 translate-y-0"
              : "translate-y-5 opacity-0"
          }`}
        >
          <FacebookLogo />
        </a>
      </div>
    </div>
  );
};

export default ContactLeft;
