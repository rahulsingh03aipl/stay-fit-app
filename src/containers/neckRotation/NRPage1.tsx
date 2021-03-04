import { styles } from './styles';
import React from 'react';
import NeckRotation from '../../components/neckRotation/NeckRotation';
import { SafeAreaView,View,Text,Image } from 'react-native';
import { AppImages } from '../../utils/imageGenerator';

interface Props{
    navigation:any
}


class NRPage1 extends React.Component<Props>{

    constructor(props:any){
        super(props);
    }

    handlePress=()=>{
        this.props.navigation.navigate("step2");
    }

    render(){
        return(
            <SafeAreaView>
                <NeckRotation onPress={this.handlePress} description= '5 Neck circles. First Clockwise and then Anti-clockwise' step = "Step 1/2"source={AppImages.NRSTEP1} habitText={styles.habitText} startHabitText={styles.startHabitText} imageStyle={styles.imageStyle} function="Next Step"></NeckRotation>
            </SafeAreaView>
        )
    }
}

export default NRPage1;
