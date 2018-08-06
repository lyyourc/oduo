import * as React from 'react'
import Tree from './Tree'

interface ICheatSheet {
  name: string
  path?: string
  items: ICheatSheet[]
}

interface IProps {
  items: ICheatSheet[]
}

interface IState {
  hightlight?: string
}

export default class CheatSheets extends React.Component<IProps, IState> {
  public render() {
    const cheatsheets = {
      isRoot: true,
      items: this.props.items,
      name: '',
      path: '',
    }

    const treeData = this.normalizeCheatsheets(cheatsheets, undefined)

    return (
      <div>
        <Tree data={treeData} />
      </div>
    )
  }

  private normalizeCheatsheets = (
    node: ICheatSheet,
    parent?: ICheatSheet
  ): ICheatSheet => {
    const newNode = {
      ...node,
      path:
        parent == null ? '' : parent.path + '/' + node.name.replace(/\s+/g, '_'),
    }

    return {
      ...newNode,
      items: node.items.map(child => this.normalizeCheatsheets(child, newNode)),
    }
  }
}
