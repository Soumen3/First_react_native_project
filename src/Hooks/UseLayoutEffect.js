import { View, Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import React, { useState, useRef, useLayoutEffect } from "react";

const UseLayoutEffect = () => {

    const [dime, setDime] = useState({});
    const viewRef = useRef();

    useLayoutEffect(()=>{
        if(viewRef.current){
            viewRef.current.measure((x, y, width, height, pageX, pageY) => {
                setDime({x, y, width, height, pageX, pageY});
            })
        }
    },[])
    
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.box} ref={viewRef} />
        <Text>Box Dimensions:</Text>
        <Text>{JSON.stringify(dime, null, 2)}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "lightblue",
    }, 
    box:{
        width: 100,
        height: 100,
        backgroundColor: "red",
    }
});

export default UseLayoutEffect;
