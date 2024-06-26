import { Animated, PanResponder, StyleSheet, View } from "react-native"
import { useRef } from "react";
import { useThemeStore } from "../../store/theme-store";

export const Animation102Screen = () => {

    const colors = useThemeStore( state => state.colors);
    console.log(colors);

    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
          null,
          {
            dx: pan.x, // x,y are Animated.Value
            dy: pan.y,
          },
        ]),
        onPanResponderRelease: () => {
          Animated.spring(
            pan, // Auto-multiplexed
            {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
          ).start();
        },
      });

    return (
        <View style={{...styles.container, backgroundColor: colors.background }}>
        <Animated.View
            {...panResponder.panHandlers}
            style={[pan.getLayout(), styles.box]}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      backgroundColor: '#61dafb',
      width: 80,
      height: 80,
      borderRadius: 4,
    },
});