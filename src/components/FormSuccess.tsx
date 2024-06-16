import { motion } from "framer-motion";

const FormSuccess = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100, x: "100%" }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -100, x: "100%" }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 m-4 p-4 bg-green text-white rounded-lg shadow-lg z-20"
    >
      Form submitted Succesfully
    </motion.div>
  );
};

export default FormSuccess;
