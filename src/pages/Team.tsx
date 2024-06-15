import { TeamCard } from "../components/TeamCard";
import { team } from "../data";
import AnimatedNumber from "../components/AnimateNumber";
import { motion } from "framer-motion";

export const Team = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className=" text-white bg-purple">
        <div className="flex flex-col gap-8 lg:flex-row justify-between container mx-auto py-10">
          <div className="flex flex-col text-center">
            <AnimatedNumber target={20000} />
            <p className="text-sm font-light">Campaings</p>
          </div>
          <div className="flex flex-col text-center">
            <AnimatedNumber target={50000} />
            <p className="text-sm font-light">Siignatures</p>
          </div>
          <div className="flex flex-col text-center">
            <AnimatedNumber target={10000} />
            <p className="text-sm font-light">Donations</p>
          </div>
        </div>
        <div className="bg-white py-16">
          <div className="py-10  container mx-auto flex flex-col md:flex-col lg:flex-row gap-5">
            <div className="flex flex-col gap-20">
              <div className=" flex flex-col gap-5 text-center lg:text-left">
                <motion.h1
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl text-black font-semibold"
                >
                  Our team
                </motion.h1>
                <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-gray"
                >
                  We need talented, passionate people to changing the world.
                </motion.p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <motion.button
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay:0.7 }}
                  className="font-normal text-sm bg-purple rounded-lg px-8 py-2 flex justify-center content-center"
                >
                  See all members
                </motion.button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-16 md:gap-4 justify-end items-center mt-10 flex-1">
              {team.map((item) => (
                <TeamCard
                  key={item.name}
                  img={item.img}
                  empname={item.name}
                  emppost={item.post}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
