// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  // In a real app, you'd fetch this data from your backend or local storage
  const userProfile = {
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@example.com',
    hospital: 'City Hospital',
    department: 'Cardiology',
    // You can include other profile related data here
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
        style={styles.avatar}
      />
      <Text style={styles.name}>{userProfile.name}</Text>
      <Text>Email: {userProfile.email}</Text>
      <Text>Hospital: {userProfile.hospital}</Text>
      <Text>Department: {userProfile.department}</Text>
      {/* Add more profile details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // Add more styles for additional profile details
});

export default ProfileScreen;
