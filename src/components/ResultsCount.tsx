import { P, Paper } from "../styles/common"
import * as colors from "../styles/colors"
import styled from "@emotion/styled"

const ResultsCount = (props: { resultsCount: number }) => {
  const { resultsCount } = props
  if (!resultsCount) {
    return null
  }

  const isPlural = resultsCount !== 1
  const resultsWord = isPlural ? "results" : "result"

  return (
    <Paper>
      <PaddedWrapper>
        <BoldP>
          {resultsCount.toLocaleString()} {resultsWord}
        </BoldP>
        <GreyP>*These may be an incomplete set of results</GreyP>
      </PaddedWrapper>
    </Paper>
  )
}

const PaddedWrapper = styled("div")`
  padding: 12px 24px;
  margin-top: 24px;
`

const BoldP = styled(P)`
  font-size: 20px;
  color: ${colors.black};
`

const GreyP = styled(P)`
  color: ${colors.grey};
  font-weight: 400;
  font-size: 12px;
`

export default ResultsCount
