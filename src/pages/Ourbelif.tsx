import bg from "../assets/bgimage.jpg";
import { motion } from "framer-motion";

export const Ourbelif = () => {
  return (
    <div className=" container mx-auto mt-20 flex flex-col justify-center">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold"
      >
        We believe in your voice
      </motion.h1>
      <div className="flex justify-center mt-10 flex-col ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray">
          <div>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5,delay:0.5 }}
            >
              We are here with a simple and clear mission is building a powerful
              platform for the change, helping people around the world to raise
              their voices, collecting signatures and contribute to the world.
            </motion.p>
          </div>
          <div>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9,delay:1 }}
            >
              At Conikal, We believe that the power to chnage the world is in
              all human beings, we also believe that when everyone speaks out
              the problem of society and action together, the world will become
              a better place.
            </motion.p>
          </div>
        </div>
        <div>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay:1.5 }}
            src={bg}
            alt="hola"
            className="mt-16 h-auto w-full rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};
