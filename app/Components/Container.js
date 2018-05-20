import * as React from "react";
import { StyleSheet, View } from "react-native";

const Container = props => (
  <View style={styles.container}>{props.children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  }
});

export default Container;
