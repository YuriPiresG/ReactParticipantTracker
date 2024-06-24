import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function HomePage() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  function handleNameAdd(name: string) {
    if (participants.includes(name)) {
      Alert.alert("Erro", "Participante já cadastrado!");
      return;
    }
    setParticipants([...participants, name]);
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          setParticipants(
            participants.filter((participant) => participant !== name)
          );
          Alert.alert("Sucesso", "Participante removido com sucesso!");
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Tela de participantes</Text>
      <Text style={styles.subText}>registro de participantes</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do evento"
          placeholderTextColor={"#6b6b6b"}
          keyboardType="default"
          onChange={(e) => setName(e.nativeEvent.text)}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => handleNameAdd(name)}
        >
          <Text style={styles.btnTxt}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={{ color: "#fff" }}>Nenhum participante cadastrado</Text>
        )}
      />
    </View>
  );
}
