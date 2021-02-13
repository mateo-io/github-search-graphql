import styled from "@emotion/styled"
import Loader from "react-loader-spinner"
import * as colors from "../styles/colors"

const LoaderComponent = (props: { isLoading: boolean }) => {
  const { isLoading } = props

  if (!isLoading) {
    return null
  }

  return (
    <Wrapper>
      <Loader type="Puff" color={colors.primary} height={150} width={150} />
    </Wrapper>
  )
}

const Wrapper = styled("div")`
  margin: 0 auto;
  width: 150px;
  margin-top: 24px;
`

export default LoaderComponent
