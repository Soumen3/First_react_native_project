import React, { Component } from 'react'
import { Button, Text, View } from 'react-native';


// CLASS COMPONENT 
class LifecycleComponent extends Component {
    constructor(props) {
        super(props)
        this.state ={
            count:0,
        }
        console.log("Constructor: Component is created");
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps: Component will receive props");
        console.log("Get Derived State From Props: ", props, state);        
        return null;
    }
    componentDidMount(){
        console.log("ComponentDidMount: Component is mounted");
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(
            "shouldComponentUpdate: Should re-render?",
            nextState.count !== this.state.count,
            nextProps
        );
        
        return true;

    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate: Before update");
        console.log("Get Snapshot Before Update: ", prevProps, prevState);
        return null;
    }
    componentDidUpdate(nextProps, nextState){
        console.log("ComponentDidUpdate: After update");
    }
    componentWillUnmount(){
        console.log("ComponentWillUnmount: Component will unmount");
    }
    
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        console.log("Render: Component is rendered");
        return (
            <View>
                <Text style={{marginTop:100, marginLeft:100}}>Count: {this.state.count}</Text>
                <Button title="Increment" onPress={this.incrementCount} />
            </View>
        )
    }
}

export default LifecycleComponent