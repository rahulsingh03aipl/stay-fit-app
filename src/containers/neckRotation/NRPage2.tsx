import React from 'react';
import {View,SafeAreaView,Text, Alert} from 'react-native';
import NeckRotation from '../../components/neckRotation/NeckRotation';
import { AppImages } from '../../utils/imageGenerator';
import styles2 from './styles2';


interface Props{
    navigation:any
}

class NRPage2 extends React.Component<Props>{

    handlePress =() =>{
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed')
              },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
          );
    }
    render(){
        return(
            <SafeAreaView>
                    <NeckRotation onPress= {this.handlePress} step= "Step 2/2" description="Upward/Downward Neck Movement" source={AppImages.NRSTEP2} imageStyle={styles2.imageStyle} habitText={styles2.habitText} startHabitText={styles2.startHabitText} function="Finish" />
            </SafeAreaView>
        )
    }
}

export default NRPage2;

