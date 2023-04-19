import React from 'react'
import { useSelector } from 'react-redux'
import { setNavigator } from '../redux/services'
import GuestNavigation from './Guest'
import LoggedNavigation from './Logged'

const navigation = () => {
    const { user } = useSelector((store) => store.auth)
    if (user) {
        return (
            <LoggedNavigation ref={ref => setNavigator(ref)} />
        )
    } else {
        return <GuestNavigation />
    }
}

export default navigation