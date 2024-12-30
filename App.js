import { View, Text, StyleSheet, SafeAreaView} from "react-native";
import React from "react";
import LifecycleComponent from "./src/components/ClassComponent";
import FunctionComponent from "./src/components/FunctionComponent";
import BasicComponent from "./src/components/BasicComponent";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      
      <View style={styles.container}>
          {/* <LifecycleComponent/> */}
          {/* <FunctionComponent /> */}
          {/* <BasicComponent /> */}
          {/* <View style={styles.flex2}/> */}
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row'
        backgroundColor: 'white',
    },
    flex2: {
        flex:1,
        backgroundColor: 'green'
    }
})

export default App;
