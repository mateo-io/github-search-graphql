import React from "react"
import WebFont from "webfontloader"
import styled from "@emotion/styled"
import { debounce } from "lodash"

// components
import GithubSearch from "./GithubSearch"
import UsersView from "./UsersView"
import Footer from "./Footer"
import Pagination from "./Pagination"
import LoaderComponent from "./Loader"

// misc
import "../styles/App.css"
import { queryGithub } from "../lib/queryGithub"
import { UserType } from "../types/common"
import { chunk } from "../lib/helpers"
import { BATCH_LENGTH, ITEMS_PER_PAGE } from "../constants"
import * as colors from "../styles/colors"

import logo from "../assets/logo.png"
import ResultsCount from "./ResultsCount"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

type Page = {
  index: number
  users: UserType[]
}

type AppState = {
  pages: Page[]
  currentPageIndex: number // arrays start at 0 but pageIndexes start at 1. change my mind
  resultsCount: number // this is not the total results, only the ones we've fetched (limit 100)
  isLoading: boolean
}

class App extends React.Component<{}, AppState> {
  setResultsDebounced: (v: string) => void

  constructor(props: {}) {
    super(props)
    this.state = {
      pages: [],
      currentPageIndex: 1,
      resultsCount: 0,
      isLoading: false,
    }
    this.setResultsDebounced = debounce(this.setResults, 250)
  }

  componentDidMount() {
    WebFont.load({
      google: {
        families: ["Montserrat", "Kanit"],
      },
    })
  }

  setResults = async (value: string) => {
    this.setState({
      isLoading: true,
      pages: [],
      resultsCount: 0,
      currentPageIndex: 1,
    })

    const users = await queryGithub({
      query: value,
      firstElements: BATCH_LENGTH,
    })

    const startIndex = this.state.currentPageIndex

    // split them into page sized chunks
    const chunkedUsers = chunk(users, ITEMS_PER_PAGE)

    const pagesWithIndex = chunkedUsers.map(
      (usersArray: UserType[], i: number) => ({
        // since indexes start at 0 we need to add 1 to conform to the page heuristic
        index: i + startIndex,
        users: usersArray,
      })
    )

    // if no users then don't return anything
    if (pagesWithIndex.length === 0) {
      return
    }

    this.setState({
      pages: pagesWithIndex,
      currentPageIndex: 1,
      resultsCount: users.length,
      isLoading: false,
    })
  }

  render() {
    const { pages, currentPageIndex, resultsCount, isLoading } = this.state
    const currentPage = pages.find(
      (page: Page) => page.index === currentPageIndex
    )

    const nextPage = pages.find(
      (page: Page) => page.index === currentPageIndex + 1
    )

    return (
      <Body id="body">
        <Header id="header">
          <Img src={logo} />
          <H1>Github Search v4</H1>
        </Header>
        <GithubSearch callback={this.setResultsDebounced} />
        <ResultsCount resultsCount={resultsCount} />
        <LoaderComponent isLoading={isLoading} />
        {currentPage && <UsersView users={currentPage.users} />}

        {currentPage && (
          <Pagination
            currentIndex={currentPageIndex}
            setIndex={(i: number) => this.setState({ currentPageIndex: i })}
            canGoForward={typeof nextPage == "object"}
          />
        )}
        <Footer />
      </Body>
    )
  }
}

const H1 = styled("h1")`
  font-weight: 600;
`

const Img = styled("img")`
  height: 50px;
  width: 50px;
  margin-right: 24px;
`

const Header = styled("div")`
  background-color: ${colors.secondary};
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Body = styled("div")`
  background: ${colors.third};
  min-height: calc(100% - 80px);
  position: relative;
  padding-bottom: 24px;
`

export default App
