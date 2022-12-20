import { StatusBar } from "expo-status-bar";
// <StatusBar style="auto" />
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback, // импорт компонента обертки
  Keyboard, // импорт компонента клавиатуры
  KeyboardAvoidingView, // новый импорт
  Platform, // новый импорт
  Alert,
  Button,
  ImageBackground,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/backgroundMin.jpg")}
        >
          <View style={styles.containerImput}>
            <KeyboardAvoidingView // определяем ОС и настраиваем поведение клавиатуры
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                value={name}
                onChangeText={nameHandler}
                placeholder="Username"
                style={styles.input}
              />
              <TextInput
                value={password}
                onChangeText={passwordHandler}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
              />
              <Button title={"Login"} style={styles.input} onPress={onLogin} />
            </KeyboardAvoidingView>
            <StatusBar style="auto" />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImput: {
    alignItems: "center",
    justifyContent: "flex-end",

    marginBottom: 30,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
});
