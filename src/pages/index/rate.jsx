import Taro, { useState } from '@tarojs/taro'
import {AtRate,AtButton} from 'taro-ui'
import { View } from '@tarojs/components'
import image from './image/rate.jpg'


function Rate(){

    const [value,setValue] = useState(0)
    
    return (
        <View>
            <View className='.at-article__h1'>请帮助我们评分:</View>
            <View className='at-row at-row__justify--center'><AtRate value={value} onChange={(value)=>{setValue(value)}} max={5}></AtRate></View>
            <Image src={image} style={{height:'320px'}}></Image>
            <AtButton onClick={()=>{Taro.switchTab({url:'/pages/index/my'})}}>返回</AtButton>
        </View>
    )
}

export default Rate