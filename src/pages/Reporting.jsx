import { useReviewContext } from "../context/ReviewContext";

export default function Reporting() {
  const { reviewItems } = useReviewContext();
  return (
    <>
      <div className="app">
        <h1>Status</h1>
        <hr />
        <h2>Pending </h2>

        <p>{reviewItems.filter((entry) => !entry.isReviewed).length}</p>
        <hr />
        <h2>Reviewed</h2>
        <p>{reviewItems.filter((entry) => entry.isReviewed).length}</p>
      </div>
    </>
  );
}
