import React from "react";
import { View, Text, } from "react-native";


const HelloWorldApp = () => {

    return (
        <View style={{
            fontSize: 25,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }} >

            <Text>Hello, World!</Text>


        </View >


    );
};


export default HelloWorldApp;