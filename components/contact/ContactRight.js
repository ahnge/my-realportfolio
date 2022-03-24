const ContactRight = () => {
  return (
    <div className="mt-6 md:flex-1">
      <p className="text-white text-base font-semiboldk sm:text-lg">
        Wanna make magic together?
      </p>
      <form action="" className="mt-3 space-y-4 max-w-lg">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name:"
          className=" bg-tertairy-bg px-3 py-2 rounded-md text-sm focus:outline-none focus:ring focus:ring-action-pur w-full"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email:"
          className=" bg-tertairy-bg px-3 py-2 rounded-md text-sm focus:outline-none focus:ring focus:ring-action-pur w-full"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="4"
          className="bg-tertairy-bg px-3 py-2 rounded-md text-sm focus:outline-none focus:ring focus:ring-action-pur w-full"
          placeholder="Message:"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-action-pur text-white rounded-md border-2 border-action-pur hover:bg-transparent transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactRight;
