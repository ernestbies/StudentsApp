import React from 'react';
import {Dimensions, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Drawer from './screens/Drawer';
import HomePage from './screens/HomePage';
import About from "./screens/About";
import Student from "./screens/Student";
import Settings from "./screens/Settings";

Navigation.registerComponent('Drawer', () => Drawer);
Navigation.registerComponent('HomePage', () => HomePage);
Navigation.registerComponent('About', () => About);
Navigation.registerComponent('Student', () => Student);
Navigation.registerComponent('Settings', () => Settings);

const { width } = Dimensions.get('window');
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      elevation: 0,
      visible: true,
      drawBehind: false,
      animate: false,
      leftButtons: [
        {
          icon: require('./images/menu.png'),
          id: 'drawerBtn',
          color: 'orange',
        }
      ],
      title: {
        color: 'orange',
        alignment: 'center',
        text: 'Home Page',
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'RobotoCondensed-Regular',
      },
      background: {
        color: '#222',
      },
      borderHeight: '2',
      borderColor: '#333'
    }
  });
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            id: 'drawerId',
            name: 'Drawer',
            fixedWidth: width
          }
        },
        center: {
          stack: {
            id: 'MAIN_STACK',
            children: [
              {
                component: {
                  name: 'HomePage',
                }
              },
            ]
          }
        }
      },
    }
  });
});

Navigation.events().registerNavigationButtonPressedListener((event) => {
  console.log(event)
  switch(event.buttonId) {
    case 'drawerBtn':
      Navigation.mergeOptions('drawerId', {
            sideMenu: {
              left: {
                visible: true
              }
            }
          });
      break;
    case 'searchBtn':
      Navigation.push(event.componentId, {
        component: {
          name: 'Search',
          options: {
            topBar: {
              title: {
                text: 'Search',
              },
            },
          },
        }
      });
      break;
  }
});

export const App = () => {
    return (<View/>);
};
