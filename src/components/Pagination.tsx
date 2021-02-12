import { BATCH_LENGTH, ITEMS_PER_PAGE } from "../constants";
import { Paper } from "../styles/common";

const Pagination = (props: {
  currentIndex: number;
  setIndex: (i: number) => void;
}) => {
  const { currentIndex, setIndex } = props;
  const paginationLimit = Math.floor(BATCH_LENGTH / ITEMS_PER_PAGE);

  return (
    <Paper>
      {currentIndex > 1 && (
        <span onClick={() => setIndex(currentIndex - 1)}>{"<"}</span>
      )}
      <span>{currentIndex}</span>
      {currentIndex <= paginationLimit && (
        <span onClick={() => setIndex(currentIndex + 1)}>{">"}</span>
      )}
    </Paper>
  );
};

export default Pagination;
