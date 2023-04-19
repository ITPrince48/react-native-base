import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native'
import { ScrollView, Box, Center, Image, Input, Icon, Text, useToast, HStack, Spinner } from 'native-base'
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { setAddress, setUserInfo } from '../../redux/actions/authActions'
import { useApi } from '../../redux/services'

const SignInScreen = ({ navigation }) => {
    const Api = useApi()
    const Toast = useToast()    
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSignIn = () => {
        if (email == '') {
            return Toast.show({ title: 'Email is required!', placement: 'bottom', status: 'error' })
        }
        if (password == '') {
            return Toast.show({ title: 'Password is required!', placement: 'bottom', status: 'error' })
        }
        setLoading(true)
        Api.SignIn({
            email,
            password
        }).then(({ data }) => {
            dispatch(setUserInfo(data.user))
            dispatch(setAddress(data.address))
            setLoading(false)
        }).catch(error => {
            setLoading(false)
            if (error.response && error.response.status === 400) {
                return Toast.show({ title: error.response.data, placement: 'bottom', status: 'error' })
            } else {
                console.log(`SignIn =>`, error)
            }
        })
    }
    return (
        <Box
            flex={1}
        >
           
        </Box>
    )
}

export default SignInScreen