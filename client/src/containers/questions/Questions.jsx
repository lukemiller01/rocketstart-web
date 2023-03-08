import React from "react";
import "./questions.css";
import { Question } from "../../components";

// List of questions
const questionData = [
  {
    question: "Is Rocketstart free?",
    answer:
      "Rocketstart's Message Analysis is free. Rocketstart's Contact Finder (coming soon) has tiered pricing.",
  },
  {
    question: "How does Rocketstart differ from competitors?",
    answer:
      "Comparable products are contact databases. Rocketstart provides job seekers with the contact hiring for any role online.",
  },
  {
    question: "How is Rocketstart data sourced?",
    answer:
      "Rocketstart's source data is public and processed ethically. Check back for new Blog posts on this topic.",
  },
  {
    question: "Who should use Rocketstart?",
    answer:
      "Job seekers, students, and professionals looking to expand their network can benefit from Rocketstart.",
  },
  {
    question: "Is Rocketstart available as a Browser Extension?",
    answer:
      "Rocketstart's Contact Finder extension is coming soon. Please sign up for product updates to get notified.",
  },
];

// Questions container
const Questions = () => {
  return (
    <div className="questions">
      <div className="question__header">
        <h4>Frequently Asked Questions</h4>
        <p className="question__paragraph">
          Can't find what you're looking for? Feel free to{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="mail__to"
            href="mailto:luke@rocketstart.careers"
          >
            contact us.
          </a>
        </p>
      </div>
      <div className="question__list">
        {questionData.map((item, index) => (
          <Question
            question={item.question}
            answer={item.answer}
            key={item.question + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Questions;
