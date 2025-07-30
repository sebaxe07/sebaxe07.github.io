"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface MouseContextType {
  mousePosition: MousePosition;
  isMouseMoving: boolean;
}

const MouseContext = createContext<MouseContextType>({
  mousePosition: { x: 0, y: 0 },
  isMouseMoving: false,
});

export const useMousePosition = () => useContext(MouseContext);

interface MouseProviderProps {
  children: ReactNode;
}

export const MouseProvider: React.FC<MouseProviderProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseMoving(true);

      // Reset moving state after a short delay
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMouseMoving(false);
      }, 150);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <MouseContext.Provider value={{ mousePosition, isMouseMoving }}>
      {children}
    </MouseContext.Provider>
  );
};
