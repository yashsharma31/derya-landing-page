import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
      <div className="grid grid-cols-8 items-center w-full py-2">
        <motion.div className="text-md col-span-2">
          <Image src="/logo.png" alt="landing-page" width="60" height="40" />
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
        <div className="flex gap-8 items-center cursor-pointer col-span-2 justify-end">
          <motion.div
            className="flex"
            whileHover="hover"
            variants={itemVariants}
          >
            <Link
              target="_blank"
              href="https://quickstart-5c65eae2.myshopify.com/admin/oauth/redirect_from_cli?client_id=79fb447bd96780b4f87a53d92d62c80f"
              className="rounded-full bg-[#6F1A07] text-white py-2 px-4 text-sm max-w-max"
            >
              Get Started&nbsp;
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
