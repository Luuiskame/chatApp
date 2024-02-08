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
  const registerImage = require("../assets/images/register-chatapp.png");
  
  const Singup = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
  
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const usernameRef = useRef("")
  
    const handleRegister = async () => {
      if (!emailRef.current || !passwordRef.current || !usernameRef.current)
        return Alert.alert("Please fill all the fields");
    };
  
    return (
      <View className="flex-1">
        <StatusBar className="dark" />
        <View style={{ paddingTop: hp(7) }} className="flex-1 gap-12">
          <View className="items-center">
            <Image
              style={{ height: hp(20) }}
              resizeMode="contain"
              source={registerImage}
            />
          </View>
  
          <View className="gap-10 items-center justify-center">
            <Text
              style={{ fontSize: hp(4) }}
              className="text-center font-bold tracking-wider text-neutral-800"
            >
              Sing up
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

              <View
                style={{ height: hp(7), width: "90%" }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Octicons name="person" size={hp(2.7)} color="gray" />
                <TextInput
                  onChangeText={(value) => (usernameRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="User name"
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
              </View>
            </View>
  
            <View>
              {loading ? (
                <View className="flex-row justify-center">
                  <Loading size={hp(8)} />
                </View>
              ) : (
                <TouchableOpacity
                  onPress={handleRegister}
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
                    Sing up
                  </Text>
                </TouchableOpacity>
              )}
            </View>
  
            <View className="gap-2 items-center flex-row">
              <Text style={{ fontSize: hp(1.9) }}>have an account?</Text>
              <Pressable onPress={() => router.push("singin")}>
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
  
  export default Singup;
  