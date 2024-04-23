import { Text, View } from "react-native"
import { AirplaneIcon } from "../../icons/Icons"
import { globalStyles, colors } from '../../../config/theme/theme';
import { ScrollView } from "react-native-gesture-handler";
import { Title } from "../../components/ui/Title";
import { MenuItem } from "../../components/ui/MenuItem";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CustomView } from "../../components/ui/CustomView";

const animationItems = [
    {
      name: 'Animation 101',
      icon: 'cube-outline',
      component: 'Animation101Screen',
    },
    {
      name: 'Animation 102',
      icon: 'albums-outline',
      component: 'Animation102Screen',
    },
]

export const menuItems = [
    {
      name: 'Pull to refresh',
      icon: 'refresh-outline',
      component: 'PullToRefreshScreen',
    },
    {
      name: 'Section List',
      icon: 'list-outline',
      component: 'CustomSectionListScreen',
    },
    {
      name: 'Modal',
      icon: 'copy-outline',
      component: 'ModalScreen',
    },
    {
      name: 'InfiniteScroll',
      icon: 'download-outline',
      component: 'InfiniteScrollScreen',
    },
    {
      name: 'Slides',
      icon: 'flower-outline',
      component: 'SlidesScreen',
    },
    {
      name: 'Themes',
      icon: 'flask-outline',
      component: 'ChangeThemeScreen',
    }
];

export const uiMenuItems = [
    {
      name: 'Switches',
      icon: 'toggle-outline',
      component: 'SwitchScreen',
    },
    {
      name: 'Alerts',
      icon: 'alert-circle-outline',
      component: 'AlertScreen',
    },
    {
      name: 'TextInputs',
      icon: 'document-text-outline',
      component: 'TextInputScreen',
    }
]


export const HomeScreen = () => {

  const {colors} = useContext( ThemeContext );

    return (
        <CustomView margin>
          <ScrollView>
                    <Title text='Opciones del menú' safe />
                    {
                        animationItems.map( (item, index) => (
                            <MenuItem 
                                isFirst={ index === 0}
                                isLast={ index === animationItems.length -1 }
                                key={ item.component } 
                                {...item} 
                                />
                        ))
                    }

                    <View style={{ marginTop: 30}}/>
                    {
                        menuItems.map( (item, index) => (
                            <MenuItem 
                                isFirst={ index === 0}
                                isLast={ index === menuItems.length -1 }
                                key={ item.component } {...item} 
                                />
                        ))
                    }

                    <View style={{ marginTop: 30}}/>
                    {
                        uiMenuItems.map( (item, index) => (
                            <MenuItem 
                                isFirst={ index === 0}
                                isLast={ index === uiMenuItems.length -1 }
                                key={ item.component } {...item} 
                                />
                        ))
                    }
                </ScrollView>
        </CustomView>
                
          
    )
}