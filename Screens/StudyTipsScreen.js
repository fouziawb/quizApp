import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, RefreshControl } from 'react-native';

const StudyTipsScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
    const data = [
        {
          id: 1,
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/1039/1039328.png',
          title: 'Make a study plan',
    
        }, {
    
          id: 2,
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/7329/7329721.png',
          title: 'Use the Pomodoro Technique to manage your study time effectively.',
        }, {
    
          id: 3,
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/9389/9389257.png',
          title: 'Take short breaks between study sessions to stay focused.',
        },
        {
    
          id: 4,
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/4232/4232293.png',
          title: 'Teach Someone Else so it can help you grasp it better.',
    
        }, {
    
          id: 5,
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/3901/3901624.png',
          title: 'Get Enough Sleep: Aim for 7-8 hours of quality sleep for optimal cognitive function.',
    
        },
        {
    
          id: 6,
          title: 'Test Yourself to help yourself identifying areas that need improvement.',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/2620/2620416.png',
        },
        {
          id: 7,
          title: 'Stay Hydrated and Eat Well because proper nutrition and hydration are essential for mental clarity.',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/2721/2721017.png',
        },
        {
          id: 8,
          title: 'Use Memory Techniques try mnemonic devices, flashcards, and mind mapping to aid memory.',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/2620/2620449.png',
        }, {
          id: 9,
          title: 'Seek Help do not t hesitate to ask for help or clarification when you need it',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/2597/2597143.png',
        },
        {
          id: 10,
          title: 'Stay Positive maintain a positive attitude and believe in your ability to succeed.',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/2502/2502582.png',
        },
        {
          id: 11,
          title: 'Stay Curiour cultivate a genuine interest in your subjects to make learning more enjoyable.',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/10108/10108155.png',
        }, {
          id: 12,
          title: 'Practice Past Papers Reviewing past exams can help you understand the test format and question types.',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/326/326909.png',
        },
    
    
      ];
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Study Tips</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image source={{ uri: item.imageUrl }} style={styles.image} />
                <Text style={styles.itemText}>{item.title}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            refreshControl={
              <RefreshControl 
              refreshing={refreshing}
               onRefresh={onRefresh} 
               tintColor="white" 

               />
            }
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
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    marginTop: 10,
  },
  itemContainer: {
    backgroundColor: '#303b6d',
    marginVertical: 10,
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 10,
  },
  separator: {
    height: 2,
    backgroundColor: 'gray',
  },
  image: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  itemText: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default StudyTipsScreen;
