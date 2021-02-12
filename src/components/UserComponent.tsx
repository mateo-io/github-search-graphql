import React from "react";
import styled from "@emotion/styled";

// local components
import { Box } from "../styles/common";
import * as colors from "../styles/colors";
import { UserType } from "../types/common";

export default class UserComponent extends React.PureComponent<UserType> {
  constructor(props: UserType) {
    super(props);

    this.state = {};
  }

  render() {
    const { avatarUrl, login, name, location, bio } = this.props;

    return (
      <Wrapper onClick={() => window.open(`//github.com/${login}`)}>
        <CenteredBox>
          <Img src={avatarUrl} />
          <P>{login}</P>
        </CenteredBox>
        <CenteredBox>
          <P>{bio}</P>
        </CenteredBox>
        <CenteredBox>
          <BoldP>{name}</BoldP>
          <P>NAME</P>
        </CenteredBox>
        <CenteredBox>
          <BoldP>{location}</BoldP>
          <P>LOCATION</P>
        </CenteredBox>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    background: ${colors.secondary};
  }
`;

const P = styled.p`
  margin-top: 8px;
  font-weight: 500;
  color: ${colors.black};
  font-size: 13px;
  flex: 0 0 20px;
`;

const BoldP = styled.p`
  color: ${colors.blue};
  font-size: 16px;
  font-weight: 500;
  flex: 0 0 20px;
  margin-bottom: 0;
`;

const Img = styled.img`
  width: 70px;
  border-radius: 99%;
`;

const CenteredBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
