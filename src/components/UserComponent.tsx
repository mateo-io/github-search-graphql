import React from "react"
import styled from "@emotion/styled"

// local components
import { Box } from "../styles/common"
import * as colors from "../styles/colors"
import { UserType } from "../types/common"

export default class UserComponent extends React.PureComponent<UserType> {
  constructor(props: UserType) {
    super(props)

    this.state = {}
  }

  render() {
    const { avatarUrl, login, name, location, bio } = this.props

    return (
      <Wrapper onClick={() => window.open(`//github.com/${login}`)}>
        <CenteredBox>
          <Img src={avatarUrl} />
          <P>{login}</P>
        </CenteredBox>
        <CenteredBox>
          <P>{bio ? bio : "No bio"}</P>
        </CenteredBox>
        <CenteredBox>
          {name ? (
            <React.Fragment>
              <BoldP>{name}</BoldP>
              <InformationP>NAME</InformationP>
            </React.Fragment>
          ) : (
            <P>No name</P>
          )}
        </CenteredBox>
        <CenteredBox>
          {location ? (
            <React.Fragment>
              <BoldP>{location}</BoldP>
              <InformationP>LOCATION</InformationP>
            </React.Fragment>
          ) : (
            <P>No location</P>
          )}
        </CenteredBox>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  cursor: pointer;
  position: relative;

  &:hover {
    opacity: 0.9;
    background: ${colors.secondary};
    p {
      color: white;
    }
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 80%;
    height: 1px;
    left: 36px;
    background-color: ${colors.primary};
  }
`

const P = styled.p`
  margin-top: 8px;
  color: ${colors.black};
  font-size: 13px;
  flex: 0 0 20px;
`

const InformationP = styled(P)`
  color: ${colors.grey};
`

const BoldP = styled(P)`
  font-size: 16px;
  margin-bottom: 0;
`

const Img = styled.img`
  width: 70px;
  border-radius: 99%;
`

const CenteredBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
