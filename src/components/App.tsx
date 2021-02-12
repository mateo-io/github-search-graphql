import React from "react";

// components
import GithubSearch from "./GithubSearch";
import UsersView from "./UsersView";

// misc
import "../styles/App.css";
import { queryGithub } from "../lib/queryGithub";
import { UserType } from "../types/common";
import { chunk } from "../lib/helpers";
import { debounce } from "lodash";
import Pagination from "./Pagination";
import { BATCH_LENGTH, ITEMS_PER_PAGE } from "../constants";

type Page = {
  index: number;
  users: UserType[];
};

type AppState = {
  pages: Page[];
  currentPageIndex: number; // arrays start at 0 but pageIndexes start at 1. change my mind
};

class App extends React.Component<{}, AppState> {
  setResultsDebounced: (v: string) => void;

  constructor(props: {}) {
    super(props);
    this.state = { pages: [], currentPageIndex: 1 };
    this.setResultsDebounced = debounce(this.setResults, 250);
  }

  setResults = async (value: string) => {
    const users = await queryGithub({
      query: value,
      firstElements: BATCH_LENGTH,
    });

    const startIndex = this.state.currentPageIndex;

    // divide them each in pages size
    const chunkedUsers = chunk(users, ITEMS_PER_PAGE);

    const pagesWithIndex = chunkedUsers.map(
      (usersArray: UserType[], i: number) => ({
        index: i + startIndex,
        users: usersArray,
      })
    );

    this.setState({ pages: pagesWithIndex, currentPageIndex: 1 });
  };

  render() {
    const { pages, currentPageIndex } = this.state;
    const currentPage = pages.find(
      (page: Page) => page.index === currentPageIndex
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1>Github Search v4</h1>
        </header>
        <GithubSearch callback={this.setResultsDebounced} />
        {currentPage && <UsersView users={currentPage.users} />}
        {currentPage && (
          <Pagination
            currentIndex={currentPageIndex}
            setIndex={(i: number) => this.setState({ currentPageIndex: i })}
          />
        )}
      </div>
    );
  }
}

export default App;
