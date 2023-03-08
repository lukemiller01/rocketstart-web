import React from "react";
import { useSearchParams } from "react-router-dom";
import { ResetPassword, VerifyEmail } from "./components";
import NotFound from "../notfound/NotFound";

const Action = () => {
  const [searchParams] = useSearchParams();

  var mode = searchParams.get("mode");
  var actionCode = searchParams.get("oobCode");

  switch (mode) {
    case "verifyEmail":
      return <VerifyEmail actionCode={actionCode} />;
    case "resetPassword":
      return <ResetPassword actionCode={actionCode} />;
    default:
      return <NotFound />; // If there's no query parameter, return 404.
  }
};

export default Action;
