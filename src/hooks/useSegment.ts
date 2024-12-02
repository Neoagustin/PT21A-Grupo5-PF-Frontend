import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

const useSegment = () => {
  const pathname = usePathname();
  const [segment, setSegment] = useState<string | null>(null);

  const getSegment = useCallback(() => {
    const segments = pathname.split("/").filter(Boolean);
    return segments.length > 0 ? segments[segments.length - 1] : null;
  }, [pathname]);

  const getLastTwoSegments = useCallback(() => {
    const segments = pathname.split("/").filter(Boolean);
    const lastTwo = segments.slice(-2);

    return lastTwo.map((segment) => decodeURIComponent(segment));
  }, [pathname]);

  const isAdmin = pathname.startsWith("/admin");

  useEffect(() => {
    let segmentValue = getSegment();
    if (segmentValue) {
      segmentValue = decodeURIComponent(segmentValue)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      setSegment(segmentValue.toLowerCase());
    }
  }, [pathname, getSegment]);

  return { segment, isAdmin, getLastTwoSegments };
};

export default useSegment;
