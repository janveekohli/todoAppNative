import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([
    'Do laundry',
    'Go to the gym',
    'Walk the dog'
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My To-Do List</Text>
      <ToDoList tasks={tasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f8',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A90f2',
    marginBottom: 20,
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default App;
