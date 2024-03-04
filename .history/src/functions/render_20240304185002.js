// handleEvent.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const renderStarIcons = (rating, cx) => {
  const roundedRating = Math.round(rating);
  const starIcons = [];
  for (let i = 0; i < roundedRating; i++) {
    starIcons.push(
      <FontAwesomeIcon key={i} className={cx("rating-icon")} icon={faStar} />
    );
  }
  return starIcons;
};

const loadMoreProducts = (currentDisplayed, setDisplayed, increment) => {
  setDisplayed(currentDisplayed + increment);
};

export { renderStarIcons, loadMoreProducts };
