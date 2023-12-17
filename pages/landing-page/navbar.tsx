import { motion } from "framer-motion";

const NavBar = () => {
  // Hover animation for each nav item
  const itemVariants = {
    hover: { y: -5, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto border-b border-[#6F1A07]"
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-8 w-full py-8">
        <motion.div className="text-md col-span-2">Logo</motion.div>
        <div className="flex max-w-xl justify-between mx-auto w-full col-span-4">
          {["Home", "Prices", "Services", "About us"].map((item) => (
            <motion.p
              key={item}
              className="hover:underline-offset-4 hover:underline"
              whileHover="hover"
              variants={itemVariants}
            >
              {item}
            </motion.p>
          ))}
        </div>
        <div className="flex gap-8 col-span-2 justify-end">
          <motion.p
            className="hover:underline-offset-4 hover:underline"
            whileHover="hover"
            variants={itemVariants}
          >
            Login
          </motion.p>
          <motion.div
            className="flex hover:underline-offset-4 hover:underline"
            whileHover="hover"
            variants={itemVariants}
          >
            <p>Get Started&nbsp;</p>
            <p>{"->"}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
