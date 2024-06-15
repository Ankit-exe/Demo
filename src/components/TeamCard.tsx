import { motion } from "framer-motion";

type Props = {
  img: any;
  empname: string;
  emppost: string;
};

export const TeamCard = ({ img, empname, emppost }: Props) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative w-48 flex justify-center"
    >
      <img src={img} alt="" className="h-60 w-56 rounded-lg" />
      <div className="absolute w-44 h-auto bg-white rounded px-3 py-2 text-center text-black -bottom-5 mt-10 shadow-xl">
        <span className="text-sm font font-semibold">{empname}</span>
        <p className="text-xs text-gray">{emppost}</p>
      </div>
    </motion.div>
  );
};
