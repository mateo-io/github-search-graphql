import styled from "@emotion/styled"
import { BATCH_LENGTH, ITEMS_PER_PAGE } from "../constants"
import { Paper } from "../styles/common"

const Pagination = (props: {
  currentIndex: number
  setIndex: (i: number) => void
  canGoForward: boolean
}) => {
  const { currentIndex, setIndex, canGoForward } = props
  const paginationLimit = Math.floor(BATCH_LENGTH / ITEMS_PER_PAGE)

  // TODO
  // check if there's even a next page
  const isGoingForwardAllowed = currentIndex <= paginationLimit && canGoForward

  return (
    <Paper>
      <Wrapper>
        {currentIndex > 1 ? (
          <Button onClick={() => setIndex(currentIndex - 1)}>{"<"}</Button>
        ) : (
          <PlaceHolder />
        )}
        <Span>{currentIndex}</Span>
        {isGoingForwardAllowed ? (
          <Button onClick={() => setIndex(currentIndex + 1)}>{">"}</Button>
        ) : (
          <PlaceHolder />
        )}
      </Wrapper>
    </Paper>
  )
}

const Button = styled.button`
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  width: 25px;
  border: 0;
  background: white;
`

const PlaceHolder = styled.span`
  width: 25px;
`

const Span = styled.span`
  width: 25px;
  text-align: center;
`

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Pagination
