import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

const CriticalConditionScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [criticalPatients, setCriticalPatients] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      // This is where you would fetch the critical patients from your API
      setCriticalPatients([
        { id: '1', name: 'Jane Doe', condition: 'Critical' },
        { id: '2', name: 'John Smith', condition: 'Critical' },
        // ... more critical patients
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('ProfileScreen', { patientId: item.id })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.condition}>{item.condition}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={criticalPatients}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    padding: 10,
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  condition: {
    marginTop: 5,
    fontSize: 16,
    color: 'red',
  },
});

export default CriticalConditionScreen;
