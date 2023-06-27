// Typography.js
import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomTypography = ({ variant, style, children }) => {
  return <Text style={[styles[variant], style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subheader: {
    fontSize: 18,
    fontWeight: "500",
  },
  body: {
    fontSize: 14,
  },
  caption: {
    fontSize: 12,
  },
});

export default CustomTypography;
