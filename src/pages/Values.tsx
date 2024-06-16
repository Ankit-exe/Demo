import "../index.css";
import { motion } from "framer-motion";

export const Values = () => {
  return (
    <div className="h-[120vh] md:h-[100vh] bg-cream mt-10 relative">
      <div className="container mx-auto">

        {/* SVG */}
        
        <div className="custom-shape-divider-top-1718360429 transform scale-x-[-1] overflow-hidden ">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="bottom-0 absolute py-5 md:py-40">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-semibold text-purple"
          >
            Our values
          </motion.span>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-10">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="pr-20"
            >
              <h1 className="text-purple text-5xl font-semibold mt">01</h1>
              <div className="mt-16">
                <span className="text-lg font-bold text-purple">
                  Make more value,not money
                </span>
                <p className="text-purple text-base mt-3">
                  We focus on creative and delivering value to people across the
                  world.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="pr-20"
            >
              <h1 className="text-purple text-5xl font-semibold mt">02</h1>
              <div className="mt-16">
                <span className="text-lg font-bold text-purple">
                  Make it simple, not stressful
                </span>
                <p className="text-purple text-base mt-3">
                  We make everytinh simple, clearly and accessible
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="pr-20"
            >
              <h1 className="text-purple text-5xl font-semibold mt">03</h1>
              <div className="mt-16">
                <span className="text-lg font-bold text-purple">
                  Be human, not devil
                </span>
                <p className="text-purple text-base mt-3">
                  We do the right things with love and sincerity to create
                  sustainability
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
