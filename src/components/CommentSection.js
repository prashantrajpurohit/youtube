import React from "react";
const commentsData = [
  {
    name: "Perry",
    text: "lorem ipsum dolar site ",
    replies: [],
  },
  {
    name: "Perry",
    text: "lorem ipsum dolar site ",
    replies: [
      {
        name: "Perry",
        text: "lorem ipsum dolar site ",
        replies: [
          {
            name: "Perry",
            text: "lorem ipsum dolar site ",
            replies: [
              {
                name: "Perry",
                text: "lorem ipsum dolar site ",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Perry",
    text: "lorem ipsum dolar site ",
    replies: [
      {
        name: "Perry",
        text: "lorem ipsum dolar site ",
      },
    ],
  },
  {
    name: "Perry",
    text: "lorem ipsum dolar site ",
    replies: [
      {
        name: "Perry",
        text: "lorem ipsum dolar site ",
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 p-2 py-3 shadow-md rounded-md">
      <div>
        <img
          alt="user-icon"
          className="h-8 "
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
      <div className="ml-2">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments?.map((comment, idx) => (
    <div key={idx}>
      <Comment data={comment} />
      <div className="ml-5 pl-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentSection = () => {
  return (
    <>
      <div className="p-2 m-5">
        <h1 className="font-bold mb-2">COMMENTS</h1>
        <CommentsList comments={commentsData} />
      </div>
    </>
  );
};

export default CommentSection;
