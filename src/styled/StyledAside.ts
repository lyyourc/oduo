import { Box } from 'rebass'
import styled from 'styled-components'

export default styled(Box)`
  height: 100vh;
  border: 1px solid ${props => props.theme.colors.gray};
  width: 260px;
`
