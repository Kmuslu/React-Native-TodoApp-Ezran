import React from "react";
import {View,Text, TouchableOpacity} from "react-native";

import {todo_card} from "../styles"
const TodoCard = (props)=>{
    return (
            <TouchableOpacity 
            style ={todo_card.container}
            onPress ={() => props.onDone(props.data.id)}>
                <Text style ={todo_card.text}> {props.data.todo} </Text>
            </TouchableOpacity>
    )
}

export {TodoCard};