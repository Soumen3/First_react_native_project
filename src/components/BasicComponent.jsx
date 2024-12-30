import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { imageUri } from "./dummyData";


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScale = Dimensions.get('window').fontScale;
const scale = Dimensions.get('window').scale;

// console.log(screenHeight);
// console.log(screenWidth);
// console.log(fontScale);
// console.log(scale);

const BasicComponent = () => {

    const insets = useSafeAreaInsets();
    // console.log(insets.top);
    // console.log(insets.bottom);
    // console.log(insets.left);
    // console.log(insets.right);
    
    const onLayout = event => {
        console.log('onLayout event')
        console.log(event.nativeEvent)
    }

    return (
        <View style={styles.container}
            onLayout={onLayout}
        >
            <Text>BasicComponent</Text>
            <TouchableOpacity 
                onPress={() => alert('Hello')}
                style={styles.button}
            >
                <Text
                    style={{color: 'white'}}
                >Click me</Text>
            </TouchableOpacity>
            <Image source={{uri:imageUri}} style={styles.img}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'lightblue'
    },
    button:{
        color: 'white',
        backgroundColor: "black",
        justifyContent: 'center',
        alignItems:"center",
        padding:20,
        borderRadius:20,
        alignSelf:"center",
    },
    img:{
        width:240,
        height:140,
        marginTop:20,
        alignSelf:"center"
    }
})

export default BasicComponent;
