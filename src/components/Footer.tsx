import styled from "@emotion/styled"
import * as colors from "../styles/colors"

const Footer = () => {
  return (
    <Wrapper>
      <P>
        made by{" "}
        <A target="_" href="//mateomejia.com">
          mateo mejia
        </A>
      </P>
    </Wrapper>
  )
}

const P = styled.p`
  color: ${colors.white};
`

const A = styled.a`
  text-decoration: none;
  color: ${colors.grey};
`

const Wrapper = styled.div`
  background: ${colors.black};
  text-align: center;
  position: absolute;
  bottom: -56px;
  width: 100%;
  height: 56px;
`
export default Footer
