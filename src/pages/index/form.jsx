import Taro, { useState } from '@tarojs/taro'
import {AtButton,AtForm,AtInput } from 'taro-ui'
import { View } from '@tarojs/components'

function Form(){

    return (
        <View>
            <AtForm>
            <AtInput
                name='value1'
                title='班级'
                type='text'
                placeholder='请输入班级'
            />
            <AtInput
                name='value2'
                title='姓名'
                type='text'
                placeholder='请输入姓名'
            />
            <AtInput
                name='value4'
                title='身份证'
                type='idcard'
                placeholder='身份证号码'
            />
            <AtInput
                name='value6'
                border={false}
                title='手机号码'
                type='phone'
                placeholder='手机号码'
            />
            </AtForm>
            <AtButton onClick={()=>{Taro.switchTab({url:'/pages/index/my'})}}>提交</AtButton>
        </View>
    )
}

export default Form