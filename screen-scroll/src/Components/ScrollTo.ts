import { useCallback } from "react";

interface ScrollOptions {
  behavior?: ScrollBehavior;
  offset?: number;
}

const useScrollTo = (id: string, options: ScrollOptions = {}) => {
    const elem
  const scrollToHeight = useCallback((height: number, options?: ScrollOptions) => {
    const { behavior = "smooth", offset = 0 } = options || {};
    
    window.scrollTo({
      top: height + offset,
      behavior,
    });
  }, []);

  return scrollToHeight;
};

export default useScrollTo;