import { AboutCard } from "../components/AboutCard";
import { about } from "../data";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="flex justify-center">
      <section className=" mt-20 container mx-auto">
        <div className="flex flex-col lg:flex-row w-full">
          <div className=" lg:w-[40%] flex flex-col">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray mb-5"
            >
              Who uses the platform?
            </motion.span>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5,delay:0.5 }}
              className="text-3xl font-bold tracking-normal lg:pr-10"
            >
              We believe that when everyone speaks out about the problems of
              society and acts together, the world will become a better place.
            </motion.span>
          </div>
          <div className="flex w-[100%] justify-center lg:justify-end lg:w-[60%] mt-10 lg:mt-0 ">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 , delay:1}}
              className="grid md:grid-cols-2 gap-4"
            >
              {about.map((item) => (
                <AboutCard
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
