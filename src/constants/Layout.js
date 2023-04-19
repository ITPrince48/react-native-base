import React, { Fragment } from 'react'
import { Dimensions } from 'react-native'
import { Circle, G, Path, Polygon, Rect, Defs } from 'react-native-svg'
const { width, height } = Dimensions.get('window')
/**
 * Global variable
 */
export const LAYOUT = {
	window: { width, height },
}