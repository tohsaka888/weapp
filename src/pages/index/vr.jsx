import Taro from '@tarojs/taro'
import {AtButton} from 'taro-ui'
import { View } from '@tarojs/components'
import img1 from './image/vr1.jpg'
import img2 from './image/vr2.jpg'


function Calendar(){

    return (
        <View>
            <View>请使用手机扫描二维码查看学校vr图</View>
            <Image src={img1}></Image>
            <Image src={img2}></Image>
            <AtButton onClick={()=>{Taro.switchTab({url:'/pages/index/index'})}}>返回</AtButton>
        </View>
    )
}

export default Calendar