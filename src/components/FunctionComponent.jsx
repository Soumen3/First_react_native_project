import { View, Text, StyleSheet, SafeAreaView, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";

const FunctionComponent = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        if (count == 5) {
            Alert.alert('Count reached');
        }
    },[count])

    return (
        <View style={styles.container}>
            <SafeAreaView/>
            <Text style={styles.text}>Count: {count}</Text>
            <View style={styles.buttonView}>
                <Button title="Decrement" onPress={() => setCount(count - 1)}/>
                <Button title="Increment" onPress={() => setCount(count + 1)}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    text:{
        fontSize: 30,
        color: 'white',
        backgroundColor: 'gray',
        width: '100%',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonView:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    }
})

export default FunctionComponent;
