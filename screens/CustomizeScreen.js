import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Slider from '@react-native-community/slider';

export default function CustomizeScreen({ navigation }) {
  const [sugar, setSugar] = useState(1);
  const [lemon, setLemon] = useState(1);
  const [salt, setSalt] = useState(1);

  const levelLabels = ['Low', 'Mid', 'High'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customize Your Lemonade 🍋</Text>

      {/* Sugar */}
      <Text style={styles.label}>Sugar: {levelLabels[sugar]}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={2}
        step={1}
        value={sugar}
        onValueChange={setSugar}
        minimumTrackTintColor="#f1c40f"
        maximumTrackTintColor="#ddd"
      />

      {/* Lemon Juice */}
      <Text style={styles.label}>Lemon Juice: {levelLabels[lemon]}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={2}
        step={1}
        value={lemon}
        onValueChange={setLemon}
        minimumTrackTintColor="#f1c40f"
        maximumTrackTintColor="#ddd"
      />

      {/* Salt */}
      <Text style={styles.label}>Salt: {levelLabels[salt]}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={2}
        step={1}
        value={salt}
        onValueChange={setSalt}
        minimumTrackTintColor="#f1c40f"
        maximumTrackTintColor="#ddd"
      />

      <View style={{ marginTop: 30 }}>
        <Button
          title="Place Order"
          onPress={() => navigation.navigate('Confirmation')}
          color="#f1c40f"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginTop: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});
