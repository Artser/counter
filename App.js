import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttons}>
        <Pressable
          style={({ pressed }) => [styles.button, styles.plusButton, pressed && styles.pressed]}
          onPress={() => setCount((c) => c + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.button, styles.resetButton, pressed && styles.pressed]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Сброс</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  counter: {
    fontSize: 72,
    fontWeight: '700',
    color: '#eee',
    marginBottom: 48,
  },
  buttons: {
    flexDirection: 'row',
    gap: 16,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    minWidth: 120,
    alignItems: 'center',
  },
  plusButton: {
    backgroundColor: '#4ade80',
  },
  resetButton: {
    backgroundColor: '#64748b',
  },
  pressed: {
    opacity: 0.8,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
});
