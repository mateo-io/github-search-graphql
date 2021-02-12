import React from "react";
import styled from "@emotion/styled";
import * as colors from "../styles/colors";
import { Paper, P } from "../styles/common";

const GithubSearch = (props: { callback: (v: string) => void }) => {
  return (
    <div>
      <CustomPaper>
        <P>Search for your favorite user</P>

        <SearchInput
          placeholder="mateo-io..."
          onChange={(e) => props.callback(e.target.value)}
        />
      </CustomPaper>
    </div>
  );
};

const CustomPaper = styled(Paper)`
  margin-top: 4em;
  padding: 12px;

  //   background-color: ${colors.primary};
`;

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
`;
export default GithubSearch;
