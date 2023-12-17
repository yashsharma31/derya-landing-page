import { motion } from "framer-motion";
import Image from "next/image";

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
      <div className="grid grid-cols-8 items-center w-full py-4">
        <motion.div className="text-md col-span-2">
          <Image src="/logo.png" alt="landing-page" width="80" height="40" />
        </motion.div>
        <div className="flex max-w-xl justify-between mx-auto w-full col-span-4">
          {["Home", "Features", "Pricing", "Testimonials", "About"].map(
            (item) => (
              <motion.p
                key={item}
                className="hover:underline-offset-4 hover:underline"
                whileHover="hover"
                variants={itemVariants}
              >
                {item}
              </motion.p>
            )
          )}
        </div>
        <div className="flex gap-8 items-center col-span-2 justify-end">
          <motion.p
            className="hover:underline-offset-4 hover:underline"
            whileHover="hover"
            variants={itemVariants}
          >
            Login
          </motion.p>
          <motion.div
            className="flex"
            whileHover="hover"
            variants={itemVariants}
          >
            <p className="rounded-full bg-[#6F1A07] text-white py-2 px-4 text-sm max-w-max">
              Get Started&nbsp;
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
