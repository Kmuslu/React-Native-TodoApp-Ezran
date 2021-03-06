import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  KeyboardAvoidingView
} from 'react-native';

import { main } from "./styles"
import { TodoInput, TodoCard } from "./components";


const App = () => {
  const [list, setList] = useState([])

  function addTodo(text) {
    const element = {
      id: list.length,
      todo: text,
      isDone: false
    }

    const newArray = [...list]
    newArray.push(element)

    setList(newArray);

  }

  function doneTodo(todoId) {
    const newArray = [...list];
    const todoIndex = newArray.findIndex(item=> item.id == todoId);

    newArray[todoIndex].isDone = !newArray[todoIndex].isDone;

    setList(newArray);
  }

  const renderTodo = ({ item }) => <TodoCard data={item} 
  onDone ={ () => doneTodo(item.id)}/>

  return (
    <SafeAreaView style={main.container} >
      <KeyboardAvoidingView style={main.container}
        behavior="padding" >

        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <Text style={main.todoCount}>{list.length}</Text>
        </View>
        <FlatList
        keyExtractor ={(item, index) => index.toString()}
          data={list}
          renderItem={renderTodo} 
          ListEmptyComponent={() => <Text style ={main.emptyComponent}>Nothing to do..</Text>}/>

        <TodoInput onTodoEnter={todoText => addTodo(todoText)}

        />

      </KeyboardAvoidingView>
    </SafeAreaView>

  );
};



export default App;
