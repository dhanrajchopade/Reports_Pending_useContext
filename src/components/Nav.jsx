import { Link } from "react-router-dom";
import { useReviewContext } from "../context/ReviewContext";

export default function Nav() {
  const { reviewItems } = useReviewContext();
  return (
    <nav>
      <div className="logo">reviewer</div>
      <div className="links">
        <Link to="/" className="nav-link">
          Report
        </Link>
        <Link to="/pending" className="nav-link">
          Pending ({reviewItems.filter((rI) => !rI.isReviewed).length} / {""}
          {reviewItems.length})
        </Link>

        <Link to="/review" className="nav-link">
          Review
        </Link>
      </div>
    </nav>
  );
}
