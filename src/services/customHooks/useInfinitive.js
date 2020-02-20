import { useEffect, useState } from "react";

// Create custom React Hook of infinivite scroll
const useInfiniteScroll = (callback, scrollElemRef) => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const useWindow = !scrollElemRef;
    const listener = (scrollElemRef && scrollElemRef.current) || window;

    function isBottomHit(element, useWindow) {
      if (useWindow) {
        return (
          element.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight
        );
      } else {
        return (
          element.scrollHeight === element.scrollTop + element.clientHeight
        );
      }
    }
    function onScroll() {
      if (isBottomHit(listener, useWindow)) {
        const element = useWindow ? document.documentElement : listener;
        if (scrollTop < element.scrollTop) {
          setScrollTop(element.scrollTop);
          callback();
        }
      }
    }
    listener && listener.addEventListener("scroll", onScroll);
    return () => {
      listener && listener.removeEventListener("scroll", onScroll);
    };
  }, [callback, scrollElemRef, scrollTop]);
};
export default useInfiniteScroll;
