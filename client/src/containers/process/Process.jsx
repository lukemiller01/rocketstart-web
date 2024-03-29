import React from "react";
import "./process.css";
import { ProcessFeature } from "../../components";

// Including two process components
const processData = [
  {
    header: "Find the right recruiters",
    description:
      "Develop connections with the right people to land your next interview.",
    feature: "Contact Finder",
    icon: "person_search",
    link: "/product#contact-finder",
  },
  {
    header: "Write the perfect message",
    description:
      "Make your LinkedIn invitations count using four message attributes proven to increase reply rates.",
    feature: "Message Analysis",
    icon: "edit_note",
    link: "/product#message-analysis",
  },
];

// Process components container below landing page header
const Process = () => {
  return (
    <div className="process">
      <div className="process__header">
        <h4>
          Give Yourself an
          <font className="color__change"> Unfair Advantage.</font>
        </h4>
      </div>
      {processData.map((item, index) => (
        <ProcessFeature
          header={item.header}
          description={item.description}
          feature={item.feature}
          icon={item.icon}
          link={item.link}
          key={item.icon + index}
        />
      ))}
      <div className="button__container"></div>
    </div>
  );
};

export default Process;
