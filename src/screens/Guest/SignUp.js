import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TouchableOpacity } from 'react-native'
import { ScrollView, Box, Center, Image, Input, Icon, Text, useToast, HStack, Spinner } from 'native-base'
import { FontAwesome, MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons'
import { BarPasswordStrengthDisplay } from 'react-native-password-strength-meter'
import { setAddress, setUserInfo } from '../../redux/actions/authActions'
import { COLOR, Images, LAYOUT } from '../../constants'
import { useApi } from '../../redux/services'

const SignInScreen = ({ navigation }) => {
    const Api = useApi()
    const Toast = useToast()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSignUp = async () => {
        if (email == "") {
            return Toast.show({ title: 'Email is required!', placement: 'bottom', status: 'error' })
        }
        if (password == "") {
            return Toast.show({ title: 'Password is required!', placement: 'bottom', status: 'error' })
        }
        if (cPassword == "") {
            return Toast.show({ title: 'Confirm Password is required!', placement: 'bottom', status: 'error' })
        }
        if (cPassword !== password) {
            return Toast.show({ title: 'Confirm Password is not match!', placement: 'bottom', status: 'error' })
        }
        if (username == "") {
            return Toast.show({ title: 'User Name is required!', placement: 'bottom', status: 'error' })
        }
        setLoading(true)
        Api.SignUp({
            email,
            username,
            firstname,
            lastname,
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
                console.log(`SignUp =>`, error)
            }
        })
    }


    return (
        <Box
            flex={1}
            bg={{ linearGradient: { colors: COLOR.linearGradientColor } }}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Center p={5}>
                    <Image size='sm' alignSelf='center' alt='Logo' mt={5} source={Images.Logos} />
                    <Text fontSize='xl' w='100%' bold mt={5} color={COLOR.white}>Create your account</Text>
                    <Input
                        p={1}
                        mt={5}
                        w='100%'
                        size='sm'
                        type='text'
                        variant='underlined'
                        placeholder='EMAIL'
                        autoCapitalize={'none'}
                        value={email}
                        onChangeText={setEmail}
                        color={COLOR.white}
                        borderBottomColor={COLOR.inputBorberColor}
                        placeholderTextColor={COLOR.inputLabelColor}
                        InputLeftElement={
                            <Icon as={<FontAwesome name='envelope-o' />} mr={1} size='xs' color={COLOR.inputIconColor} />
                        }
                    />
                    <Input
                        p={1}
                        mt={5}
                        w='100%'
                        size='sm'
                        type='text'
                        variant='underlined'
                        placeholder='USER NAME'
                        autoCapitalize={'none'}
                        value={username}
                        onChangeText={setUserName}
                        color={COLOR.white}
                        borderBottomColor={COLOR.inputBorberColor}
                        placeholderTextColor={COLOR.inputLabelColor}
                        InputLeftElement={
                            <Icon as={<Feather name='user' />} mr={1} size='xs' color={COLOR.inputIconColor} />
                        }
                    />
                    <Input
                        p={1}
                        mt={5}
                        w='100%'
                        size='sm'
                        type='text'
                        variant='underlined'
                        placeholder='FIRST NAME'
                        autoCapitalize={'none'}
                        value={firstname}
                        onChangeText={setFirstName}
                        color={COLOR.white}
                        borderBottomColor={COLOR.inputBorberColor}
                        placeholderTextColor={COLOR.inputLabelColor}
                        InputLeftElement={
                            <Icon as={<Feather name='user' />} mr={1} size='xs' color={COLOR.inputIconColor} />
                        }
                    />
                    <Input
                        p={1}
                        mt={5}
                        w='100%'
                        size='sm'
                        type='text'
                        variant='underlined'
                        placeholder='LAST NAME'
                        autoCapitalize={'none'}
                        value={lastname}
                        onChangeText={setLastName}
                        color={COLOR.white}
                        borderBottomColor={COLOR.inputBorberColor}
                        placeholderTextColor={COLOR.inputLabelColor}
                        InputLeftElement={
                            <Icon as={<Feather name='user' />} mr={1} size='xs' color={COLOR.inputIconColor} />
                        }
                    />
                    <Input
                        p={1}
                        mt={5}
                        w='100%'
                        size='sm'
                        type='password'
                        variant='underlined'
                        placeholder='PASSWORD'
                        autoCapitalize={'none'}
                        value={password}
                        onChangeText={setPassword}
                        color={COLOR.white}
                        borderBottomColor={COLOR.inputBorberColor}
                        placeholderTextColor={COLOR.inputLabelColor}
                        InputLeftElement={
                            <Icon as={<MaterialCommunityIcons name='lock' />} mr={1} size='xs' color={COLOR.inputIconColor} />
                        }
                    />
                    <HStack justifyContent='space-between' w='100%'>
                        <Text fontSize='sm' color={COLOR.grey}>Password strength</Text>
                        <BarPasswordStrengthDisplay
                            password={password}
                            width={LAYOUT.window.width * 0.4}
                            barColor='transparent'
                            scoreLimit={1000}
                            levels={LAYOUT.levels}
                        />
                    </HStack>
                    <Input
                        p={1}
                        mt={5}
                        w='100%'
                        size='sm'
                        type='password'
                        variant='underlined'
                        placeholder='CONFIRM PASSWORD'
                        autoCapitalize={'none'}
                        value={cPassword}
                        onChangeText={setCPassword}
                        color={COLOR.white}
                        borderBottomColor={COLOR.inputBorberColor}
                        placeholderTextColor={COLOR.inputLabelColor}
                        InputLeftElement={
                            <Icon as={<MaterialCommunityIcons name='lock' />} mr={1} size='xs' color={COLOR.inputIconColor} />
                        }
                    />
                    <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={handleSignUp} disabled={loading}>
                        <Box
                            bg={{
                                linearGradient: {
                                    colors: COLOR.buttonGColor,
                                },
                            }}
                            px={5}
                            py={2}
                            mt={4}
                            borderRadius={5}
                            flexDirection='row'
                            alignItems='center'
                        >
                            <Text fontSize='sm' bold color={COLOR.white}>SIGN UP</Text>
                            {
                                loading ?
                                    <Spinner size="sm" ml={1} color={COLOR.white} /> :
                                    <Icon as={<AntDesign name='arrowright' />} ml={1} size='xs' color={COLOR.white} />
                            }
                        </Box>
                    </TouchableOpacity>
                    <Text mt={1} fontSize='xs' color={COLOR.grey}>Or Sign up with</Text>
                    <HStack space={5} mt={5}>
                        <TouchableOpacity>
                            <Box
                                py={2}
                                px={10}
                                borderRadius={7}
                                bg={COLOR.primary}
                            >
                                <Image size={5} source={Images.Google} alt='icon' resizeMode='contain' />
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Box
                                py={2}
                                px={10}
                                borderRadius={7}
                                bg={COLOR.primary}
                            >
                                <Image size={5} source={Images.Facebook} alt='icon' resizeMode='contain' />
                            </Box>
                        </TouchableOpacity>
                    </HStack>
                    <HStack space={3} mt={5} mb={5} alignItems='center'>
                        <Text fontSize='xs' color={COLOR.grey}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.push('SignInScreen')}>
                            <Text bold fontSize='xs' color={COLOR.textColor2}>Sign in</Text>
                        </TouchableOpacity>
                    </HStack>
                </Center>
            </ScrollView>
        </Box>
    )
}

export default SignInScreen