import CallToAction from "../components/CallToAction";
import images from "../images";
const About = () => {
  return (
    <div className="">
      <div>
        <h3 className="my-7 text-center font-semibold text-3xl text-gray-500">
          About
        </h3>
        <section className="text-white text-sm flex flex-col mx-auto text-center max-w-2xl">
          <img
            className="my-20 mx-auto w-[50%] h-[50%]"
            src={images.aboutImg}
            alt="about me image"
          />
          <section>
            <p>
              Hi! I&apos;m a software developer based in the United States. I
              have a passion for creating and building Web applications that can
              provide value to anyone. I&apos;m always looking to learn new
              things and expand my skill set. I&apos;m excited to share my
              knowledge and experiences with you!
            </p>
          </section>
        </section>
        <section></section>
        <section>
          <CallToAction />
        </section>
      </div>
    </div>
  );
};

export default About;
