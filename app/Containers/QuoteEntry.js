// @flow

import * as React from "react";
import { TextInput } from "react-native";
import Container from "../Components/Container.js";

const { Component, Fragment } = React;

type Props = {};
type State = {};

class QuoteEntry extends Component<Props, State> {
  render() {
    return (
      <Container>
        <TextInput />
        <TextInput />
      </Container>
    );
  }
}

export default QuoteEntry;
