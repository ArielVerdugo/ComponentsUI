import { Animated, Easing, Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../../config/theme/theme"
import { useAnimation } from "../../hooks/useAnimation"
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";


export const Animation101Screen = () => {

    const {animatedOpacity,animatedTop,animate} = useAnimation();
    const { colors } = useContext( ThemeContext );


    const animedStyle = {
        transform: [
          {
            translateY: animatedTop,
          },
        ],
    };

    return (
        <View style={ {...styles.container, backgroundColor: colors.background} }>

            <Animated.View style={[ 
                styles.purpleBox,
                {
                    opacity: animatedOpacity,
                },
                animedStyle
            ]}/>

            <Pressable onPress={ () => animate(true, true, 700, 2)  } style={{ marginTop: 10 }}>
                <Text style={{color: colors.text}}>FadeIn</Text>
            </Pressable>

            <Pressable onPress={ () => animate(false, false, 700) } style={{ marginTop: 10 }}>
                <Text style={{color: colors.text}}>FadeOut</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
    }
})