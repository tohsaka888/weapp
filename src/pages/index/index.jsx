import Taro, { useState } from '@tarojs/taro'
import { View, Swiper, SwiperItem} from '@tarojs/components'
import {AtButton,AtCard,AtLoadMore,AtGrid,AtActionSheet, AtActionSheetItem,AtDrawer,AtAccordion,AtList,AtListItem,AtCurtain} from 'taro-ui'
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
import bz512 from './image/bz512.jpeg'
import bz513 from './image/bz513.jpeg'
import bz514 from './image/bz514.png'
import bz515 from './image/bz515.png'
import bz516 from './image/bz516.png'
import bz517 from './image/bz517.png'
import bz518 from './image/bz518.jpeg'
import bz519 from './image/bz519.png'
import bz520 from './image/bz520.png'

function Index() {

  const [status,setStatus] = useState('more')
  const [sheet,setSheet] = useState(false)
  const [color,setColor] = useState('white')
  const [show,setShow] = useState(false)
  const[accord,setAccord] = useState(false)
  const [accordd,setAccordd] = useState(false)
  const [open1,setOpen1] = useState(false)
  const [open2,setOpen2] = useState(false)
  const [open3,setOpen3] = useState(false)
  const [open4,setOpen4] = useState(false)
  const [open5,setOpen5] = useState(false)
  const [open6,setOpen6] = useState(false)
  const [open7,setOpen7] = useState(false)
  const [open8,setOpen8] = useState(false)
  const [open9,setOpen9] = useState(false)


  const setMore = () => {
    setStatus('loading')
    setTimeout(() => {
      setStatus('noMore')
    }, 2000);
  }
  const setPicture = (item,index) => {
    if(index === 0){
      setOpen1(true)
    }else if(index === 1){
      setOpen2(true)
    }else if(index === 2){
      setOpen3(true)
    }else if(index === 3){
      setOpen4(true)
    }else if(index === 4){
      setOpen5(true)
    }else if(index === 5){
      setOpen6(true)
    }else if(index === 6){
      setOpen7(true)
    }else if(index === 7){
      setOpen8(true)
    }else if(index === 8){
      setOpen9(true)
    }
  }
  return (
    <View style={{backgroundColor:color}}>
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
    <View className='.at-article__h2' style={{backgroundColor:'red',borderRadius:"5px",color:'white',margin:'0px',paddingLeft:'10px'}}>常州工学院报</View>
      <AtGrid data={[{image:bz520,value:'第520期'},{image:bz519,value:'第519期'},{image:bz518,value:'第518期'},
                     {image:bz517,value:'第517期'},{image:bz516,value:'第516期'},{image:bz515,value:'第515期'},
                     {image:bz514,value:'第514期'},{image:bz513,value:'第513期'},{image:bz512,value:'第512期'}]} onClick={setPicture}></AtGrid>
      <AtCurtain isOpened={open1} onClose={()=>{setOpen1(false)}} closeBtnPosition='top-right'><Image src={bz520} style='width:100%'></Image></AtCurtain>
      <AtCurtain isOpened={open2} onClose={()=>{setOpen2(false)}} closeBtnPosition='top-right'><Image src={bz519} style='width:100%'></Image></AtCurtain>
      <AtCurtain isOpened={open3} onClose={()=>{setOpen3(false)}} closeBtnPosition='top-right'><Image src={bz518} style='width:100%'></Image></AtCurtain>
      <AtCurtain isOpened={open4} onClose={()=>{setOpen4(false)}} closeBtnPosition='top-right'><Image src={bz517} style='width:100%'></Image></AtCurtain>
      <AtCurtain isOpened={open5} onClose={()=>{setOpen5(false)}} closeBtnPosition='top-right'><Image src={bz516} style='width:100%'></Image></AtCurtain>
      <AtCurtain isOpened={open6} onClose={()=>{setOpen6(false)}} closeBtnPosition='top-right'><Image src={bz515} style='width:100%'></Image></AtCurtain>
      <AtCurtain isOpened={open7} onClose={()=>{setOpen7(false)}} closeBtnPosition='top-right'><Image src={bz514} style='width:100%'></Image></AtCurtain>
      <AtCurtain isOpened={open8} onClose={()=>{setOpen8(false)}} closeBtnPosition='top-right'><Image src={bz513} style='width:100%'></Image></AtCurtain>
      <AtCurtain isOpened={open9} onClose={()=>{setOpen9(false)}} closeBtnPosition='top-right'><Image src={bz512} style='width:100%'></Image></AtCurtain>
    <View className='.at-article__h2' style={{backgroundColor:'red',borderRadius:"5px",color:'white',margin:'0px',paddingLeft:'10px'}}>2020年常州工学院高层次人才招聘启示</View>
      <View style={{height:'20px'}}></View>
      <AtCard title='高端人才'>院士、“千人计划”、“长江学者”、“国家杰出青年基金”获得者等有关学科领域的杰出人才，或具备特殊专业技能的应用型拔尖人才。学校另设“杰出人才”、“延陵学者”、“青年英才”等高端人才岗位。</AtCard>
      <View style={{height:'20px'}}></View>
      <AtCard title='学科带头人'>具备深厚的学术造诣、卓越的学术水平和科研创新能力，领导组织能力强，在本学科有重大突出的科研、教学等业绩成果。</AtCard>
      <View style={{height:'20px'}}></View>
      <AtCard title='教授'> 国内高水平大学教授，海外著名大学或研究机构相当层次的人员，原则上具有博士学位，在本学科领域有突出的科研、教学等业绩成果。年龄原则上不超过45周岁。</AtCard>
      <View style={{height:'20px'}}></View>
      <AtCard title='博士'>以高端人才或学科带头人为团队负责人，其他团队成员符合学校高层次人才引进要求，团队成员不少于3人；学科团队的科研方向符合学校学科建设需求，研究水平达到省内领先。</AtCard>
      <View style={{height:'20px'}}></View>
      <AtCard title='学科团队'>以高端人才或学科带头人为团队负责人，其他团队成员符合学校高层次人才引进要求，团队成员不少于3人；学科团队的科研方向符合学校学科建设需求，研究水平达到省内领先。</AtCard>
      <View style={{height:'20px'}}></View>
    <View className='.at-article__h2' style={{backgroundColor:'red',borderRadius:"5px",color:'white',margin:'0px',paddingLeft:'10px'}}>更多功能</View>
    <AtButton onClick={()=>{setSheet(true)}} customStyle={{marginTop:'20px'}}>设置背景颜色</AtButton>
    <AtActionSheet isOpened={sheet} cancelText='取消' title='设置背景颜色' onCancel={()=>{setSheet(false)}} onClose={()=>{setSheet(false)}}>
      <AtActionSheetItem onClick={()=>{setColor('white'),setSheet(false)}}>白色</AtActionSheetItem>
      <AtActionSheetItem onClick={()=>{setColor('yellow'),setSheet(false)}}>黄色</AtActionSheetItem>
      <AtActionSheetItem onClick={()=>{setColor('blue'),setSheet(false)}}>蓝色</AtActionSheetItem>
      <AtActionSheetItem onClick={()=>{setColor('green'),setSheet(false)}}>绿色</AtActionSheetItem>
    </AtActionSheet>
    <AtButton onClick={()=>{setShow(true)}}>开启抽屉</AtButton>
    <AtDrawer mask show={show} onClose={()=>{setShow(false)}} >
      <View className='drawer-item'>
        <AtAccordion title='美丽常工' open={accord} onClick={()=>{if(accord===true){setAccord(false)}else{setAccord(true)}}}>
          <AtList>
            <AtListItem title='VR常工' arrow='right' customStyle={{marginRight:'10px'}} onClick={()=>{Taro.redirectTo({url:'/pages/index/vr'})}}></AtListItem>
          </AtList>
        </AtAccordion>
        <AtAccordion title='院系部门' open={accordd} onClick={()=>{if(accordd===true){setAccordd(false)}else{setAccordd(true)}}}>
          <AtList>
            <AtListItem title='航空与机械工程学院' arrow='right' customStyle={{marginRight:'10px'}}></AtListItem>
            <AtListItem title='汽车工程学院' arrow='right' customStyle={{marginRight:'10px'}}></AtListItem>
            <AtListItem title='计算机信息工程学院' arrow='right' customStyle={{marginRight:'10px'}}></AtListItem>
            <AtListItem title='电气信息学院' arrow='right' customStyle={{marginRight:'10px'}}></AtListItem>
            <AtListItem title='理学院' arrow='right' customStyle={{marginRight:'10px'}}></AtListItem>
            <AtListItem title='土木工程学院' arrow='right' customStyle={{marginRight:'10px'}}></AtListItem>
            <AtListItem title='马克思主义学院' arrow='right' customStyle={{marginRight:'10px'}}></AtListItem>
            <AtListItem title='化工与材料学院' arrow='right' customStyle={{marginRight:'10px'}}></AtListItem>
          </AtList>
        </AtAccordion>
      </View>
    </AtDrawer>
    </View>
  )
}

export default Index
