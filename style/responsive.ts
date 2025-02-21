import {scale,verticalScale,moderateScale} from "react-native-size-matters"
export const S = (size: number) => {
    return scale(size)
}
export const vS = (size: number) => {
    return verticalScale(size)
}
export const mRS = (size: number) => {
    return moderateScale(size)
}