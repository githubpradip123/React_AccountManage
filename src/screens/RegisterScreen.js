import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import globalUtils from '../utils/globalUtils'

const RegisterScreen = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAndPrivacyAgreed, setTermsAndPrivacyAgreed] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(true);

    const validateForm = () => {

        // Name validation
        if (!fullName) {
            return globalUtils.showToastMessage('Please Enter Name');
        } else if (fullName.length > 50) {
            return globalUtils.showToastMessage('Name cannot be longer than 50 characters');
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            return globalUtils.showToastMessage('Email is required');
        } else if (!emailRegex.test(email)) {
            return globalUtils.showToastMessage('Invalid email format');
        }

        // Password validation
        const passwordRegex = /^[a-zA-Z0-9]{8,}$/;
        if (!password) {
            return globalUtils.showToastMessage('Password is required');
        } else if (!passwordRegex.test(password)) {
            return globalUtils.showToastMessage('Password must be at least 8 characters long and contain only letters and numbers');
        }
    };

    const handleSubmit = () => {
        if (validateForm()) {
            setIsSubmitted(!isSubmitted)
            console.log('Form submitted:', fullName.length, { fullName, email, password });
        }
    };

    return (
        <View>
            {isSubmitted ? (
                <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }} >

                    <Image source={require('./../assets/logo.png')} style={{ width: 150, height: 30, bottom: 50 }} />
                    <View style={{ alignSelf: 'flex-start', marginLeft: 30 }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'left', margin: 10, }}>Create Account</Text>
                    </View>

                    <TextInput
                        placeholder="Full Name"
                        value={fullName}
                        onChangeText={setFullName}
                        style={{ width: '80%', borderWidth: 1, padding: 10, borderRadius: 10, marginBottom: 10 }}
                    />
                    <TextInput
                        placeholder="Email address"
                        value={email}
                        onChangeText={setEmail}
                        style={{ width: '80%', borderWidth: 1, padding: 10, borderRadius: 10, marginBottom: 10 }}
                    />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        style={{ width: '80%', borderWidth: 1, padding: 10, borderRadius: 10, marginBottom: 10 }}
                    />

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignSelf: 'flex-start',
                            marginLeft: 50,
                            marginVertical: 15
                        }}
                        onPress={() => setTermsAndPrivacyAgreed(!termsAndPrivacyAgreed)}
                    >
                        <View style={{
                            width: 20,
                            height: 20,
                            borderWidth: 1,
                            borderColor: '#ccc',
                            borderRadius: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {termsAndPrivacyAgreed && <View style={{
                                width: 10,
                                height: 10,
                                backgroundColor: 'green',
                            }} />}
                        </View>
                        <Text style={{ marginLeft: 5, }}>I agree with Terms and Privacy</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={handleSubmit} style={{ width: '80%', height: 40, padding: 10, backgroundColor: 'red', alignItems: 'center', marginTop: 10, justifyContent: 'center', borderRadius: 10 }}  >
                        <Text style={{ color: 'white', alignSelf: 'center' }}>SIGN UP</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', width: '80%', height: 40, padding: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderColor: '#000000', borderWidth: 1 }}  >
                        <Image source={require('./../assets/googlelogo.png')} style={{ width: 25, height: 25, }} />
                        <Text style={{ color: 'black', alignSelf: 'center' }}> Sign Up with Google</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginTop: 20 }}>Already have an account?  </Text>
                        <Text style={{ marginTop: 20, color: 'red' }}> Log In</Text>
                    </View>

                </View >)
                :
                (
                    <View style={{ height: '100%', alignItems: 'center', backgroundColor: 'white' }}>
                        <Image source={require('./../assets/logo.png')} style={{ width: 150, height: 30, marginTop: 50 }} />

                        <Text style={{
                            fontSize: 24, fontWeight: 'bold', color: 'green',
                            alignItems: 'center', justifyContent: 'center',
                            marginLeft: 30, marginTop: 50
                        }}>Successfully Submitted!</Text>


                        <Image source={require('./../assets/success.png')} style={{ width: '100%', height: '50%', marginTop: 50 }} />
                        <View style={{ alignSelf: 'flex-start', marginLeft: 30, marginTop: 50 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'normal', textAlign: 'left', color: 'grey', margin: 10, }}>Our representative will get in touch with you shortly</Text>
                        </View>

                    </View>
                )

            }

        </View>








    );



};

export default RegisterScreen;