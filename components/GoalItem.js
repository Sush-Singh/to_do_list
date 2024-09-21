import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem({ text, deleteGoalHandle, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={deleteGoalHandle.bind(this, id)}
        android_ripple={{ color: "#7b45e0" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 5,
    backgroundColor: "#875bda",
  },
  pressedItem: {
    backgroundColor: "#7b45e0",
    borderRadius: 5,
  },
  goalText: {
    color: "white",
    padding: 10,
  },
});
