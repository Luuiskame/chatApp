import {View, Text} from 'react-native'
import React from 'react'
import '../global.css'
import { Slot } from 'expo-router'

export default function _layout(){
    return(
        <View className="flex-1">
            <Slot/>
        </View>
    )
}