import React, { ReactNode } from "react";
import cx from "classnames";
import "../styles/question.scss";

type QuestionProps = {
  content: string;
  authorName: string;
  authorAvatar: string;
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  children,
  content,
  authorName,
  authorAvatar,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <div
      className={cx(
        "question",
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={authorAvatar} alt={authorName} />
          <span>{authorName}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
