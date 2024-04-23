import { View } from "react-native"
import { Title } from "../../components/ui/Title"
import { Button } from "../../components/ui/Button"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { useThemeStore } from "../../store/theme-store"
import { darkColors, lightColors } from "../../../config/theme/theme"


export const ChangeThemeScreen  = () => {

    const { setTheme, currentTheme, colors } = useContext( ThemeContext );
    const changeTheme = useThemeStore( state => state.changeTheme )

    return (
        <View style={{backgroundColor: colors.background, flex: 1}}>
            <View style={{margin: 10}}>
            <Title text={`Cambiar tema: ${currentTheme}`} safe/>
            <Button
                text="Light"
                onPress={ () => {
                    setTheme('light');
                    changeTheme( 'light', lightColors )
                }}
            />
            
            <View style={{ height: 10 }}/>

            <Button
                text="Dark"
                onPress={ () => {
                    setTheme('dark');
                    changeTheme( 'dark', darkColors )
                }}
            />
        </View>
        </View>
        
    )
}