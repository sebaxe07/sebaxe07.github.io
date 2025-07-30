"use client";

import { useEffect, useState } from "react";

export const ScrollIndicator = () => {
  const [scrollData, setScrollData] = useState({
    isScrolling: false,
    scrollPercentage: 0,
    thumbHeight: 0,
    thumbPosition: 0,
  });

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const updateScrollData = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Calculate scroll percentage
      const scrollPercentage =
        documentHeight > 0 ? scrollTop / documentHeight : 0;

      // Calculate thumb height (proportional to viewport vs full document)
      const thumbHeight = Math.max(
        20,
        (viewportHeight / fullHeight) * viewportHeight
      );

      // Calculate thumb position
      const trackHeight = viewportHeight - thumbHeight;
      const thumbPosition = scrollPercentage * trackHeight;

      setScrollData({
        isScrolling: true,
        scrollPercentage,
        thumbHeight,
        thumbPosition,
      });
    };

    const handleScroll = () => {
      updateScrollData();

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrollData((prev) => ({ ...prev, isScrolling: false }));
      }, 1000);
    };

    // Initial calculation
    updateScrollData();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateScrollData);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollData);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 right-1 w-1 z-[9998] pointer-events-none transition-opacity duration-300 ${
        scrollData.isScrolling ? "opacity-100" : "opacity-0"
      }`}
      style={{ height: "100vh" }}
    >
      {/* Scroll thumb */}
      <div
        className="absolute right-0 w-1 bg-gradient-to-b from-purple-500/40 via-purple-400/80 to-purple-500/40 rounded-full transition-all duration-100 ease-out"
        style={{
          height: `${scrollData.thumbHeight}px`,
          top: `${scrollData.thumbPosition}px`,
          minHeight: "20px",
          maxHeight: "200px",
        }}
      />
    </div>
  );
};
