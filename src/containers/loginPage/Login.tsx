import React from 'react';
import {View,SafeAreaView,Text,Image,ImageBackground} from 'react-native';
import {AppImages} from '../../utils/imageGenerator';
import { styles } from '../loginPage/styles';

class Login extends React.Component{
    render(){
        return(
            <SafeAreaView>
                <View >
                    <View style={styles.signupTextView}>
                        <Image source = {AppImages.RBTLOGORED}  />
                        <Text style ={styles.signupText} >Login</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default Login;

