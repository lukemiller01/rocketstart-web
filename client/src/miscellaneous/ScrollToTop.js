import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component scrolls a page to the top on user navigation.
// This prevents the page from staying on the last known scroll when a user moves to another page and comes back
export default function ScrollToTop() {
  const { pathname } = useLocation();

  // ScrollToTop shouldn't work if the user is going to a specific hash
  const hash = window.location.hash;

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
