import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

const ThirdSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current; // Create a local variable to hold the current ref value
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideInVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div
      ref={ref}
      className="max-w-7xl mx-auto flex pt-20 items-center justify-between"
    >
      <motion.div
        className="flex flex-col max-w-2xl gap-8"
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        <p className="rounded-full capitalize py-2 px-6 max-w-max bg-[#A8763E] text-sm text-white">
          Customer Insights
        </p>
        <p className="text-6xl text-[#2B2118]">
          Elevate Your Store with Authentic Reviews
        </p>
        <p className="max-w-lg">
          Harness the power of customer feedback to boost your Shopify
          store&apos;s credibility and sales. Our app makes it easy for
          customers to share their experiences and for you to showcase genuine
          reviews.
        </p>
        <button className="rounded-full mt-16 bg-[#6F1A07] text-white py-4 px-12 max-w-max">
          Discover How
        </button>
      </motion.div>
      <motion.div
        className=""
        initial="hidden"
        animate={controls}
        variants={slideInVariants}
      >
        {/* Update or replace the image to match the new theme */}
        <Image
          src="/lp-3.jpg"
          className="rounded-3xl shadow-xl"
          alt="landing-page"
          width="500"
          height="500"
        />
      </motion.div>
    </div>
  );
};

export default ThirdSection;
