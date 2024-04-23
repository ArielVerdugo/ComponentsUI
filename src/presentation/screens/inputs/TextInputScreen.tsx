import { KeyboardAvoidingView, Platform, Text, View } from "react-native"
import { ScrollView, TextInput } from "react-native-gesture-handler"
import { globalStyles } from "../../../config/theme/theme"
import { useState } from "react"


export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    })


    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ScrollView>
                <View style={{marginTop: 100}}>
                    <TextInput 
                        style={globalStyles.input} 
                        placeholder="Nombre completo"
                        onChangeText={ value => setForm({...form, name: value}) }
                    />

                    <View style={{ height: 10 }}/>

                    <TextInput 
                        style={globalStyles.input} 
                        placeholder='Correo electrónico'
                        keyboardType='email-address'
                        onChangeText={ value => setForm({...form, email: value}) }
                    />

                    <View style={{ height: 10 }}/>

                    <TextInput 
                        style={globalStyles.input} 
                        placeholder='telefono'
                        keyboardType="phone-pad"
                        onChangeText={ value => setForm({...form, phone: value}) }
                    />

                    <View style={{ height: 10 }}/>

                    <Text style={{padding: 10}}>{ JSON.stringify(form, null, 2) }</Text>

                    <View style={{ height: 10 }}/>

                    <Text style={{padding: 10}}>{ JSON.stringify(form, null, 2) }</Text>

                    <View style={{ height: 10 }}/>

                    <Text style={{padding: 10}}>{ JSON.stringify(form, null, 2) }</Text>

                    <View style={{ height: 10 }}/>

                    <Text style={{padding: 10}}>{ JSON.stringify(form, null, 2) }</Text>

                    <View style={{ height: 10 }}/>

                    <Text style={{padding: 10}}>{ JSON.stringify(form, null, 2) }</Text>

                    <View style={{ height: 10 }}/>

                    <Text style={{padding: 10}}>{ JSON.stringify(form, null, 2) }</Text>

                    <View style={{ height: 10 }}/>

                    <Text style={{padding: 10}}>{ JSON.stringify(form, null, 2) }</Text>
                    <View style={{ height: 10 }}/>

                    <Text style={{padding: 10}}>{ JSON.stringify(form, null, 2) }</Text>

                    <View style={{height: 10}} />

                    <TextInput
                        style={globalStyles.input}
                        placeholder="Teléfono"
                        keyboardType="phone-pad"
                        onChangeText={value => setForm({...form, phone: value})}
                    />

                    <View style={{height: 50}} />


                </View>

            </ScrollView>
        </KeyboardAvoidingView>
        
    )
}