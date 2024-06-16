import one from "../assets/one.webp";
import two from "../assets/two.jpg";
import three from "../assets/three.avif";
import four from "../assets/four.jpg";
import { story } from "../data";
import { motion } from "framer-motion";

export const Story = () => {
  return (
    <section className=" h-fit py-10 container mx-auto my-20">
      <div className="flex  flex-col lg:flex-row ">
        <div className="flex-1">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-semibold mb-10"
          >
            Our story
          </motion.h1>

          {/* Story desc */}
          
          {story.map((item) => (
            <motion.div
              key={item.desc1}
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="text-gray flex flex-col gap-4 lg:pr-20 font-normal"
            >
              <p>{item.desc1}</p>
              <p>{item.desc2}</p>
              <p>{item.desc3}</p>
              <p>{item.desc4}</p>
              <p>{item.desc5}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="flex-1 flex flex-col md:flex-row gap-4 mt-10 lg:mt-0 justify-center items-center"
        >
          <div className="flex flex-col gap-4">
            <img src={one} alt="image" className="h-52 w-34 rounded-lg" />
            <img src={two} alt="image" className="h-52 w-34 rounded-lg" />
          </div>
          <div className="flex flex-col gap-4 md:mt-20">
            <img src={three} alt="image" className="h-52 w-34 rounded-lg" />
            <img src={four} alt="image" className="h-52 w-34 rounded-lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
