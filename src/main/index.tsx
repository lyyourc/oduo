import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface IProps extends RouteComponentProps<any> {}

export default class Main extends React.Component<IProps, {}> {
  public render() {
    const [topic] = this.props.match.params.topic.split('/').reverse()

    return (
      <div>
        {topic}
      </div>
    )
  }
}
