import { motion } from "framer-motion";

export default function Example() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }} // starts invisible, slightly above
      animate={{ opacity: 1, y: 0 }} // fades in, drops into place
      transition={{ duration: 5 }} // takes 0.5s
      className="p-4 bg-blue-400 rounded text-black w-32 text-center m-4"
    >
      Hello World
    </motion.div>
  );
}
