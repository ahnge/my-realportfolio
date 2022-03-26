import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ContactRight = () => {
  // States
  const [msgSend, setMsgSend] = useState(false);

  // useInview hook
  const { ref: magicRef, inView: maginInview } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  // functions
  const handleSunmit = async (e) => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((item) => {
      if (!item.name) return;
      formData[item.name] = item.value;
      item.value = "";
    });
    setMsgSend(true);
    setTimeout(() => {
      setMsgSend(false);
    }, 3000);
  };

  return (
    <div className="mt-6 md:flex-1">
      <p
        ref={magicRef}
        className={`text-white text-base font-semiboldk sm:text-lg transition duration-1000 ${
          maginInview ? "opacity-100 translate-x-0" : "-translate-x-5 opacity-0"
        }`}
      >
        Wanna make magic together?
      </p>
      <form
        method="post"
        onSubmit={handleSunmit}
        className="mt-3 space-y-4 max-w-lg"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name:"
          className=" bg-tertairy-bg px-3 py-2 rounded-md text-sm text-white focus:outline-none focus:ring focus:ring-action-pur w-full"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email:"
          required
          className=" bg-tertairy-bg px-3 py-2 rounded-md text-white text-sm focus:outline-none focus:ring focus:ring-action-pur w-full"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="4"
          required
          className="bg-tertairy-bg px-3 py-2 rounded-md text-sm text-white focus:outline-none focus:ring focus:ring-action-pur w-full"
          placeholder="Message:"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-action-pur text-white rounded-md border-2 border-action-pur hover:bg-transparent transition"
        >
          Send
        </button>
        <div
          className={`text-white text-xs md:text-sm ${
            msgSend ? "opacity-100" : "opacity-0"
          }`}
        >
          Reach me via messenger. This feature doesn&apos;t work yet.
        </div>
      </form>
    </div>
  );
};

export default ContactRight;
