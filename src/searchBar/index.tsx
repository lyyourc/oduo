import * as React from 'react'
import { Input } from 'rebass'

export default class SearchBar extends React.Component {
  public render() {
    return (
      <div>
        <Input
          placeholder='type something'
        />
      </div>
    )
  }
}
