import React from 'react';
import { AppImages } from '../../utils/imageGenerator';
import { styles } from './styles';
import InputField from '../../components/inputField/InputField';
import Button from '../../components/button/Button';

import {
    Linking, TouchableOpacity, SafeAreaView,
    ScrollView, View, Text, Image, TextInput, ImageBackground,
}
    from 'react-native';

class SignUp extends React.Component {

    state = {
        isChecked: false,
    }

    handlePress = () => {
        console.log("hello")
    }

    render() {
        return (
            <SafeAreaView style={styles.container1}>
                <ImageBackground style={[styles.backgroundImage, { opacity: 0.2 }]} source={AppImages.SIGNUPWALLPAPER} />
                <ScrollView>

                    <View >
                        <View style={styles.loginText}>
                        <Image source={AppImages.RBTLOGORED} style={styles.rbtlogo}></Image>
                        <Text style={{ fontWeight: "bold",  marginLeft: 1, fontFamily: "times new roman"}}>
                        Login
                        </Text>
                        </View>
                        <View style = {styles.signupText}>
                        <Image source={AppImages.RBTLOGORED} style={styles.rbtlogo}></Image>
                        <Text style={styles.title}>
                            SIGN UP
                        </Text>
                        </View>
                        <InputField placeholder="Name" />
                        <InputField
                            placeholder="Email"
                        />

                        <InputField
                            placeholder="Mobile Number"
                        />

                        <View >
                            <InputField
                                placeholder="Password"
                                rightImg={AppImages.EYEICON}
                            />
                        </View>
                        <View style={{ flex: 1 }} />


                        <View style={styles.checkbox}>
                            <TouchableOpacity onPress={() => this.setState({ isChecked: !this.state.isChecked })} style={styles.checkBoxBtn} activeOpacity={0.8}>
                                <Image source={this.state.isChecked ? AppImages.CHECKED : AppImages.UNCHECKED} style={styles.checkBoxImg} />
                            </TouchableOpacity>
                            <Text style={styles.cbText}>
                                I have read the
        </Text>
                            <Text
                                style={{ color: "#E30513", marginTop: 8, marginLeft: 4, textDecorationStyle: "solid", textDecorationLine: "underline" }}
                                onPress={() => Linking.openURL('http://google.com')}>
                                terms and conditions</Text>
                        </View>
                        <View style={styles.sociallogos}>
                            <Text style={styles.signuptext}>Sign up with</Text>
                            <Image style={styles.logo} source={AppImages.APPLELOGO}></Image><Image style={styles.logo} source={AppImages.GOOGLELOGO}></Image><Image style={styles.logo} source={AppImages.FBLOGO}></Image>
                        </View>


                        <Button title="SignUp" style={styles.signupButton} onPress={() => this.handlePress()} />
                        <Text style={styles.textStyle}>
                            Already a user?
            </Text>

                        <Button style={styles.loginButton} title="LogIn" onPress={this.handlePress} />




                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}


export default SignUp;

