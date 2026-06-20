import React from "react";

const BookCard = ({ book }) => {
  const {
    title,
    author,
    category,
    price,
    rating,
    pages,
    publishedYear,
    stock,
    image,
    description,
  } = book;

  return (
    <div className="card w-96 bg-base-100 card-sm shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
            by {author}
        </p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
