import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const [nota1, setNota1] = useState(null);
  const [nota2, setNota2] = useState(null);
  const [nota3, setNota3] = useState(null);
  const [nota4, setNota4] = useState(null);
  const [media, setMedia] = useState(null);
  const [message, setMessage] = useState("Preencha as notas");
  const [textButton, setTextButton] = useState("Calcular Média");

  function calcularMedia() {
    if (nota1 != null && nota2 != null && nota3 != null && nota4 != null) {
      Keyboard.dismiss();
      const soma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);
      const mediaCalculada = (soma / 4).toFixed(2); // Calculando a média das 4 notas
      setMedia(mediaCalculada);
      setNota1(null);
      setNota2(null);
      setNota3(null);
      setNota4(null);
      setMessage("Sua média é");
      setTextButton("Calcular Novamente");
    } else {
      setMedia(null);
      setMessage("Preencha todas as notas");
      setTextButton("Calcular Média");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>GradeCalcApp</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subTitle}>Calculadora de Média</Text>

        <View>
          <Text style={styles.label}>Nota 1</Text>
          <TextInput
            style={styles.input}
            value={nota1 ?? ''}
            onChangeText={setNota1}
            placeholder='Ex. 7.5'
            keyboardType='numeric'
          ></TextInput>

          <View style={{ marginTop: 25 }}></View>
          
          <Text style={styles.label}>Nota 2</Text>
          <TextInput
            style={styles.input}
            value={nota2 ?? ''}
            onChangeText={setNota2}
            placeholder='Ex. 8.0'
            keyboardType='numeric'
          ></TextInput>

          <View style={{ marginTop: 25 }}></View>

          <Text style={styles.label}>Nota 3</Text>
          <TextInput
            style={styles.input}
            value={nota3 ?? ''}
            onChangeText={setNota3}
            placeholder='Ex. 9.0'
            keyboardType='numeric'
          ></TextInput>

          <View style={{ marginTop: 25 }}></View>

          <Text style={styles.label}>Nota 4</Text>
          <TextInput
            style={styles.input}
            value={nota4 ?? ''}
            onChangeText={setNota4}
            placeholder='Ex. 6.5'
            keyboardType='numeric'
          ></TextInput>
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => calcularMedia()}
        >
          <Ionicons name="calculator-sharp" size={24} color="#edf2f4" />
          <Text style={styles.text}>{textButton}</Text>
        </TouchableOpacity>

        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{message}</Text>
          <Text style={styles.result}>{media}</Text>
        </View>

      </View>
      <StatusBar style='light' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ed2f4',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 130,
    backgroundColor: '#4682B4',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  title: {
    color: '#edf2f4',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: '#edf2f4'
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 24,
    color: '#4682B4',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  label: {
    color: '#000',
    fontSize: 18,
  },
  input: {
    height: 45,
    width: '100%',
    fontSize: 18,
    borderColor: '#4682B4',
    borderBottomWidth: 2
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4682B4',
    borderRadius: 15,
    marginTop: 40,
    marginBottom: 10,
  },
  text: {
    color: '#edf2f4',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  resultText: {
    fontSize: 18,
    color: '#ef233c',
    fontWeight: 'bold'
  },
  result: {
    fontSize: 48,
    color: '#ef233c',
    fontWeight: 'bold',
  }
});
