import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [addedGoals, setAddedGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim() !== "") {
      setAddedGoals((prevGoals) => [
        ...prevGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
      setModalVisible(false);
    }
  }

  function deleteGoalHandle(id) {
    setAddedGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }

  function openModalFcn() {
    setModalVisible(true);
  }

  function closeModalFcn() {
    setModalVisible(false);
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.newGoalButton}>
          <Button title="Add New Goal" color="#7203a5" onPress={openModalFcn} />
        </View>
        <GoalInput
          addGoalHandler={addGoalHandler}
          showModal={modalVisible}
          closeModal={closeModalFcn}
        />
        <View style={styles.goalContainer}>
          <Text>List of goals...</Text>
          <FlatList
            style={styles.scrollView}
            data={addedGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  deleteGoalHandle={deleteGoalHandle}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 10,
    flex: 1,
  },
  newGoalButton: {
    marginTop: 50,
  },
  goalContainer: {
    flex: 5,
    marginTop: 20,
  },
  scrollView: {
    marginTop: 5,
  },
});
