'use strict';
import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

export default class PropertyDetails extends Component<{}>
{
  static navigationOptions = {
    title: 'Property Details',
  };

  render() {
    const { params } = this.props.navigation.state;
    const item = params.propertyDetail

    return (
      <View style={styles.container}>
        <Image source={{ uri: item.img_url }} style={styles.image}/>
        <Text style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.price}>
          {item.price_formatted.split(' ')[0]}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
},
searchInput: {
  height: 36,
  padding: 4,
  marginRight: 5,
  flexGrow: 1,
  fontSize: 18,
  borderWidth: 1,
  borderColor: '#48BBEC',
  borderRadius: 8,
  color: '#48BBEC',
},
image: {
  width: 217,
  height: 138,
},
price: {
  fontSize: 25,
  fontWeight: 'bold',
  color: '#48BBEC'
},
title: {
  fontSize: 20,
  color: '#656565'
},
});
