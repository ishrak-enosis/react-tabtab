// @flow
import * as React from 'react';
import {CloseIcon} from './IconSvg';
import styled from 'styled-components';

const CloseWrapper = styled.button`
  display: inline-block;
  color: black;
  background-color: blue;
  margin-left: 5px;
  padding: 0;
  vertical-align: middle;
  border: 0;
  padding: 2px;
  outline: 0;
  &:hover {
    color: blue;
    background-color: white;
    cursor: pointer;
  }
  > svg {
    vertical-align: middle;
  }
`;

type Props = {
  handleDelete: (event: any) => void
};

export default class CloseButton extends React.PureComponent<Props> {
  render() {
    return (
      <CloseWrapper onClick={this.props.handleDelete}>
        <CloseIcon/>        
      </CloseWrapper>
    );
  }
}
