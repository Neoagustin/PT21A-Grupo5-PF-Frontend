import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

const useSegment = () => {
  const pathname = usePathname();
  const [segment, setSegment] = useState<string | null>(null);

  const getSegment = useCallback(() => {
    const segments = pathname.split("/").filter(Boolean);
    return segments.length > 0 ? segments[segments.length - 1] : null;
  }, [pathname]);

  const routeChecks = {
    isAdmin: pathname.startsWith("/admin"),
    isLanguageRoute: pathname === "/language",
    isStudentsRoute: pathname === "/students",
    isTeachersRoute: pathname === "/teachers",
  };

  useEffect(() => {
    setSegment(getSegment());
  }, [pathname, getSegment]);

  return {
    segment,
    ...routeChecks,
  };
};

export default useSegment;
