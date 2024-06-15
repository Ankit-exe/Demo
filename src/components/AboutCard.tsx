import { motion } from "framer-motion";

type Props = {
  img: any;
  title: string;
  desc: string;
};

export const AboutCard = ({ img, title, desc }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 0.9 }}
      className="bg-purple w-72 h-60 rounded-lg flex flex-col items-center gap-3 px-5 justify-center"
    >
      <img src={img} className="h-16 w-16 rounded-full bg-white" />
      <span className="font-semibold text-base text-white">{title}</span>
      <p className="font-light text-xs text-white text-center">{desc}</p>
    </motion.div>
  );
};
