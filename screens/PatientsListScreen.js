import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const PatientsListScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      // This is where you would fetch the list of patients from your API
      setPatients([
        { id: '1', name: 'John Doe', condition: 'Stable' },
        { id: '2', name: 'Jane Smith', condition: 'Critical' },
        // ... more patients
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  const renderPatient = ({ item }) => (
    <TouchableOpacity
      style={styles.patientItem}
      onPress={() => navigation.navigate('PatientDetailScreen', { patientId: item.id })}
    >
      <Text style={styles.patientName}>{item.name}</Text>
      <Text style={item.condition === 'Critical' ? styles.criticalCondition : styles.stableCondition}>
        {item.condition}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={patients}
          renderItem={renderPatient}
          keyExtractor={item => item.id}
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
  patientItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  patientName: {
    fontSize: 18,
  },
  stableCondition: {
    fontSize: 16,
    color: 'green',
  },
  criticalCondition: {
    fontSize: 16,
    color: 'red',
  },
});

export default PatientsListScreen;
