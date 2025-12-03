import { useRef, useEffect, useState } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  Animated, 
  TouchableOpacity, 
  Dimensions, 
  ImageBackground 
} from "react-native";

const { width } = Dimensions.get("window");

export default function Page() {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const [scaleAnim, setScaleAnim] = useState(new Animated.Value(1));  // Novo estado para o efeito de clique

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const games = [
    {
      title: "Evento da 19º temporada",
      img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/d0142847ab1c8f499173a075d240d10852f676fe/capsule_616x353_alt_assets_17.jpg?t=1763157251"
    },
    {
      title: "Capa Oficial",
      img: "https://bnetcmsus-a.akamaihd.net/cms/page_media/39/39CLP44LJ1NN1757586809181.png"
    },
    {
      title: "Overwatch 2 – Cinematic",
      img: "https://pt.egw.news/_next/image?url=https%3A%2F%2Fegw.news%2Fuploads%2Fnews%2F1%2F17%2F1751052661752_1751052661753.webp&w=1920&q=75"
    }
  ];

  // Função para animação de clique
  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#2c0f34" }}>
      
      <ImageBackground 
        source={{uri: "https://marketplace.canva.com/EAGLZvwV8tQ/1/0/900w/canva-purple-gradient-futuristic-background-instagram-story-1Y0dOdHbd08.jpg"}} // Exemplo de textura de fundo
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* --- NOVO HEADER --- */}
          <Animated.View 
            style={[ 
              styles.newHeader, 
              { opacity: fadeAnim, transform: [{ translateY: slideAnim }] } 
            ]}
          >
            <Image 
              source={{ uri: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltdabc3782553659f1/6785b50a1970a9f14eb5ccd7/xboxshowcase.png" }}
              style={styles.headerImg}
            />
            <View style={styles.headerOverlay}>
              <Text style={styles.headerTitle}>OVERWATCH 2</Text>
              <Text style={styles.headerDesc}>A nova geração de heróis!</Text>
            </View>
          </Animated.View>

          {/* --- BLOCOS DE DESTAQUE --- */}
          <Animated.View 
            style={[ 
              styles.sectionCard, 
              { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
            ]}
          >
            <Text style={styles.sectionTitle}>Destaques do Jogo</Text>
            <View style={styles.rowFeatures}>
              <View style={styles.featureBox}>
                <Text style={styles.featureNum}>38+</Text>
                <Text style={styles.featureLabel}>Heróis Jogáveis</Text>
              </View>
              <View style={styles.featureBox}>
                <Text style={styles.featureNum}>24</Text>
                <Text style={styles.featureLabel}>Mapas Ativos</Text>
              </View>
              <View style={styles.featureBox}>
                <Text style={styles.featureNum}>5v5</Text>
                <Text style={styles.featureLabel}>Novo Formato</Text>
              </View>
            </View>
          </Animated.View>

          {/* --- LISTA EM CARDS GRANDES COM TÍTULO VISÍVEL --- */}
          <Text style={styles.carouselTitle}>Conteúdos do App</Text>
          <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.carouselList}
            contentContainerStyle={{ paddingHorizontal: 14 }}
          >
            {games.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                activeOpacity={0.9}
                onPressIn={handlePressIn} 
                onPressOut={handlePressOut}
              >
                <Animated.View style={[styles.gameCard, { transform: [{ scale: scaleAnim }] }]}>
                  <Image source={{ uri: item.img }} style={styles.gameImg} />
                  <Text style={styles.gameTitle}>{item.title}</Text>
                </Animated.View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* --- SOBRE --- */}
          <Animated.View 
            style={[ 
              styles.aboutCard, 
              { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
            ]}
          >
            <Text style={styles.aboutTitle}>Sobre o App</Text>
            <Text style={styles.aboutText}>
              Este aplicativo foi criado para mostrar informações sobre Overwatch 2,
              mapas, heróis, história e curiosidades sobre o mundo dos games online.
            </Text>
          </Animated.View>

          <View style={{ height: 40 }} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  /* HEADER NOVO */
  newHeader: {
    width: "100%",
    height: 260,
    marginBottom: 20,
  },
  headerImg: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerOverlay: {
    position: "absolute",
    bottom: 25,
    left: 20,
  },
  headerTitle: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "900",
    textShadowColor: "#ff00c8",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  headerDesc: {
    fontSize: 18,
    color: "#ffd4f8",
    marginTop: 4,
    fontWeight: "600",
  },
  /* BLOCOS */
  sectionCard: {
    backgroundColor: "#ffe6f9",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 25,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#b45ba6",
    marginBottom: 18,
  },
  rowFeatures: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  featureBox: {
    backgroundColor: "#ffffff",
    width: width * 0.25,
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    elevation: 4,
  },
  featureNum: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#c44ab8",
  },
  featureLabel: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
    color: "#6a1b9a",
  },
  /* CARDS GRANDES HORIZONTAIS */
  carouselTitle: {
    color: "#ffd6f7",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    marginLeft: 20,
  },
  carouselList: {
    marginTop: 10,
  },
  gameCard: {
    width: width * 0.6,
    marginRight: 16,
    backgroundColor: "#ffe6f9",
    borderRadius: 20,
    paddingBottom: 10,
    elevation: 6,
  },
  gameImg: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  gameTitle: {
    marginTop: 8,
    fontWeight: "700",
    fontSize: 16,
    color: "#b34da7",
    textAlign: "center",
    paddingHorizontal: 6,
  },
  /* SOBRE */
  aboutCard: {
    backgroundColor: "#fedcff",
    marginHorizontal: 20,
    marginTop: 25,
    padding: 24,
    borderRadius: 25,
    elevation: 8,
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#cf8cc7",
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#6a1b9a",
  },
});
