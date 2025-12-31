"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  url: string;
  title: string;
  id: number;
}

const Example = () => {
  return (
    <div className="bg-gray-100 dark:bg-black transition-colors duration-300">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-gray-100 dark:bg-black transition-colors duration-300">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardProps }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-gray-300 dark:bg-neutral-800 transition-colors duration-300"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-[#08b48d]/20 to-[#08b48d]/0 p-8 text-6xl font-black uppercase text-black dark:text-white backdrop-blur-lg transition-colors duration-300">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Web Development",
    id: 1,
  },
  {
    url: "https://m.media-amazon.com/images/I/51AVClrcBhL._UF1000,1000_QL80_.jpg",
    title: "UI/UX Design",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Branding",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Digital Advertising",
    id: 4,
  },
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "SEO",
    id: 5,
  },
  {
    url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "SMM",
    id: 6,
  },
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Content Marketing",
    id: 7,
  },
  {
    url: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Video Production",
    id: 8,
  },
  {
    url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Photography",
    id: 9,
  },
  {
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Analytics & Growth",
    id: 10,
  },
];
