import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';

export default function App() {
  const[nome, setNome] = useState ("");
  const[telefone, setTelefone] = useState ("");
  const capturarNome = (textoDigitado) => {
    setNome(textoDigitado)
  }

  const capturarTelefone = (textoDigitado) => {
      setTelefone(textoDigitado)
  }

  const [contatos, setContatos] = useState ([]);
  const [contadorContatos, setContadorContatos] = useState(10);
  const adicionarContato = () => {
    console.log("Contato-Nome: " + nome);
    console.log("Contato-Telefone: " + telefone);
    setContatos (contatos => {
      console.log (contatos);
      setContadorContatos(contadorContatos + 2);
      return [
        {
          key: contadorContatos.toString(),
          value: {nome: nome, telefone: telefone}
        }, 
        ...contatos
      ];
      
    });
    
   
  }

    return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeTitle}>Digite um telefone valido</Text>
      </View>
      <View style={styles.lembreteView}>
        {}
        <TextInput 
          placeholder="Name"
          style={styles.lembreteTextInput}
          onChangeText={capturarNome}
          value={nome}
          
        />
        <TextInput 
          placeholder="Telefone..."
          style={styles.lembreteTextInput}
          onChangeText={capturarTelefone}
          value={telefone}
        />
        <TouchableOpacity
          style={styles.datailsButton}
          onPress={adicionarContato}
        >
          <Text style={styles.detailsButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={contatos}
            renderItem={
            contato => (
             <View style={styles.itemNaLista}>
              <Text style={styles.listaTitle}>{"Nome: " + contato.item.value.nome}</Text>
              <Text style={styles.listaPhone}>{"Telefone: " + contato.item.value.telefone}</Text>
            </View>
          )
        }
      />
    </View>
  );
}
