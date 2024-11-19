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
    return segments.slice(-2);
  }, [pathname]);

  const isAdmin = pathname.startsWith("/admin");

  useEffect(() => {
    setSegment(getSegment());
  }, [pathname, getSegment]);

  return { segment, isAdmin, getLastTwoSegments };
};

export default useSegment;
