import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // Hash is added because ScrollToTop shouldn't work if the user is going to a specific hash
  const hash = window.location.hash;

  console.log(pathname,hash);

  useEffect(() => {
    if(!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname,hash]);

  return null;
}