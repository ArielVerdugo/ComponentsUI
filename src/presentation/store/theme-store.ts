import { ThemeColors, colors, darkColors, lightColors } from '../../config/theme/theme';
import { create } from "zustand";

type ThemeColor = 'light' | 'dark';


export interface ThemeState {
    currentTheme: ThemeColor;
    colors: ThemeColors;

    changeTheme: (currentTheme: ThemeColor, colors: ThemeColors) => void;
}

export const useThemeStore = create<ThemeState>()( (set,get) => ({
    currentTheme: 'light',
    colors: lightColors,
    changeTheme(currentTheme, colors) {
        set({
            currentTheme,
            colors
        })
    },
}) )