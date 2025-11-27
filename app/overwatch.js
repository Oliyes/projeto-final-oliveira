import { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

export default function Page() {
  return (
    <ScrollView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo ao OVERWATCH 2</Text>
        <Text style={styles.subtitle}>
          Aqui irei te contar, e te mostrar as coisas principais sobre esse jogo
        </Text>
      </View>

      {/* SOBRE O JOGO - AJUSTADO AO CONTAINER */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre o Jogo</Text>

        <LargeHorizontalCard
          image="https://static.wikia.nocookie.net/overwatch/images/b/b7/OW2_Logo_Dark.webp/revision/latest?cb=20221203012359&path-prefix=pt-br"
          title="Sobre o Overwatch 2"
          text="Overwatch 2 é um jogo online de ação em equipe grátis que se passa em um futuro otimista, no qual cada partida é um campo de batalha 5v5."
        />
      </View>

      {/* PERSONAGENS — HORIZONTAL */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personagens</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <LargeHorizontalCard
            image="https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltf8e9415141b0ec36/631a8b65e7bdcf0dd996c8e1/1600_Dva.jpg"
            title="D.VA"
            text={`- Ex-gamer profissional.\n- Função: Tanque\n- Local: Busan\n- Idade: 21`}
            carousel
          />

          <LargeHorizontalCard
            image="https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt63636a99fbb886d0/66a3ccde518bb27c65883c5c/Juno_Red_Promise.jpg"
            title="Juno"
            text={`- Primeira humana nascida em Marte.\n- Função: Suporte\n- Local: Marte → Gibraltar\n- Idade: 19`}
            carousel
          />

          <LargeHorizontalCard
            image="https://cdna.artstation.com/p/assets/images/images/058/352/352/large/tim-moreels-cassidy-ingame-07.jpg?1673970173"
            title="Cassidy"
            text={`- Fora da lei.\n- Função: Dano\n- Local: Santa Fé\n- Idade: 39`}
            carousel
          />
        </ScrollView>
      </View>

      {/* FUNÇÕES — QUADRADOS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Funções</Text>

        <View style={styles.cardGrid}>
          <SquareInteractiveCard
            image="https://static.wikia.nocookie.net/overwatch/images/6/69/TankIcon.png"
            title="Tanque"
            text="Heróis tanque absorvem dano, rompem defesas e lideram o avanço do time."
          />

          <SquareInteractiveCard
            image="https://static.wikia.nocookie.net/overwatch/images/5/5f/SupportIcon.png"
            title="Suporte"
            text="Heróis de suporte curam, protegem e fortalecem aliados."
          />
        </View>

        <SquareInteractiveCard
          image="https://static.wikia.nocookie.net/overwatch/images/1/14/OffenseIcon.png"
          title="Dano"
          text="Heróis de dano eliminam inimigos rapidamente usando várias habilidades ofensivas."
        />
      </View>

      {/* MODOS DE JOGO — QUADRADOS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Modos de Jogo</Text>

        <View style={styles.cardGrid}>
          <SquareInteractiveCard
            image="https://static.wikia.nocookie.net/overwatch/images/5/52/EscortMap.jpg"
            title="Jogo Rápido (Quick Play)"
            text=" É o modo mais popular e acessível, ideal para jogadores que buscam 
            partidas rápidas e casuais sem a pressão de uma classificação. É a melhor
             forma de praticar heróis, aprender mapas e se divertir de forma 
             descompromissada."
          />

          <SquareInteractiveCard
            image="https://static.wikia.nocookie.net/overwatch/images/b/bf/HybridMap.jpg"
            title="Híbrido"
            text="Primeiro captura o ponto e depois escolta a carga."
          />

          <SquareInteractiveCard
            image="https://static.wikia.nocookie.net/overwatch/images/f/fc/ControlMap.jpg"
            title="Controle"
            text="As equipes disputam o controle de um único ponto."
          />

          <SquareInteractiveCard
            image="https://static.wikia.nocookie.net/overwatch/images/8/85/PushMap.jpg"
            title="Avanço"
            text="Ambas as equipes tentam empurrar o robô até o lado inimigo."
          />
        </View>
      </View>
    </ScrollView>
  );
}

/* CARD GRANDE, HORIZONTAL */
function LargeHorizontalCard({ image, title, text, carousel }) {
  const [showText, setShowText] = useState(false);

  return (
    <View style={carousel ? styles.horizontalCardCarousel : styles.horizontalCard}>
      <TouchableOpacity onPress={() => setShowText(!showText)}>
        <Image
          source={{ uri: image }}
          style={carousel ? styles.horizontalImageCarousel : styles.horizontalImage}
        />
      </TouchableOpacity>

      <Text style={styles.cardTitle}>{title}</Text>

      {showText && <Text style={styles.cardText}>{text}</Text>}
    </View>
  );
}

/* CARD QUADRADO */
function SquareInteractiveCard({ image, title, text }) {
  const [showText, setShowText] = useState(false);

  return (
    <View style={styles.squareCard}>
      <TouchableOpacity onPress={() => setShowText(!showText)}>
        <Image source={{ uri: image }} style={styles.squareImage} />
      </TouchableOpacity>

      <Text style={styles.cardTitle}>{title}</Text>

      {showText && <Text style={styles.cardText}>{text}</Text>}
    </View>
  );
}

/* ESTILOS */
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
    fontSize: 42,
    color: "#ffb0f8",
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 20,
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
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 28,
    color: "#cf8cc7",
    fontWeight: "bold",
    marginBottom: 16,
  },

  /* CARD HORIZONTAL - SOBRE O JOGO */
  horizontalCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 12,
    marginBottom: 15,
    elevation: 3,
  },

  horizontalImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    backgroundColor: "#ccc",
  },

  /* CARD HORIZONTAL - CARROSSEL */
  horizontalCardCarousel: {
    width: 260,
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 12,
    marginRight: 14,
    marginBottom: 15,
    elevation: 3,
  },

  horizontalImageCarousel: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    backgroundColor: "#ccc",
  },

  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  /* CARD QUADRADO */
  squareCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 12,
    marginBottom: 15,
    elevation: 3,
  },

  squareImage: {
    width: "100%",
    height: 120,
    borderRadius: 12,
  },

  cardTitle: {
    fontSize: 20,
    color: "#cf8cc7",
    marginTop: 10,
    fontWeight: "bold",
  },

  cardText: {
    fontSize: 16,
    color: "#cf8cc7",
    marginTop: 6,
  },
});
