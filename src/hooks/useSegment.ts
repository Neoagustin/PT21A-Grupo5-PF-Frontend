import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

const useSegment = () => {
  const pathname = usePathname();
  const [segment, setSegment] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const getSegment = useCallback(() => {
    const segments = pathname.split("/").filter(Boolean);
    return segments.length > 0 ? segments[segments.length - 1] : null;
  }, [pathname]);

  // Object to store route checks
  const routeChecks = {
    isAdmin: pathname.startsWith("/admin"),
    isLanguageRoute: pathname === "/language",
    isStudentsRoute: pathname === "/students",
    isTeachersRoute: pathname === "/teachers",
  };

  useEffect(() => {
    setSegment(getSegment());
    setIsAdmin(routeChecks.isAdmin);
  }, [pathname, getSegment, routeChecks.isAdmin]);

  return {
    segment,
    isAdmin: routeChecks.isAdmin,
    isLanguageRoute: routeChecks.isLanguageRoute,
    isStudentsRoute: routeChecks.isStudentsRoute,
    isTeachersRoute: routeChecks.isTeachersRoute,
  };
};

export default useSegment;
