import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      {/* <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
        value={text}
      /> */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
          setText('');
        }}>
        <Text style={styles.btnText}>
          <Icon name="plus" style={styles.iconColor} size={20} /> Add Product
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
  btn: {
    backgroundColor: '#1A5276',
    color: '#fff',
    padding: 9,
    margin: 5,
  },
  iconColor: {
    color: '#fff',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
