import React from 'react';
import {TouchableOpacity,View,SafeAreaView,Text,Image,ScrollView,ImageBackground} from 'react-native';

import { AppImages } from '../../utils/imageGenerator';
import styles from './style';

interface Props{
    habitText:any,
    onPress:any,
    startHabitText:any,
    imageStyle:any,
    source:any,
    step:string,
    description:string,
    function:any
}


class NeckRotation extends React.Component<Props>{
    render(){
        return(
            <SafeAreaView>
                <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <Text style= {this.props.habitText}>
                        40% of the habits that stay with you 
                        start on the first day of being enrolled!
                    </Text>
                    <Text style={this.props.startHabitText}>
                        Let's start this journey of change 
                        with two small steps!
                    </Text>
                    <Image style= {this.props.imageStyle} source={this.props.source} />
                    <Text style={styles.step}>{this.props.step}</Text>
                    <Text style={styles.description}>{this.props.description}</Text>
                    <TouchableOpacity onPress = {()=>this.props.onPress()} style={styles.button}>
                        <Text style= {styles.function}>{this.props.function}</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default NeckRotation;