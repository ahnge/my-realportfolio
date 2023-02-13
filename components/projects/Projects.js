import SingleProject from "./SingleProject";
import spaceImg from "../../public/space-web.png";
import ecommerceProductPageImg from "../../public/ecommerce-product-page.png";
import eurommrImg from "../../public/eurommr-snip.png";
import devsearchImg from "../../public/devsearch.png";

const Projects = () => {
  return (
    <div className="w-full bg-primary-bg" id="portfolio">
      <div className="w-full max-w-7xl mx-auto px-10 lg:px-14 pt-9 pb-20">
        <h1 className="text-action-pur text-2xl md:text-3xl lg:text-[2rem] font-semibold">
          Fearured projects
        </h1>
        <p
          className={`text-white font-normal mt-3 text-sm sm:text-base lg:mt-5 transition duration-1000}`}
        >
          I have worked on many projects over the course of being a Web
          Developer, here are a few of my projects.
        </p>
        <div className="grid grid-cols-1 gap-5 md:px-5 mt-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          <div>
            <SingleProject
              imgsrc={devsearchImg}
              title="Devsearch"
              description="My very first full stack app that I followed from a course."
              liveLink="https://mydevsearch-a.herokuapp.com/"
              github="https://github.com/ahnge/devsearch"
            />
          </div>
          <div>
            <SingleProject
              imgsrc={eurommrImg}
              title="eurommr"
              description="This is my very first freelancing project using nextjs and strapi."
              liveLink="https://eurommr.com"
              github="https://github.com/ahnge/eurommr_next"
            />
          </div>
          <div>
            <SingleProject
              imgsrc={ecommerceProductPageImg}
              title="fem challenge"
              description="A challenge from frontendmentor site that I finished after learning redux."
              liveLink="https://ecommerce-product-page-virid.vercel.app/"
              github="https://github.com/ahnge/ecommerce-product-page"
            />
          </div>
          <div>
            <SingleProject
              imgsrc={spaceImg}
              title="fem challenge"
              description="A challenge from frontendmentor site that I finished after learning react."
              liveLink="https://space-tourism1.netlify.app/"
              github="https://github.com/ahnge/fem-space-tourism-website"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
