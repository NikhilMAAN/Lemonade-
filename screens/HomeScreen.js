import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import bgImage from '../assets/lemonade.jpg';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={bgImage}
      style={styles.bg}
      resizeMode="cover" // ✅ Add this line to control the image zoom
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Lemonade 🍋</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Customize')}>
          <Text style={styles.buttonText}>Make Your Lemonade</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    top: 80,
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'yellow',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
