import {Dimensions, Platform, StyleSheet} from "react-native";

const main = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#303e45"
    },
    banner:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        alignItems:"center"
    },
    todoText:{
        color:"#ff9b31",
        fontSize:50,
        fontWeight:"bold",
    },
    todoCount:{
        color:"#ff9b31",
        fontSize:35,
        fontWeight:"bold",
    },
    emptyComponent:{
        color:"white",
        
    }
})

const todo_input = StyleSheet.create({
    inputContainer:{
        backgroundColor:"#e0e0e0",
        margin: 10,
        borderRadius:10,
        padding : Platform.OS == "ios" ? 10 : null,
    },
    container:{
        backgroundColor:"#a7b6bd",
        margin:10,
        borderRadius:5,
    },
    buttonContainer:{
        backgroundColor:"#4a636e",
        margin:10,
        width:Dimensions.get("window").width/3,
        alignSelf:"center",
        borderRadius:8,
        padding:10,
    },

    buttonText:{
       color:"white",
       fontWeight:"bold",
       textAlign:"center",
    },
    
})

const todo_card= StyleSheet.create({
    container:{
        backgroundColor:"#a7b6bd",
        margin:5,
        padding:8,
        borderRadius:8
    },
    text:{
        fontSize:18,
    }

})

export {main,todo_input,todo_card};