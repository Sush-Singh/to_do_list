import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

export const GoalInput = ({
  goalInputHandler,
  addGoalHandler,
  showModal,
  closeModal,
}) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.imageStyle}
        />
        <TextInput
          placeholder="Add your goals"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color="#d1173f" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => {
                addGoalHandler(enteredGoalText);
                setEnteredGoalText("");
              }}
              color="#37cc0a"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20,
    backgroundColor: "#531677",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "##ffdffc",
    backgroundColor: "#ffdffc",
    width: "100%",
    padding: 8,
    borderRadius: 5,
    color: "#000000",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
