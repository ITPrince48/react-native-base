import React, { Fragment, useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Box, Stack, Icon, ScrollView, HStack, Text } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SliderBox } from 'react-native-image-slider-box'
import normalize from 'react-native-normalize'
import { Footers, Headers, Loading, MainCurrency, MarketsItem } from '../../../components'
import { COLOR, Images, LAYOUT } from '../../../constants'
import { useApi } from '../../../redux/services'

const imagesData = [
    Images.Slider1,
    Images.Slider2,
    Images.Slider3,
    Images.Slider4,
    Images.Slider5,
]

const HomeScreen = ({ navigation }) => {
    const Api = useApi()
    const [loading, setLoading] = useState(false)
    const [exchangeInfo, setExchangeInfo] = useState([])

    const LoadExchangeInfo = () => {
        setLoading(true)
        Api.LoadExchangeInfo().then(({ data }) => {
            setLoading(false)
            setExchangeInfo(data.data)
        }).catch(error => {
            setLoading(false)
            console.log(`LoadExchangeInfo`, error)
        })
    }

    useEffect(() => {
        LoadExchangeInfo()
    }, [navigation])

    return (
        <Box flex={1} bg={COLOR.primary} w='100%'>
            {loading && <Loading />}
            <Headers
                title={'Home'}
                left={
                    <TouchableOpacity onPress={navigation.openDrawer}>
                        <Icon as={<MaterialCommunityIcons name='menu' />} size='sm' color={COLOR.white} />
                    </TouchableOpacity>
                }
            />
            <SliderBox
                disableOnPress={true}
                resizeMode='contain'
                ImageComponentStyle={{ width: '97%', height: LAYOUT.window.width * 0.36, marginTop: normalize(10) }}
                images={imagesData}
                autoplay
                paginationBoxStyle={{
                    position: 'absolute',
                    bottom: 0,
                    padding: 0,
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center'
                }}
                dotStyle={{
                    width: 18,
                    height: 4,
                    borderRadius: 0,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 0,
                    backgroundColor: '#cccccc'
                }}
                imageLoadingColor='transparent'
            />
            {
                exchangeInfo && exchangeInfo.length ? (
                    <Fragment>
                        <HStack py={2} px={2} mt={1} justifyContent='space-around' bg={COLOR.base}>
                            <MainCurrency data={exchangeInfo.find(e => e.id == 48)} />
                            <MainCurrency data={exchangeInfo.find(e => e.id == 561)} />
                            <MainCurrency data={exchangeInfo.find(e => e.id == 39)} />
                        </HStack>
                        <Stack flex={1}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <Stack px={3} my={2}>
                                    <Text fontSize='md' mb={1} bold color={COLOR.white}>Recommended</Text>
                                    <MarketsItem data={exchangeInfo.find(e => e.id == 519)} active={'ALL'} />
                                    <MarketsItem data={exchangeInfo.find(e => e.id == 537)} active={'ALL'} />
                                    <MarketsItem data={exchangeInfo.find(e => e.id == 547)} active={'ALL'} />
                                    <MarketsItem data={exchangeInfo.find(e => e.id == 540)} active={'ALL'} />
                                    <MarketsItem data={exchangeInfo.find(e => e.id == 431)} active={'ALL'} />
                                    <MarketsItem data={exchangeInfo.find(e => e.id == 66)} active={'ALL'} />
                                    <MarketsItem data={exchangeInfo.find(e => e.id == 69)} active={'ALL'} />
                                    <MarketsItem data={exchangeInfo.find(e => e.id == 85)} active={'ALL'} />
                                    <MarketsItem data={exchangeInfo.find(e => e.id == 56)} active={'ALL'} />
                                </Stack>
                            </ScrollView>
                        </Stack>
                    </Fragment>
                ) : <Stack flex={1} />
            }
            <Footers routeName={`HomeScreen`} />
        </Box>
    )
}

export default HomeScreen