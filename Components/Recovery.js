import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../Constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Button from "../Buttons/Button";
import { Recovery } from ".";

const Recover = ({navigation}) => {
    const [passwordShown, setPasswordShown] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View >

        <View style={{flexDirection: 'row'}} >

          <TouchableOpacity 
          onPress={() => navigation.navigate("Login")}
          style={{marginTop: 60,}} >
        <Ionicons name="arrow-undo" size={20} color={COLORS.grey}/>

        </TouchableOpacity>
           
           
          
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              marginVertical: 100,
              marginHorizontal: 90,
              color: COLORS.black,
              fontFamily: "Courier New",
            }}
          >
            Recovery
          </Text>
        </View>

        </View>
        <View
          style={{
            marginBottom: 1,
          }}
        >
          <View style={{ marginBottom: 13 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                marginVertical: 8,
                fontFamily: "Courier New",
                marginTop: -70,
              }}
            >
              Email address
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
                marginVertical: 10,
              }}
            >
              <TextInput
                placeholder="Enter your email address"
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                style={{
                  width: "100%",
                  fontFamily: "Courier New",
                }}
              />
            </View>
          </View>

          
           

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
                marginVertical: 10,
              }}
            >
              <TextInput
                placeholder="Enter your new password"
                placeholderTextColor={COLORS.black}
                secureTextEntry={!passwordShown}
                style={{
                  width: "100%",
                  fontFamily: "Courier New",
                }}
              />
              <TouchableOpacity
                onPress={() => setPasswordShown(!passwordShown)}
                style={{
                  position: "absolute",
                  right: 12,
                }}
              >
                {passwordShown == false ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.black} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.black} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <Button
            onPress={() => console.log("Pressed1")}
            title="Recover Account"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
            }}
          />

          

            
          
        </View>
        
    </SafeAreaView>
  );
};

export default Recover;
