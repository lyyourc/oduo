import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { Arrow, Box, Flex, Text } from 'rebass'
import styled from 'styled-components'

interface ITreeNode {
  name: string
  items: ITreeNode[]
  isRoot?: boolean
  path?: any
}

interface IProps {
  data: ITreeNode
}

interface IState {
  collpased: boolean
}

export default class Tree extends React.Component<IProps, IState> {
  public state = {
    collpased: true,
  }

  public render() {
    const { data } = this.props
    const collpased = data.isRoot ? false : this.state.collpased
    const collapsable = data.items.length > 0

    return (
      <div>
        {data.name && (
          <StyledLink to={data.path} exact={true}>
            <StyledNodeName
              py={1}
              alignItems="center"
              collapsable={collapsable}>
              <StyledArrow
                hidden={!collapsable}
                collapsed={collpased}
                direction="down"
                onClick={this.handleNodeNameClick}
              />
              <Text pl={1}>{data.name}</Text>
            </StyledNodeName>
          </StyledLink>
        )}
        {!collpased && (
          <Box pl={data.isRoot ? 0 : 2}>
            {data.items.map((item, i) => <Tree key={i} data={item} />)}
          </Box>
        )}
      </div>
    )
  }

  public handleNodeNameClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    event.stopPropagation()

    this.setState({
      collpased: !this.state.collpased,
    })
  }
}

interface IStyleArrow {
  hidden?: boolean
  collapsed?: boolean
}
const StyledArrow = styled(Arrow)<IStyleArrow>`
  visibility: ${props => (props.hidden ? 'hidden' : 'visible')};
  transform: rotate(${props => (props.collapsed ? '-90' : '0')}deg);
`

interface IStyledNodeName {
  collapsable?: boolean
}
const StyledNodeName = styled(Flex)<IStyledNodeName>`
  cursor: ${props => (props.collapsable ? 'pointer' : 'default')};
`

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: block;

  &.active {
    background: ${props => props.theme.colors.gray};
  }
`
