import React, { useMemo } from "react";
import { Button, StyleSheet, Text, Vibration, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UseLayoutEffect from "./UseLayoutEffect";
import ForwardRef from "./ForwardRef";

function Hooks() {

    // const [count, setCount] = React.useState(0);
    // const [input, setInput] = React.useState("");
    
    // const expensionValue = useMemo(()=>{
    //     console.log("Calculating.......");
    //     let total = 0;
    //     for(let i=0; i<1e7; i++){
    //         total+=i;
    //     }
    //     return total
    // },[count])
    return (
        <SafeAreaView style={styles.container}>
            {/* <UseLayoutEffect/> */}
            {/* <Text>Expensive Calculation:{expensionValue}</Text>
            <Button title="Increase Count" onPress={()=>setCount(count+1)}/>
            <Button title="Update Input" onPress={()=>setInput(input+'!')}/>
            <Text>Input: {input}</Text> */}

            <ForwardRef/>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
})


export default Hooks;
