import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const MapScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon
            style={tw`bg-black rounded-full p-2 w-10 mt-4`}
            name="arrowleft"
            color="white"
            type="antdesign"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
