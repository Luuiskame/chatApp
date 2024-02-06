import {View, Text, ActivityIndicator} from 'react-native'
import React from 'react'

const startPage = ()=>{
    return(
        <View className='flex-1 justify-center items-center'>
            <ActivityIndicator size="large" color="gray"/>
        </View>
    )
}

export default startPage