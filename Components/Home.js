import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../Constants/colors";
import Button from "../Buttons/Button";

const Home = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.orange, COLORS.primary]}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ marginBottom: 20 }}>
          <Image
            source={require("../assets/Muscle.png")}
            style={{ width: 100, height: 100, resizeMode: "contain" }}
          />
        </View>

        {/* content */}
        <Button
          title="Log Out"
          onPress={() => navigation.navigate("Login")}
          style={{
            marginTop: 20,
            width: 150, // Adjust the width as needed
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default Home;
