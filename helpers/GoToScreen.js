import {Navigation} from 'react-native-navigation';
import AsyncStorage from "@react-native-community/async-storage";

export const goToScreen = (that, screenName, itemId) => {
    Navigation.mergeOptions('drawerId', {
        sideMenu: {
            left: {
                visible: false,
            },
        },
    });
    Navigation.push('MAIN_STACK', {
        component: {
            name: screenName,
            passProps: {
                itemId: itemId,
            },
            options: {
                topBar: {
                    title: {
                        text: screenName,
                    },
                },
            },
        },
    });
};

export const goToScreenWithIndex = async (that, screenName) => {
    let index = await AsyncStorage.getItem('indexNumber');

    Navigation.mergeOptions('drawerId', {
        sideMenu: {
            left: {
                visible: false,
            },
        },
    });

    await Navigation.push('MAIN_STACK', {
        component: {
            name: screenName,
            passProps: {
                itemId: index,
            },
            options: {
                topBar: {
                    title: {
                        text: screenName,
                    },
                },
            },
        },
    });
};
