import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Pressable,
    Image
} from 'react-native';

const TodoListScreen = ({ navigation }) => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, { text: task, completed: false }]);
            setTask('');
        }
    };

    const toggleCompletion = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row-reverse" }}>
                <Pressable onPress={() => { navigation.openDrawer() }}>
                    <Image
                        source={require('../Assets/pc.png')}//bitmoji
                        style={{ height: 60, width: 60, borderRadius: 40, marginTop: 10, marginBottom: 10 }}
                    />
                </Pressable>
                <Text style={styles.title}>To-Do List</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new task"
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />
                <Button title="Add" onPress={addTask} />
            </View>
            <FlatList
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.taskItem}>
                        <TouchableOpacity
                            style={[
                                styles.circle,
                                { backgroundColor: item.completed ? '#00CC00' : 'white' },
                            ]}
                            onPress={() => toggleCompletion(index)}
                        />
                        <Text
                            style={{
                                color: 'white',
                                flex: 1,
                                textDecorationLine: item.completed ? 'line-through' : 'none',
                            }}
                        >
                            {item.text}
                        </Text>
                        <Button title="Remove" onPress={() => removeTask(index)} />
                    </View>
                )}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050C2B',
        padding: 20,
        paddingTop: 40
    },
    title: { fontSize: 36, fontWeight: "600", color: "white", marginTop: 20, marginRight: 50 },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        color: 'white',
        padding:7
    },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 10,
    },
});

export default TodoListScreen;
