import heroImg from "../assets/brainstorming-concept-landing-page.png";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <main className="h-[90vh] md:h-screen bg-cream text-center flex flex-col justify-between items-center overflow-hidden">
      <section className="container">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl mt-32 font-bold"
          >
            World's Petition Platform
          </motion.h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 text-gray"
          >
            We started in 2016 with the radical idea that anyone, anywhere,
            should be able to easily and securely start their own petition.
            Today, we offer a trusted and easy-to-use platform for social
            movements across the world.
          </motion.p>
        </div>
      </section>

      {/* IMAGE */}
      
      <div className="bottom-0 left-0 w-[80%] md:w-auto  md:max-w-[60%] lg:max-w-[49%]">
        <motion.img
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          src={heroImg}
          alt="Brainstorming Concept"
          className="w-full h-auto object-cover mx-auto md:ml-auto md:mr-0"
        />
      </div>
    </main>
  );
};
