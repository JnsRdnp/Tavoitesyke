import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age,setAge] = useState('')

  const [lowerLimit,setLowerLimit] = useState(0)
  const [upperLimit, setUpperLimit] = useState(0)

  useEffect(() => {
    setLowerLimit(((220-age)*0.65))
    setUpperLimit((220-age)*0.85)
  }, [age]);

  return (
    <View style={styles.container}>
      <Text>Tavoitesyke T1</Text>
      <Text>Age</Text>
      <TextInput
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'

      />

      <Text>HR limits</Text>
      <Text>{lowerLimit.toFixed(0)}-{upperLimit.toFixed(0)}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10%'
  },
});
