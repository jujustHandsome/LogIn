import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../Constants/colors";
import Button from "../Buttons/Button";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.beige, COLORS.primary]}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* Image at the top left */}
        <Image
          source={require("../assets/Arnold.png")}
          style={{
            position: "absolute",
            top: 180,
            left: 130,
            width: 150, 
            height: 150, 
            resizeMode: "contain",
          }}
        />

        {/* Content */}
        <View
          style={{
            paddingHorizontal: 22,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: "800",
              color: COLORS.white,
              fontFamily: "Courier New",
            }}
          >
            Let's Get
          </Text>
          <Text
            style={{
              fontSize: 45,
              fontWeight: "800",
              color: COLORS.white,
              fontFamily: "Courier New",
            }}
          >
            Started
          </Text>

          <View>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                textAlign: "justify",
                marginTop: 10,
              }}
            >
            
            </Text>
          </View>

          <Button
            title="Join Now"
            onPress={() => navigation.navigate("Register")}
            style={{
              marginTop: 20,
              width: "100%",
              fontFamily: "Courier New",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: COLORS.white,
                fontFamily: "Courier New",
              }}
            >
              Already have an Account?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.black,
                  fontWeight: "bold",
                  marginLeft: 4,
                  fontFamily: "Courier New",
                }}
              >
                Login Here!
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
