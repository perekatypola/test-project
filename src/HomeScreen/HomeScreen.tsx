import React from "react";
import { View, Text } from 'react-native';
import type { FC } from "react";

const HomeScreen:FC = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View> 
    );
}

export default HomeScreen;