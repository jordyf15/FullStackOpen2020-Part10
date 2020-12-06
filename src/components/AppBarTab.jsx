import React from 'react';
import {Text, StyleSheet,View, TouchableOpacity} from 'react-native';
import theme from '../theme';

const styles=StyleSheet.create({
    text:{
        color: theme.colors.tabLabel,
    }
});

const AppBarTab=({tabLabel})=>{
    return(
        <TouchableOpacity activeOpacity={0.5}>
            <View>
                <Text style={styles.text}>{tabLabel}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default AppBarTab;