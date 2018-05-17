import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ProjectTabScreen from './screens/ProjectTabScreen';
import ProjectDetailScreen from './screens/ProjectDetailScreen';
import ProjectStudentsScreen from './screens/ProjectStudentsScreen';

const TabNavigation = TabNavigator({
    ProjectDetail: { screen: ProjectDetailScreen},
    StudentScreen: { screen: ProjectStudentsScreen }
});

const RootNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    ProjectTab: TabNavigation
}, { 
    initialRouteName: 'Home'
});

export default class App extends Component {
  render() {
    return (
        <RootNavigator />
    );
  }
}


