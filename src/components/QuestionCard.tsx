import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  useranswer: string;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  useranswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
    </div>
  );
};

export default QuestionCard;
