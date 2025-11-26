import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function Page() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo ao OVERWATCH 2</Text>
        <Text style={styles.subtitle}>
          Aqui irei te contar, e te mostrar as coisas principais sobre esse jogo
        </Text>
      </View>

     {/*sobre o jogo*/}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre o Jogo</Text>

        <View style={styles.singleCardWrapper}>
          <View style={styles.singleCard}>
            <Image
              source={{ uri: "https://static.wikia.nocookie.net/overwatch/images/b/b7/OW2_Logo_Dark.webp/revision/latest?cb=20221203012359&path-prefix=pt-br" }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Sobre o Overwatch 2</Text>
            <Text style={styles.cardText}>
Overwatch 2 é um jogo online de ação em equipe grátis para jogar que se
 passa em um futuro otimista, no qual cada partida é um campo de batalha 5v5 definitivo. Jogue como uma lutadora da liberdade viajante do tempo, um DJ do campo batalha ou outro
 dos mais de 30 heróis únicos em suas lutas ao redor do mundo.            </Text>
          </View>
        </View>
      </View>

      {/*perso*/}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personagens</Text>

        <View style={styles.cardGrid}>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltf8e9415141b0ec36/631a8b65e7bdcf0dd996c8e1/1600_Dva.jpg" }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Herói 1</Text>
            <Text style={styles.cardText}>
              Descrição do personagem, habilidades e estilo de jogo.
            </Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{ uri: "https://via.placeholder.com/160x160" }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Herói 2</Text>
            <Text style={styles.cardText}>
              Outra descrição sobre o personagem escolhido.
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://via.placeholder.com/160x160" }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Herói 2</Text>
            <Text style={styles.cardText}>
              Outra descrição sobre o personagem escolhido.
            </Text>
          </View>
        </View>
      </View>

{/*função*/}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Funções</Text>

        <View style={styles.cardGrid}>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://via.placeholder.com/160x160" }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Herói 1</Text>
            <Text style={styles.cardText}>
              Descrição do personagem, habilidades e estilo de jogo.
            </Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{ uri: "https://via.placeholder.com/160x160" }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Herói 2</Text>
            <Text style={styles.cardText}>
              Outra descrição sobre o personagem escolhido.
            </Text>
          </View>
        </View>

          <View style={styles.card}>
            <Image
              source={{ uri: "https://via.placeholder.com/160x160" }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Herói 2</Text>
            <Text style={styles.cardText}>
              Outra descrição sobre o personagem escolhido.
            </Text>
          </View>
        </View>
      

      {/*gameplay*/}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Gameplay</Text>

        <View style={styles.cardGrid}>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://via.placeholder.com/160x160" }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Modos de Jogo</Text>
            <Text style={styles.cardText}>
              Explicação rápida sobre modos e regras.
            </Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{ uri: "https://via.placeholder.com/160x160" }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Estratégias</Text>
            <Text style={styles.cardText}>
              Dicas e formas de jogar melhor.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4d2847",
  },

  header: {
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 48,
    fontFamily: "Orbitron",
    fontWeight: "bold",
    color: "#ffb0f8",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 22,
    fontFamily: "Rajdhani",
    color: "#ffc9f4",
    marginTop: 8,
    textAlign: "center",
  },

  
  section: {
    padding: 24,
    backgroundColor: "#ffe6f9",
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 28,
    fontFamily: "Bungee",
    color: "#cf8cc7",
    marginBottom: 16,
    fontWeight: "bold"
  },

  
  singleCardWrapper: {
    alignItems: "center",
  },
  singleCard: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.09,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },

  
  cardGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
  },

  card: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 2,
  },

  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    backgroundColor: "#ccc",
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: "Bungee",
    marginTop: 10,
    color: "#cf8cc7",
    fontWeight: "bold"
  },
  cardText: {
    fontSize: 16,
    fontFamily: "Rajdhani",
    color: "#cf8cc7",
    marginTop: 6,
  },
});
