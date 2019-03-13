import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Alvin"
          timeAgo="Today at 8:00"
          content="ee-nee"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Bianca"
          timeAgo="Today at 13:00"
          content="suigoi"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Carl"
          timeAgo="Today at 19:00"
          content="oishiiso"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
