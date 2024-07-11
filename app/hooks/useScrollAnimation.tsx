import { useEffect, useState } from "react";

export const useScrollAnimation = (threshold = 0.1) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const triggerPosition = document.documentElement.scrollHeight * threshold ;
      if (scrollPosition >= triggerPosition) {
        setIsAnimated(true);
      } else {
        setIsAnimated(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isAnimated;
};
