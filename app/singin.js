import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import Loading from "../components/Loading";
//image
const loginImage = require("../assets/images/login-chatapp.png");

const Singin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = async () => {
    if (!emailRef.current || !passwordRef.current)
      return Alert.alert("Please fill all the fields");
  };

  return (
    <View className="flex-1">
      <StatusBar className="dark" />
      <View style={{ paddingTop: hp(8) }} className="flex-1 gap-12">
        <View className="items-center">
          <Image
            style={{ height: hp(25) }}
            resizeMode="contain"
            source={loginImage}
          />
        </View>

        <View className="gap-10 items-center justify-center">
          <Text
            style={{ fontSize: hp(4) }}
            className="text-center font-bold tracking-wider text-neutral-800"
          >
            Sing in
          </Text>

          <View className="gap-4">
            <View
              style={{ height: hp(7), width: "90%" }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Octicons name="mail" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (emailRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Email"
              />
            </View>

            <View className="gap-2">
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Octicons name="lock" size={hp(2.7)} color="gray" />
                <TextInput
                  onChangeText={(value) => (passwordRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Password"
                  secureTextEntry
                />
              </View>
              <Text
                style={{ fontSize: hp(2) }}
                className="font-semibold self-end"
              >
                forgot password?
              </Text>
            </View>
          </View>

          <View>
            {loading ? (
              <View className="flex-row justify-center">
                <Loading size={hp(8)} />
              </View>
            ) : (
              <TouchableOpacity
                onPress={handleLogin}
                style={{
                  width: 240,
                  backgroundColor: "#667EEA",
                  borderRadius: 5,
                  height: hp(5),
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ fontSize: hp(2.4) }}
                  className="text-center text-white"
                >
                  Sing in
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View className="gap-2 items-center flex-row">
            <Text style={{ fontSize: hp(1.9) }}>Don't have an account?</Text>
            <Pressable onPress={() => router.push("singup")}>
              <Text style={{ fontSize: hp(2) }} className="text-indigo-500">
                Sing up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Singin;
