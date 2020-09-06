import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductDetail = () => {
  return (
    <View style={styles.container}>
      <Text>Product Detail Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
