import Taro, { useState,useEffect } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import {AtButton,AtTabBar,AtIcon,AtAvatar,AtNoticebar,AtModal, AtModalHeader, AtModalContent, AtModalAction,AtList, AtListItem,AtToast} from 'taro-ui'
import './index.scss'
import img1 from './image/2.jpg'
import bg1 from './image/bg.jpg'
import { getGlobalData } from './global'

function My(){

    const [title,setTitle] = useState('您还未登录，请先登录~')
    const [login,setLogin] = useState('登录')
    const [open,setOpen] = useState(false)
    const [toast,setToast] = useState(false)
    const setClick = () => {
        if(login === '登录'){
            Taro.redirectTo({url:'/pages/index/login'})
        }else{
            setOpen(true)
        }
    }
    const setList1 = () => {
        if(login === '登录'){
            setToast(true)
            setTimeout(() => {
                setToast(false)
            }, 1000);
        }else{
            Taro.redirectTo({url:'/pages/index/calendar'})
        }
    }
    const setList2 = () => {
        if(login === '登录'){
            setToast(true)
            setTimeout(() => {
                setToast(false)
            }, 1000);
        }else{
            Taro.redirectTo({url:'/pages/index/day'})
        }
    }
    const setList3 = () => {
        if(login === '登录'){
            setToast(true)
            setTimeout(() => {
                setToast(false)
            }, 1000);
        }else{
            Taro.redirectTo({url:'/pages/index/form'})
        }
    }
    const setList4 = () => {
        if(login === '登录'){
            setToast(true)
            setTimeout(() => {
                setToast(false)
            }, 1000);
        }else{
            Taro.redirectTo({url:'/pages/index/rate'})
        }
    }
    useEffect(()=>{
        if(getGlobalData('user')!= undefined){
            setTitle('欢迎,'+getGlobalData('user')+'!')
            setLogin('退出登录')
        }
    },[])
    
    return (
        <View className='my' >
            <AtNoticebar icon='volume-plus' moreText='查看详情' close>
            请不要轻易将自己的账号密码告诉陌生人！
            </AtNoticebar>
            <Image src={bg1} className='background'></Image>
            <View style={{height:'40px'}}></View>
            <View className='at-row at-row__justify--center'><AtAvatar image={img1} circle size='large'></AtAvatar></View>
            <View className='at-row at-row__justify--center'><View className='at-article__h1' style={{color:'white'}}>{title}</View></View>
            <AtList>
                <AtListItem title='查看日历' onClick={setList1} arrow='right'></AtListItem>
                <AtListItem title='查看日程' onClick={setList2} arrow='right'></AtListItem>
                <AtListItem title='实名认证' onClick={setList3} arrow='right'></AtListItem>
                <AtListItem title='评价我们' onClick={setList4} arrow='right'></AtListItem>
            </AtList>
            <AtButton type='primary' onClick={setClick} customStyle={{marginTop:'20px'}} circle>{login}</AtButton>
            <AtModal isOpened={open} closeOnClickOverlay>
            <AtModalHeader>确定要登出账号吗？</AtModalHeader>
            <AtModalContent>
                登出账号后，下次进入时，您需要重新登录
                        确定要登出账号吗？
            </AtModalContent>
            <AtModalAction> <Button onClick={()=>{setOpen(false)}}>取消</Button> <Button onClick={()=>{setTitle('您还未登录，请先登录~'),setLogin('登录'),setOpen(false)}}>确定</Button> </AtModalAction>
            </AtModal>
            <AtToast isOpened={toast} text="请先登录" icon='close'></AtToast>
        </View>
    )
}

export default My