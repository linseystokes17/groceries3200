import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

export default class App extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <FlatList data = {[{key: 'List1'}, {key: 'List2'}]} 
        renderItem={({item}) => <Text style = {styles.item}>{item.key}</Text>}
        />

      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    item:{
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    container:{
      flex: 1,
      paddingTop: 22
    }
  })