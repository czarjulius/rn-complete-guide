import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import DefaultStyles from "../constants/default-styles";
import Colors from "../constants/color";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={DefaultStyles.title}>Game is Over!</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/success.png")}
            // source={{
            //   uri:
            //     "data:image/jpeg;base64,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",
            // }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            <Text style={DefaultStyles.bodyText}>
              Your Phone needed
              <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds
              to guess the number{" "}
              <Text style={styles.highlight}>{props.userNumber}</Text>
            </Text>
          </Text>
          <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});
export default GameOverScreen;
