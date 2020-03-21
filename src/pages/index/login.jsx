import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtForm, AtInput, AtButton,AtToast } from 'taro-ui'
import './index.scss'
import {setGlobalData} from "./global"

function Login() {
  const [user,setUser] = useState('')
  const [pass,setPass] = useState('')
  const [login,setLogin] = useState('success')
  const [open,setOpen] = useState(false)
  const [text,setText] = useState('登陆成功')

  const list = [{user:'admin',pass:'123456'},{user:'tohsaka888',pass:'123456'}]

  const SendMessage = () =>{
      for(var i=0;i<2;i++){
          if(list[i].user===user && list[i].pass===pass){
              wx.login({
                  success (res) {
                    if (res.code) {
                      //发起网络请求
                      wx.request({
                        url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
                        data: {
                          code: res.code,
                          user: user,
                          pass: pass
                        }
                      })
                      console.log('登陆成功')
                      if(res.errMsg === 'login:ok'){
                        setText('登陆成功')
                        setLogin('success')
                        setOpen(true)
                        setGlobalData("user",user)
                      }
                    } 
                  }
                })
              setTimeout(() => {
                Taro.switchTab({url:'/pages/index/my'})
                
              }, 2000);
          }else{
              setLogin('error')
              setOpen(true)
              setText('登录失败')
          }
      }
  }

    return (
        <View>
          <AtForm onSubmit={SendMessage}>
          <AtToast isOpened={open}  status={login} text={text} onClose={()=>{setOpen(false)}}></AtToast>
          <AtInput name='value1' type='text' placeholder='请输入用户名' title='用户名' adjustPosition value={user} onChange={(value)=>{setUser(value);return value}}></AtInput>
              <AtInput name='value2' type='password' placeholder='请输入密码' title='密码' adjustPosition value={pass} onChange={(value)=>{setPass(value);return value}}></AtInput>
              <AtButton formType='submit' circle>登录</AtButton>
          </AtForm>
        </View>
    )
}
export default Login