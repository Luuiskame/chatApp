import {View, Text} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

import LoadingAnimation from '../assets/images/Animation - 1707353733408.json'

const Loading = ({size})=>{
    return(
        <View style={{height: size, aspectRatio: 1}}>
            <LottieView style={{flex:1}} source={LoadingAnimation} autoPlay loop/>
        </View>
    )
}

export default Loading