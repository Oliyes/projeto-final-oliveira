import { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Audio } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";

export default function Page() {

  const [showBio, setShowBio] = useState(false);
  const [showHobbies, setShowHobbies] = useState(false);
  const [showMusic, setShowMusic] = useState(false);

  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (showMusic) loadSound();
    return () => unloadSound();
  }, [showMusic]);

  async function loadSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/aoikoidaidaro.mp3")
    );
    setSound(sound);
  }

  async function unloadSound() {
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
      setIsPlaying(false);
    }
  }

  async function handlePlayPause() {
    if (!sound) return;
    if (isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  }

  return (
    <ImageBackground
      source={{ uri: "https://marketplace.canva.com/EAGLZvwV8tQ/1/0/900w/canva-purple-gradient-futuristic-background-instagram-story-1Y0dOdHbd08.jpg" }}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Sobre Mim</Text>
          <Text style={styles.headerSubtitle}>
            Conheça um pouco mais sobre quem eu sou
          </Text>
        </View>

        {/* FOTO */}
        <View style={styles.photoWrapper}>
          <Image
            style={styles.profileImage}
            source={require("../assets/oli.jpg")}
          />
        </View>

        <View style={styles.center}>
          <Text style={styles.name}>Ana Clara</Text>
        </View>

        {/* SOBRE MIM */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.cardButton} onPress={() => setShowBio(!showBio)}>
            <Text style={styles.cardButtonText}>Sobre mim</Text>
          </TouchableOpacity>

          {showBio && (
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>
                Eu sou estudante do 2º Info, meu nome é Ana Clara Oliveira, tenho 16 anos,
                e pra falar a verdade, eu não gostava muito de programar. Porém, com esse projeto,
                me diverti bastante pesquisando e conhecendo mais funções.
              </Text>
            </View>
          )}
        </View>

        {/* HOBBIES */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.cardButton} onPress={() => setShowHobbies(!showHobbies)}>
            <Text style={styles.cardButtonText}>Meus Hobbies</Text>
          </TouchableOpacity>

          {showHobbies && (
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>
                No momento, meu hobbie favorito é descansar e passar tempo com meu namorado.
              </Text>
            </View>
          )}
        </View>

        {/* MÚSICA */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.cardButton} onPress={() => setShowMusic(!showMusic)}>
            <Text style={styles.cardButtonText}>Minha Música Favorita</Text>
          </TouchableOpacity>

          {showMusic && (
            <View style={styles.albumBlock}>
              <Image
                source={require("../assets/aoikoi.jpg")}
                style={styles.albumCover}
              />

              <Text style={[styles.cardText, { marginTop: 10 }]}>
                Aoi, Koi, Daiidaro No Hi — Mass of Fermenting Dregs
              </Text>

              <TouchableOpacity style={styles.musicButton} onPress={handlePlayPause}>
                {isPlaying ? (
                  <MaterialIcons name="pause-circle-filled" size={32} color="#4d2847" />
                ) : (
                  <MaterialIcons name="play-circle-filled" size={32} color="#4d2847" />
                )}
              </TouchableOpacity>
            </View>
          )}
        </View>

      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    alignItems: "center",
    padding: 24,
  },

  headerTitle: {
    fontSize: 42,
    color: "#ffb0f8",
    fontWeight: "bold",
    textAlign: "center",
  },

  headerSubtitle: {
    fontSize: 20,
    color: "#ffc9f4",
    marginTop: 8,
    textAlign: "center",
  },

  photoWrapper: {
    alignItems: "center",
    marginTop: 10,
  },

  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#ffe6f9",
  },

  center: {
    alignItems: "center",
    marginVertical: 15,
  },

  name: {
    fontSize: 30,
    color: "#ffe6f9",
    fontWeight: "bold",
  },

  section: {
    padding: 20,
    backgroundColor: "#ffe6f9",
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 16,
    elevation: 3,
  },

  cardButton: {
    backgroundColor: "#ffb0f8",
    padding: 14,
    borderRadius: 12,
  },

  cardButtonText: {
    fontSize: 20,
    color: "#4d2847",
    fontWeight: "bold",
  },

  cardContent: {
    marginTop: 12,
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
  },

  cardText: {
    color: "#cf8cc7",
    fontSize: 16,
    textAlign: "center",
  },

  albumBlock: {
    marginTop: 12,
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  albumCover: {
    width: 170,
    height: 170,
    borderRadius: 12,
  },

  musicButton: {
    backgroundColor: "#ffb0f8",
    padding: 5,
    borderRadius: 10,
    marginTop: 12,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
