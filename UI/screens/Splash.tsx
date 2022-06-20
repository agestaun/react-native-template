import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function Splash() {
  return (
    <View style={st.root}>
      <Text style={st.title}>{'Splash Screen'}</Text>
    </View>
  );
}

const st = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 24,
  }
});
