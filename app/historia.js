import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing
} from "react-native";

export default function Page() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Origens",
      image: "https://manualdohomemmoderno.com.br/files/2020/06/plataforma-online-reune-quase-7-mil-jogos-gratis-antigos-dos-anos-80-90-00-plataforma-online-reune-quase-7-mil-jogos-gratis-antigos-dos-anos-80-90-00.jpg",
      text: "Os jogos online nasceram no final da década de 1970 em redes acadêmicas com jogos baseados em texto como o MUD1. Eles evoluíram para serviços comerciais pagos nos anos 80 e se popularizaram na década de 1990 com a chegada da internet pública, levando ao surgimento dos primeiros jogos multijogador gráficos e MMORPGs modernos."
    },
    {
      id: 2,
      title: "MMORPGs",
      image: "https://s2-techtudo.glbimg.com/ESaSrxS77_I8cLdR6zf9XYdpcTs=/0x0:695x390/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/m/d/q9aAeBQUuAELWILAvLZw/jogos-epoca-lan-house-jogar-2021-tibia-cipsoft.jpg",
      text: "Os MMORPGs evoluíram dos jogos de texto MUDs dos anos 70. Tornaram-se gráficos e comerciais no final dos anos 90, com Ultima Online e EverQuest pioneiros no gênero, que explodiu em popularidade global com World of Warcraft nos anos 2000."
    },
    {
      id: 3,
      title: "Gêneros Populares",
      image: "https://www.oficinadanet.com.br/imagens/post/32473/categorias-games.jpg",
      text: "Os gêneros de jogos online mais populares são os Jogos de Tiro (Valorant, Call of Duty), Battle Royale (Fortnite, PUBG), MOBA (League of Legends) e MMORPGs (World of Warcraft)."
    },
    {
      id: 4,
      title: "Marcos Importantes",
      image: "https://www.gamefoxhub.com.br/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fk1g3xmjq%2Fproduction%2Fe17f702da22af10d1147dea5d58d5febf8193c12-1562x653.webp%3Fauto%3Dformat&w=3840&q=75",
      text: "Os marcos importantes dos jogos online incluem a criação de MUD1 em 1978, a popularização do multijogador em rede local com Doom em 1993, o surgimento do MMORPG gráfico pioneiro Ultima Online em 1997, a massificação global do gênero por World of Warcraft em 2004 e a explosão do gênero Battle Royale com PUBG e Fortnite em 2017."
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>História dos Jogos Online</Text>
        <Text style={styles.headerSubtitle}>A evolução dos jogos multiplayer</Text>
      </View>

      {/* CARDS */}
      {cards.map((card) => (
        <AnimatedCard
          key={card.id}
          card={card}
          active={activeCard === card.id}
          onPress={() => setActiveCard(activeCard === card.id ? null : card.id)}
        />
      ))}

    </ScrollView>
  );
}

/* --- CARD ANIMADO --- */
function AnimatedCard({ card, active, onPress }) {
  const [animation] = useState(new Animated.Value(active ? 1 : 0));

  Animated.timing(animation, {
    toValue: active ? 1 : 0,
    duration: 300,
    easing: Easing.out(Easing.exp),
    useNativeDriver: false,
  }).start();

  const cardHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [170, 280], // card fechado maior → título sempre visível
  });

  const textOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <Animated.View style={[styles.card, { height: cardHeight }]}>

        {/* BANNER */}
        <View style={styles.bannerWrapper}>
          <Image source={{ uri: card.image }} style={styles.banner} />
        </View>

        {/* TÍTULO */}
        <Text style={styles.cardTitle}>{card.title}</Text>

        {/* DESCRIÇÃO EXPANDIDA */}
        <Animated.Text style={[styles.cardText, { opacity: textOpacity }]}>
          {card.text}
        </Animated.Text>

      </Animated.View>
    </TouchableOpacity>
  );
}

/* --- ESTILOS --- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4d2847",
  },

  /* HEADER */
  header: {
    padding: 20,
    alignItems: "flex-start",
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffb0f8",
  },
  headerSubtitle: {
    fontSize: 16,
    marginTop: 4,
    color: "#ffc9f4",
  },

  /* CARD */
  card: {
    backgroundColor: "#ffe6f9",
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 5,
    paddingBottom: 12,
  },

  bannerWrapper: {
    width: "100%",
    height: 90, // banner menor para dar espaço ao título
    overflow: "hidden",
  },

  banner: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4d2847",
    marginTop: 10,
    marginLeft: 14,
  },

  cardText: {
    fontSize: 14,
    color: "#cf8cc7",
    marginTop: 8,
    paddingHorizontal: 14,
  },
});
