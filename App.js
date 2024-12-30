import { View, Text, StyleSheet, SafeAreaView} from "react-native";
import React from "react";
import LifecycleComponent from "./src/components/ClassComponent";
import FunctionComponent from "./src/components/FunctionComponent";

const App = () => {
  return (
    <View style={styles.container}>
        {/* <LifecycleComponent/> */}
        <FunctionComponent />
        {/* <View style={styles.flex2}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row'
    },
    flex2: {
        flex:1,
        backgroundColor: 'green'
    }
})

export default App;
