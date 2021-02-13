import React from "react"
import styled from "@emotion/styled"
import * as colors from "../styles/colors"
import { Paper, P } from "../styles/common"

const GithubSearch = (props: { callback: (v: string) => void }) => {
  const clearFocus = () => {
    const element = document.getElementById("search")! as HTMLInputElement
    element.value = ""
  }
  return (
    <CustomPaper>
      <Wrapper>
        <Parragraph>Search for your favorite user! 💫</Parragraph>

        <SearchInput
          placeholder="mateo-io..."
          id="search"
          onFocus={() => clearFocus()}
          onChange={(e) => props.callback(e.target.value)}
        />
      </Wrapper>
    </CustomPaper>
  )
}

const Wrapper = styled("div")`
  padding: 12px;
  text-align: left;
  margin-top: 24px;
`

const Parragraph = styled(P)`
  font-weight: 900;
  margin-left: 12px;
`

const CustomPaper = styled(Paper)``

export const SearchInput = styled.input`
  height: 35px;
  padding: 4px 12px;
  width: 95%;
  border-radius: 12px;
  font-size: 16px;
  border: 1px solid ${colors.grey};

  &:focus {
    outline: none !important;
    border: 1px solid ${colors.blue};
  }
`
export default GithubSearch
