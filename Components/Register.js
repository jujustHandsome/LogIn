import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../Constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import Button from "../Buttons/Button";
import { Pressable } from "react-native";

const Register = ({navigation}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
      <View >

<View style={{flexDirection: 'row'}} >

  <TouchableOpacity 
  onPress={() => navigation.navigate("Welcome")}
  style={{marginTop: 20,}} >
<Ionicons name="arrow-undo" size={20} color={COLORS.grey}/>

</TouchableOpacity>
   
   
  
  <Text
    style={{
      fontSize: 60,
      fontWeight: "bold",
      marginVertical: 40,
      marginHorizontal: 40,
      color: COLORS.black,
      fontFamily: "Courier New",
      
    }}
  >
    Register
  </Text>
</View>

</View>
        <View
          style={{
            marginBottom: 1,
          }}
        >
          <View style={{ marginBottom: 1 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                marginVertical: 8,
                fontFamily: "Courier New",
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
            marginBottom: 1
          }}
        >
          <View style={{ marginBottom: 1 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                marginVertical: 8,
                fontFamily: "Courier New",
              }}
            >
              Username
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
                placeholder="Enter your username"
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                style={{
                  width: "100%",
                  fontFamily: "Courier New",
                }}
              />
            </View>
          </View>
          </View>

          

          <View style={{ marginBottom: 1 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                marginVertical: 8,
                fontFamily: "Courier New",
              }}
            >
              Password
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
                placeholder="Enter your password"
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

          <View style={{ marginBottom: 1 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                marginVertical: 8,
                fontFamily: "Courier New",
              }}
            >
              Re-Enter Password
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
                placeholder="Re-Enter your password"
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

          <View
            style={{
              flexDirection: "row",
              marginVertical: 6,
              fontFamily: "Courier New",
            }}
          >
            <Checkbox
              style={{ marginRight: 8 }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? COLORS.black : undefined}
            
            />
            <Text>I agree to the terms and conditions</Text>
          </View>

          <Button
            title="Sign Up"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
              marginVertical: 10,
              fontFamily: "Courier New"
              
            }}
          />

                    <Text style={{ fontSize: 16, color: COLORS.black, marginTop: 50, fontFamily: "Courier New"}}>Already have an account?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 24,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 160,
                            marginTop: 5,
                            fontFamily: "Courier New",
                        }}>Login</Text>
                    </Pressable>
                </View>

          </View>
    </SafeAreaView>
  );
};

export default Register;
