import Taro, { useState } from '@tarojs/taro'
import { View, Icon ,Swiper, SwiperItem} from '@tarojs/components'
import {AtButton,AtTabBar,AtIcon,AtCard,AtLoadMore,AtGrid} from 'taro-ui'
import './index.scss'
import logo from './image/logo.jpg'
import h1 from './image/h1.jpeg'
import h2 from './image/h2.jpeg'
import h3 from './image/h3.jpeg'
import h4 from './image/h4.jpg'
import h5 from './image/h5.jpg'
import h6 from './image/h6.jpg'
import h7 from './image/h7.jpg'
import h8 from './image/h8.jpg'
import b1 from './image/b1.jpg'
import b2 from './image/b2.jpg'
import b3 from './image/b3.jpg'

function Index() {

  const [status,setStatus] = useState('more')

  const setMore = () => {
    setStatus('loading')
    setTimeout(() => {
      setStatus('noMore')
    }, 2000);
  }

  return (
    <View>
      <View className='at-row at-row__justify--center' style={{marginBottom:'20px'}}> <Image src={logo} style={{height:'40px',width:'130px'}}></Image></View>
      <View className='.at-article__h2' style={{backgroundColor:'red',borderRadius:"5px",color:'white',margin:'0px',paddingLeft:'10px'}}>风采展示</View>
      <Swiper indicatorDots indicatorColor indicatorActiveColor autoplay interval={3000} circular style={{marginTop:'20px',height:'90px',marginBottom:'20px'}}>
        <SwiperItem><Image src={h1} mode="aspectFill" style={{height:'100%',width:'100%'}}></Image></SwiperItem>
        <SwiperItem><Image src={h2} mode="aspectFill" style={{height:'100%',width:'100%'}}></Image></SwiperItem>
        <SwiperItem><Image src={h3} mode="aspectFill" style={{height:'100%',width:'100%'}}></Image></SwiperItem>
        <SwiperItem><Image src={h4} mode="aspectFill" style={{height:'100%',width:'100%'}}></Image></SwiperItem>
        <SwiperItem><Image src={h5} mode="aspectFill" style={{height:'100%',width:'100%'}}></Image></SwiperItem>
        <SwiperItem><Image src={h6} mode="aspectFill" style={{height:'100%',width:'100%'}}></Image></SwiperItem>
        <SwiperItem><Image src={h7} mode="aspectFill" style={{height:'100%',width:'100%'}}></Image></SwiperItem>
        <SwiperItem><Image src={h8} mode="aspectFill" style={{height:'100%',width:'100%'}}></Image></SwiperItem>
      </Swiper>
      <View className='.at-article__h2' style={{backgroundColor:'red',borderRadius:"5px",color:'white',margin:'0px',paddingLeft:'10px'}}>常工要闻</View>
      <AtGrid data={[{image:b1,value:'疫情防控'},{image:b2,value:'指导交流'},{image:b3,value:'科学技术奖'}]}></AtGrid>
      <AtCard
      title='学校概况'
    >
      常州工学院是一所全日制普通本科院校，坐落于经济发达、文教昌盛、交通便捷、美丽富饶的国家历史文化名城——常州，其前身为创建于1978年的常州市七·二一工业大学。1980年，经江苏省人民政府批准，建立常州职业大学。1982年，经国家教育部批准，建立常州工业技术学院。2000年，常州工业技术学院、常州市机械冶金职工大学合并组建升格为本科层次的常州工学院。2003年，传承常州师范教育百年文脉的常州师范专科学校（筹）成建制并入常州工学院。历经40年的建设和发展，学校现已成为一所以工科为主，工学、理学、管理学、经济学、文学、教育学、艺术学7大学科门类协调发展、综合性较强的多科性地方高等学校。
    </AtCard>
    <AtLoadMore status={status} onClick={setMore}></AtLoadMore>
    </View>
  )
}

export default Index
