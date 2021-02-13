import * as colors from "./colors"
import styled from "@emotion/styled"

const MARGIN_TOP_LANDING_BOX = "50px"

/**
 * LAYOUT
 */
export const RootWrapper = styled.div`
  background: ${colors.primary};
  padding-top: ${MARGIN_TOP_LANDING_BOX};
`

export const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: -50px;
  min-height: calc(100vh - ${MARGIN_TOP_LANDING_BOX});
  height: auto;
`

export const Background = styled.div`
  background: ${colors.white};
  min-height: 85%;
  border-radius: 4px;
`
/**
 * END LAYOUT
 */

//////////////////////////////////////////////////

/**
 * CORE COMPONENTS
 */

export const P = styled.p``

export const Paper = styled.div`
  max-width: 960px;
  min-width: 420px;
  width: 50vw;
  background: ${colors.white};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0px auto;
  border-radius: 4px;
`

export const UsersWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  min-height: 600px;
`

/**
 * END CORE COMPONENTS
 */

//////////////////////////////////////////////////

/**
 * FLEX AND BOXES
 */

export const Box = styled.div`
  flex: 0 1 33%;
  font-size: 14px;
`
/**
 * END FLEX AND BOXES
 */
