import {TouchableOpacity , View, Text, Image, StyleSheet, TextInput } from 'react-native';
import TabLayout from './_layout';
import { useState } from 'react';

export default function HomeScreen() {
  const [text,setText] = useState("")
  const [result,setResult] = useState("")

  const handlePress = () =>{
    setResult(text);
    setText('');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello amigo</Text>
      <TextInput style={styles.input}
      placeholder='enter text'
      value={text}
      onChangeText={setText}
      >
      </TextInput>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Press button</Text>
        </TouchableOpacity>
      <Text style={styles.result}>{result}</Text>
    <TabLayout></TabLayout>
    </View>
  );
}

function helo(){
  console.log("Hello World")
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   // центрируем по вертикали
    alignItems: 'center',       // центрируем по горизонтали
    backgroundColor: '#f5f5f5', // светлый фон
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  result: {
    fontSize: 18,
    color: '#222',
    marginTop: 10,
  },
});
