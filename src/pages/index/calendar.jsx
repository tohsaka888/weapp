import Taro, { useState } from '@tarojs/taro'
import {AtCalendar,AtButton} from 'taro-ui'
import { View } from '@tarojs/components'


function Calendar(){

    return (
        <View>
            <AtCalendar />
            <AtButton onClick={()=>{Taro.switchTab({url:'/pages/index/my'})}}>返回</AtButton>
        </View>
    )
}

export default Calendar