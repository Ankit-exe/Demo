import bg2 from "../assets/bg-2.png";
import { motion } from "framer-motion";

export const Vision = () => {
  return (
    <main className="h-fit bg-cream text-center flex flex-col justify-between items-center overflow-hidden">
      <section className="container">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl mt-24 font-bold"
          >
            Our Vision
          </motion.h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-5 text-gray"
          >
            Our vision is to be the best petition platform in the world.
          </motion.p>
        </div>
      </section>
      <div className="bottom-0 left-0 w-[80%] md:w-auto  md:max-w-[60%] lg:max-w-[40%]">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          src={bg2}
          alt="Brainstorming Concept"
          className="w-full h-auto object-cover mx-auto md:ml-auto md:mr-0"
        />
      </div>
    </main>
  );
};
