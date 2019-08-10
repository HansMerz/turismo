import React, { Component } from "react";
import { View } from "react-native";

import CustomHeader from '../components/CustomHeader';

export default class Admin extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <CustomHeader navigation={this.props.navigation} />
      </View>
    );
  }
}