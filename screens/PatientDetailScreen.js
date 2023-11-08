import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Button } from 'react-native';

const PatientDetailScreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [patientDetails, setPatientDetails] = useState(null);
  const { patientId } = route.params;

  useEffect(() => {
    // Simulate fetching patient details from an API
    setTimeout(() => {
      // In a real app, you would replace this with an API call using the patientId
      setPatientDetails({
        id: patientId,
        name: 'John Doe',
        age: 30,
        bloodPressure: '120/80 mmHg',
        respiratoryRate: '16/min',
        bloodOxygenLevel: '98%',
        heartbeatRate: '72/min',
        condition: 'Critical',
        // ... other details
      });
      setIsLoading(false);
    }, 1500);
  }, [patientId]);

  const goToCriticalConditionScreen = () => {
    // Navigate to CriticalConditionScreen
    navigation.navigate('CriticalConditionScreen', { patientId: patientDetails.id });
  };

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{patientDetails.name}</Text>
          {/* Render additional patient details here */}
          <Text>Age: {patientDetails.age}</Text>
          <Text>Blood Pressure: {patientDetails.bloodPressure}</Text>
          <Text>Respiratory Rate: {patientDetails.respiratoryRate}</Text>
          <Text>Blood Oxygen Level: {patientDetails.bloodOxygenLevel}</Text>
          <Text>Heartbeat Rate: {patientDetails.heartbeatRate}</Text>
          <Text>Condition: {patientDetails.condition}</Text>
          {/* ... more details */}

          {/* Button to navigate to CriticalConditionScreen */}
          {patientDetails.condition === 'Critical' && (
            <Button
              title="View Critical Condition Details"
              onPress={goToCriticalConditionScreen}
            />
          )}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  detailsContainer: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // Add more styles for your details here
});

export default PatientDetailScreen;
