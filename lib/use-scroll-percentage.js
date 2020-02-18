import { createRef, useEffect, useState } from "react";

function getScrollPercentage(element) {
  const { bottom, height, top } = element.getBoundingClientRect();
  const actualTop = top - window.innerHeight;

  if (actualTop <= 0 && bottom > window.innerHeight) {
    const percent = Math.ceil((Math.abs(actualTop) / height) * 100);
    console.log(percent);
    return percent;
  }
  return 0;
}

function useScrollPercentage() {
  const scrollRef = createRef();
  const [scrollPercentage, setScrollPercentage] = useState(NaN);

  const reportScroll = () => {
    if (scrollRef.current) {
      setScrollPercentage(getScrollPercentage(scrollRef.current));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reportScroll, { passive: true });
    window.addEventListener("resize", reportScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", reportScroll);
      window.removeEventListener("resize", reportScroll);
    };
  }, []);

  return [scrollRef, Number.isNaN(scrollPercentage) ? 0 : scrollPercentage];
}

export default useScrollPercentage;
