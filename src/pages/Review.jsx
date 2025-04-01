import { useReviewContext } from "../context/ReviewContext";

function Review() {
  const { reviewItems, toggleReviewItems } = useReviewContext();
  return (
    <div>
      <h1>To Review</h1>{" "}
      <p> isReviewed: {reviewItems.filter((rI) => rI.isReviewed).length} </p>
      <ul>
        {reviewItems.map((items) => (
          <li
            style={{ textDecoration: items.isReviewed ? "line-through" : "" }}
            onClick={() => toggleReviewItems(items.url)}
          >
            {" "}
            {items.url}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Review;
