import React from "react";
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
  const participants = [
    "Yuri",
    "Ana",
    "Bruno",
    "Oscar",
    "Samurai",
    "Seto",
    "Leo",
    "Raimundo",
  ];
  function handleNameAdd() {
    if (participants.includes("Yuri")) {
      Alert.alert("Erro", "Participante já cadastrado!");
      return;
    }
  }
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>This is our homepage!</Text>
      <Text style={styles.subText}>This is our subtext!</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do evento"
          placeholderTextColor={"#6b6b6b"}
          keyboardType="default"
        />
        <TouchableOpacity style={styles.btn} onPress={handleNameAdd}>
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
