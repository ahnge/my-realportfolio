const Footer = () => {
  return (
    <div className="w-full bg-secondary-bg">
      <div className="w-full max-w-7xl mx-auto px-10 lg:px-14 py-9 flex flex-col sm:flex-row sm:justify-between">
        <p className="text-white text-xs">Copyright © 2022 Nayzaw.</p>
        <div className="flex flex-col text-white text-xs space-y-3 mt-3 sm:mt-0">
          <p>Frontend Developer</p>
          <p>I hate cats</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
