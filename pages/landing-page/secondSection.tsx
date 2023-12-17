import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const SecondSection = () => {
  const controlsText = useAnimation();
  const controlsButton = useAnimation();
  const controlsCardLeft = useAnimation();
  const controlsCardRight = useAnimation();
  const refText = useRef(null);
  const refButton = useRef(null);
  const refCardLeft = useRef(null);
  const refCardRight = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target) {
            case refText.current:
              controlsText.start("visible");
              break;
            case refButton.current:
              controlsButton.start("visible");
              break;
            case refCardLeft.current:
              controlsCardLeft.start("visible");
              break;
            case refCardRight.current:
              controlsCardRight.start("visible");
              break;
          }
        }
      });
    }, observerOptions);

    [refText, refButton, refCardLeft, refCardRight].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [refText, refButton, refCardLeft, refCardRight].forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [controlsButton, controlsCardLeft, controlsCardRight, controlsText]);

  // Animation variants
  const fadeInUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const slideInLeftVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const slideInRightVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-[#2B2118] flex items-center">
      <div className="max-w-7xl mx-auto py-24">
        <div className="flex items-center">
          <div className="text-[#ECF0F1] flex flex-col gap-8 max-w-xl">
            <motion.p
              className="rounded-full capitalize py-2 px-4 max-w-max bg-[#A8763E] text-sm text-white"
              ref={refText}
              initial="hidden"
              animate={controlsText}
              variants={fadeInUpVariants}
            >
              Empower Your Reviews
            </motion.p>
            <motion.p
              className="text-6xl text-[#F7F3E3]"
              ref={refText}
              initial="hidden"
              animate={controlsText}
              variants={fadeInUpVariants}
            >
              Transform Customer Feedback into Growth
            </motion.p>
            <motion.p
              className="max-w-md"
              ref={refText}
              initial="hidden"
              animate={controlsText}
              variants={fadeInUpVariants}
            >
              Our Shopify review app helps you leverage customer insights to
              enhance product credibility and drive sales. Engage customers with
              personalized review requests via email and showcase authentic
              feedback on your store.
            </motion.p>
            <motion.button
              className="font-semibold mt-16 rounded-full bg-[#6F1A07] text-white py-4 px-12 max-w-max"
              ref={refButton}
              initial="hidden"
              animate={controlsButton}
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.05 }}
            >
              Learn More
            </motion.button>
          </div>
          <div className="mx-auto ml-60 py-8 space-y-8 flex flex-col items-center">
            <motion.div
              className="w-72 h-52 p-4 ml-40 relative justify-between flex flex-col rounded-2xl bg-custom-gradient"
              ref={refCardLeft}
              initial="hidden"
              animate={controlsCardLeft}
              variants={slideInLeftVariants}
            >
              <div className="">
                <p className="font-semibold">Total Sales</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl">258</p>
                <div className="h-0.5 bg-black" />
                <p className="text-sm">Price since 30 days</p>
              </div>
              <div className="absolute top-8 right-8 opacity-20">
                <Image
                  src="/up-arrow.png"
                  alt="landing-page"
                  width="180"
                  height="180"
                />
              </div>
            </motion.div>
            <motion.div
              className="w-72 h-52 p-4 relative mr-40 justify-between flex flex-col rounded-2xl bg-custom-gradient"
              ref={refCardRight}
              initial="hidden"
              animate={controlsCardRight}
              variants={slideInRightVariants}
            >
              <div className="">
                <p className="font-semibold">Todays Offer</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl">$150</p>
                <div className="h-0.5 bg-black" />
                <p className="text-sm">Price since 24 days</p>
              </div>
              <div className="absolute top-8 right-8 opacity-20">
                <Image
                  src="/up-arrow.png"
                  alt="landing-page"
                  width="180"
                  height="180"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
