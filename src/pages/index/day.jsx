import Taro, { useState } from '@tarojs/taro'
import {AtButton,AtTimeline } from 'taro-ui'
import { View } from '@tarojs/components'

function Day(){

    return (
        <View>
            <AtTimeline 
            items={[
                { title: '刷牙洗脸', icon: 'check-circle' }, 
                { title: '吃早餐', icon: 'clock' }, 
                { title: '上班', icon: 'clock' }, 
                { title: '睡觉', icon: 'clock' }
            ]}
            >
            </AtTimeline>
            <AtButton onClick={()=>{Taro.switchTab({url:'/pages/index/my'})}}>返回</AtButton>
        </View>
    )
}

export default Day