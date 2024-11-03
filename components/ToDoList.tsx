import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ToDoListProps {
  tasks: string[];
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks }) => {
  return (
    <View style={styles.container}>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.task}>
          {task}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  task: {
    fontSize: 18,
    color: '#333',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default ToDoList;
