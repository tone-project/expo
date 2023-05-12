import { Dimensions } from "react-native"

const MAKET_WIDTH = 360

const metrix = {
    HEIGHT: Dimensions.get('window').height,
    WIDTH: Dimensions.get('window').width,
}

const getMetrix = (maketValue, minValue) => {
        const difference = maketValue - minValue;
        if(metrix.WIDTH <= MAKET_WIDTH){
                return  (66 + 22 * (metrix.WIDTH)/360)
        }
}

if(metrix.WIDTH <= 320){
        metrix.MAX_WIDTH = Dimensions.get('window').width;
        metrix.PROBABILITY_BUTTONS = 77;
}

else if(metrix.WIDTH < 425){
        metrix.MAX_WIDTH = 420;
        metrix.PROBABILITY_BUTTONS = 88;
}

else if(metrix.WIDTH < 768){
        metrix.MAX_WIDTH = 700;
        metrix.PROBABILITY_BUTTONS = 88;
}

else if(metrix.WIDTH >= 1024){
        metrix.MAX_WIDTH = 900;
        metrix.PROBABILITY_BUTTONS = 88;
}

export default metrix;