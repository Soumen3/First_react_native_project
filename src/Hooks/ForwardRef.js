import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

// Child Component 
const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();

    // Ecxpose methods to parent via ref 
    useImperativeHandle(ref, () =>({
        focus: ()=>{
            inputRef.current.focus()
        },
        clear: ()=>{
            inputRef.current.clear()
        },
    }));

    return (
        <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="Type here..."
        />
    )
})

// Parent component 
const Parent = ()=>{
    const CustomInputRef = useRef()

    return (
        <View style={styles.container}>
            <CustomInput ref={CustomInputRef}/>
            <View style={styles.buttons}>
                <Button title="Focus Input" onPress={()=>CustomInputRef.current.focus()}/>
                <Button title="Clear Input" onPress={()=>CustomInputRef.current.clear()}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 10,
    },
    input:{
        width: "90%",
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        marginBottom: 10,
        backgroundColor: 'gray',
        fontSize: 20,
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "90%",
    }
})


export default Parent;
