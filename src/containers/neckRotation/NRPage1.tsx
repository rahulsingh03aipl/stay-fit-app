import { styles } from './styles';
import React from 'react';
import {TouchableOpacity,ScrollView, SafeAreaView,View,Text,Image, Alert } from 'react-native';
import { AppImages } from '../../utils/imageGenerator';

interface Props{
    navigation:any
}


class NRPage1 extends React.Component<Props>{

    constructor(props:any){
        super(props);
    }

    state = {
        index:1
    }

    handlePress1=()=>{
        this.setState({
            index:2
        })
    }

    handlePress2 =() =>{
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

        const des1 = "5 Neck Circles. First clock-wise and then anti-clockwise";
        const des2 = "Upward/ Downward Neck Movement"
        return(
            <SafeAreaView>
                <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <Text style= {styles.habitText}>
                        40% of the habits that stay with you 
                        start on the first day of being enrolled!
                    </Text>
                    <Text style={styles.startHabitText}>
                        Let's start this journey of change 
                        with two small steps!
                    </Text>
                    <Image style= {styles.imageStyle} source={this.state.index == 1 ? AppImages.NRSTEP1 : AppImages.NRSTEP2} />
                    <Text style={styles.step}>{this.state.index == 1 ? "Step 1/2" : "Step 2/2"}</Text>
                    <Text style={styles.description}>{(this.state.index == 1)? des1 : des2 }</Text>
                    <TouchableOpacity onPress = {this.state.index == 1 ? this.handlePress1 : this.handlePress2} style={styles.button}>
                        <Text style= {styles.function}>{(this.state.index == 1)? "Next Page" : "Finish"} </Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default NRPage1;
