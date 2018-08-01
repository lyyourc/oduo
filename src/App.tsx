import * as React from 'react'
import { Flex, Provider } from 'rebass'
import Cheatsheets from './cheatsheets'
import Main from './main'
import SearchBar from './searchBar'
import StyledAside from './styled/StyledAside'
import StyledMain from './styled/StyledMain'

class App extends React.Component {
  public render() {
    return (
      <Provider>
        <Flex>
          <StyledAside p={10}>
            <SearchBar />
            <Cheatsheets />
          </StyledAside>

          <StyledMain is="main" flex="1" p={10}>
            <Main />
          </StyledMain>
        </Flex>
      </Provider>
    )
  }
}

export default App
