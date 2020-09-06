import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
// import {uuid} from 'uuidv4';

import ListItem from './ListItem';
import AddItem from './AddItem';
import {useNavigation} from '@react-navigation/native';

const List = () => {
  const navigation = useNavigation();

  const [items, setItems] = useState([
    {
      id: '1',
      text: 'Product 1',
    },
    {
      id: '2',
      text: 'Product 2',
    },
    {
      id: '3',
      text: 'Product 3',
    },
    // {
    //   id: uuid(),
    //   text: 'Product 4',
    // },
    // {
    //   id: uuid(),
    //   text: 'Product 5',
    // },
    // {
    //   id: uuid(),
    //   text: 'Product 6',
    // },
    // {
    //   id: uuid(),
    //   text: 'Product 7',
    // },
    // {
    //   id: uuid(),
    //   text: 'Product 8',
    // },
    // {
    //   id: uuid(),
    //   text: 'Product 9',
    // },
    // {
    //   id: uuid(),
    //   text: 'Product 10',
    // },
    // {
    //   id: uuid(),
    //   text: 'Product 11',
    // },
    // {
    //   id: uuid(),
    //   text: 'Product 12',
    // },
  ]);

  // Flag true if user is currently editing an item
  const [editStatus, editStatusChange] = useState(false);

  // State to capture information about the item being edited
  const [editItemDetail, editItemDetailChange] = useState({
    id: null,
    text: null,
  });

  const [checkedItems, checkedItemChange] = useState([]);

  const deleteItem = (id) => {
    // navigation.navigate("Details");
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  // Submit the users edits to the overall items state
  const saveEditItem = (id, text) => {
    setItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === editItemDetail.id ? {id, text: editItemDetail.text} : item,
      );
    });
    // Flip edit status back to false
    editStatusChange(!editStatus);
  };

  // Event handler to capture users text input as they edit an item
  const handleEditChange = (text) => {
    editItemDetailChange({id: editItemDetail.id, text});
    // navigation.navigate("Details");
  };

  const handleNavigate = () => {
    navigation.push('Product Details');
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
        'No item entered',
        'Please enter an item when adding to your shopping list',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    } else {
      setItems((prevItems) => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
  };

  // capture old items ID and text when user clicks edit
  const editItem = (id, text) => {
    editItemDetailChange({
      id,
      text,
    });
    return editStatusChange(!editStatus);
  };

  const itemChecked = (id, text) => {
    const isChecked = checkedItems.filter(
      (checkedItem) => checkedItem.id === id,
    );
    isChecked.length
      ? // remove item from checked items state (uncheck)
        checkedItemChange((prevItems) => {
          return [...prevItems.filter((item) => item.id !== id)];
        })
      : // Add item to checked items state
        checkedItemChange((prevItems) => {
          return [...prevItems.filter((item) => item.id !== id), {id, text}];
        });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#1A5276"
        hidden={true}
        barStyle="light-content"
      />
      {/* <Header title="Products" /> */}
      <TextInput
        placeholder="Search Product..."
        style={styles.input}
        // onChangeText={onChange}
        // value={text}
      />

      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem
            item={item}
            deleteItem={deleteItem}
            editItem={editItem}
            isEditing={editStatus}
            editItemDetail={editItemDetail}
            saveEditItem={saveEditItem}
            handleEditChange={handleEditChange}
            itemChecked={itemChecked}
            checkedItems={checkedItems}
            nav={handleNavigate}
          />
        )}
      />
      <AddItem addItem={addItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
});

export default List;
