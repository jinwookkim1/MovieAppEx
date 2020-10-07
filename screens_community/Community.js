import React , {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// 제목ㅈ둘을 갖기 위한 Screen 1개짜리 Navigator 제작
export default Community=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Community" component={Screen}></Stack.Screen>
        </Stack.Navigator>
    );
}

// 실제화면 컴포넌트
class Screen extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text>Community</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'}
});