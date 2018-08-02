import * as React from 'react'
import { Arrow, Box, Flex, Text } from 'rebass'
import styled from 'styled-components'

interface ITreeNode {
  name: string
  items: ITreeNode[]
  isRoot?: boolean
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
          <StyledNodeName
            py={1}
            alignItems="center"
            collapsable={collapsable}
            onClick={this.handleNodeNameClick}>
              <StyledArrow
                hidden={!collapsable}
                collapsed={collpased}
                direction="down"
              />
            <Text pl={1}>{data.name}</Text>
          </StyledNodeName>
        )}
        {!collpased && (
          <Box pl={data.isRoot ? 0 : 2}>
            {data.items.map((item, i) => <Tree key={i} data={item} />)}
          </Box>
        )}
      </div>
    )
  }

  public handleNodeNameClick = () => {
    /* tslint:disable */
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
  visibility: ${props => props.hidden ? 'hidden' : 'visible'};
  transform: rotate(${props => props.collapsed ? '-90' : '0'}deg);
`

interface IStyledNodeName {
  collapsable?: boolean
}
const StyledNodeName = styled(Flex)<IStyledNodeName>`
  cursor: ${props => (props.collapsable ? 'pointer' : 'auto')};
`
