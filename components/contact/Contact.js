import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Contact = () => {
  return (
    <div className="w-full bg-primary-bg" id="contact">
      <div className="w-full max-w-7xl mx-auto px-10 lg:px-14 pt-9 pb-20">
        <h1 className=" text-action-pur text-2xl md:text-3xl lg:text-[2rem] font-semibold">
          Contact:
        </h1>
        <div className="flex flex-col md:flex-row sm:px-5 md:px-10">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </div>
  );
};

export default Contact;
