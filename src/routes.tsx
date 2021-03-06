import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';

import OrphanagesDetails from './pages/OrphanageDetails';

import SelectMapPosition from './pages/createOrphanage/SelectMapPosition';

import OrphanagesData from './pages/createOrphanage/OrphanageData';
import Header from './components/Header';


const {Navigator, Screen }= createStackNavigator();


export default  function Routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown:false, cardStyle:{backgroundColor:'#f2f3f5'}}}>
        <Screen name="OrphanagesMap" component={OrphanagesMap}></Screen>
        <Screen name="OrphanagesDetails" component={OrphanagesDetails} options={{
          headerShown:true,
          header:() => <Header showCancel={false} title="Orfanato"/>
        }}></Screen>
        <Screen name="SelectMapPosition" component={SelectMapPosition} options={{
          headerShown:true,
          header:() => <Header showCancel={true} title="Selecione no mapa"/>
        }}></Screen>
        <Screen name="OrphanageData" component={OrphanagesData} options={{
          headerShown:true,
          header:() => <Header showCancel={true} title="Informe os dados"/>
        }}></Screen>
      </Navigator>
    </NavigationContainer>

  )
}