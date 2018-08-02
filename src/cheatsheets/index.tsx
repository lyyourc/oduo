import * as React from 'react'
import Tree from './Tree'

interface ICheatSheet {
  name: string
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
    }

    return (
      <div>
        <Tree data={cheatsheets} />
      </div>
    )
  }
}
