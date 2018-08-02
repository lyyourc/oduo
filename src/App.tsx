import * as React from 'react'
import { Box, Flex, Provider } from 'rebass'
import styled from 'styled-components'
import Cheatsheets from './cheatsheets'
import Main from './main'
import SearchBar from './searchBar'

export default class App extends React.Component {
  public state = {
    cheatsheets: [
      { name: 'JavaScript', items: [{ name: 'ES6', items: [] }] },
      { name: 'CSS', items: [{ name: 'CSS in JS', items: [] }] },
    ]
  }

  public render() {
    return (
      <Provider>
        <Flex>
          <StyledAside flexDirection="column">
            <Box bg="gray" p={2}>
              <SearchBar />
            </Box>
            <Box flex="1" p={2}>
              <Cheatsheets items={this.state.cheatsheets} />
            </Box>
          </StyledAside>

          <Box is="main" flex="1" p={10}>
            <Main />
          </Box>
        </Flex>
      </Provider>
    )
  }
}

const StyledAside = styled(Flex)`
  height: 100vh;
  border: 1px solid ${props => props.theme.colors.gray};
  width: 260px;
`
