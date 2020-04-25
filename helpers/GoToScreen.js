import {Navigation} from 'react-native-navigation';

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
