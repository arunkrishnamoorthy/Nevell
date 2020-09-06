import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const ListItem = ({
  item,
  deleteItem,
  editItem,
  isEditing,
  editItemDetail,
  saveEditItem,
  handleEditChange,
  itemChecked,
  checkedItems,
  nav,
}) => {
  const checked = checkedItems.filter(
    (checkedItem) => checkedItem.id === item.id,
  );

  return (
    <TouchableOpacity style={styles.listItem} onPress={nav}>
      <View style={styles.listItemView}>
        {isEditing && editItemDetail.id === item.id ? (
          <TextInput
            placeholder="Edit Item..."
            style={styles.editItemInput}
            onChangeText={handleEditChange}
          />
        ) : (
          <Text
            onPress={() => itemChecked(item.id, item.text)}
            style={
              checked.length ? styles.checkedItemText : styles.listItemText
            }>
            {item.text}
          </Text>
        )}
        <View style={styles.iconView}>
          {/* {isEditing && editItemDetail.id === item.id ? (
            <MaterialIcons
              name="favorite"
              size={20}
              color="green"
              // onPress={() => saveEditItem(item.id, item.text)}
            />
          ) : (
            !checked.length && (
              <MaterialIcons
                name="favorite-border"
                size={20}
                color="red"
                onPress={() => editItem(item.id, item.text)}
              />
            )
          )} */}
          {/* {isEditing && editItemDetail.id === item.id ? (
            <Icon
              name="save"
              size={20}
              color="green"
              // onPress={() => saveEditItem(item.id, item.text)}
            />
          ) : (
            !checked.length && (
              <Icon
                name="pencil"
                size={20}
                color="blue"
                onPress={() => editItem(item.id, item.text)}
              />
            )
          )} */}
          {/* <Icon
            name="remove"
            size={20}
            color="firebrick"
            onPress={() => deleteItem(item.id)}
          /> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
  checkedItemText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'green',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 70,
  },
  editItemInput: {
    padding: 0,
    fontSize: 18,
  },
});

export default ListItem;
