import { useRef } from "react";
import { Animated, Easing } from "react-native";


export const useAnimation = () => {

    const animatedOpacity = useRef( new Animated.Value(0) ).current;
    const animatedTop = useRef( new Animated.Value(-100) ).current;

   
    const animate = (isFadeIn: boolean, isGoToBottom: boolean, duration = 500, elastic = 0) => {
        Animated.parallel([
            Animated.timing( animatedOpacity, {
                toValue: (isFadeIn ? 1 : 0 ),
                duration: duration,
                useNativeDriver: true,
            }),
            Animated.timing( animatedTop, {
                toValue: (isGoToBottom ? 0 : -100 ),
                duration: duration,
                useNativeDriver: true,
                easing: Easing.elastic(elastic)
            })
        ])
        .start( () => console.log('ended') );
    };

    return {
        animatedOpacity,
        animatedTop,
        animate
    }

}