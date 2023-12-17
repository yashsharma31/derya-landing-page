import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  // Animation variants for the text and image sections
  const sectionVariants = {
    hidden: (direction: number) => ({ x: direction * 100, opacity: 0 }),
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  // Animation variants for the buttons
  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="pt-8 flex w-full items-center justify-between">
        <motion.div
          className="flex flex-col gap-8 max-w-[700px]"
          initial="hidden"
          animate="visible"
          custom={-1}
          variants={sectionVariants}
        >
          <p className="rounded-full capitalize py-2 px-4 max-w-max bg-[#A8763E] text-sm text-white">
            Empower Your Customers
          </p>
          <p className="text-7xl">
            Enhance <span className="font-semibold">Shopping Experience</span>{" "}
            with Customer Reviews
          </p>
          <p>
            Our review app for Shopify stores enables customers to share their
            experiences directly through email. Elevate your product credibility
            and boost sales with genuine feedback.
          </p>
          <motion.div
            className="flex items-center mt-16 gap-8"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <motion.button
              className="rounded-full bg-[#6F1A07] text-white py-4 px-12 max-w-max"
              whileHover="hover"
              variants={buttonVariants}
            >
              Get Started
            </motion.button>
            <motion.p whileHover="hover" variants={buttonVariants}>
              Learn more
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-end"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={sectionVariants}
        >
          <Image
            src="/landing-page3.png"
            alt="landing-page"
            width="550"
            height="800"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
