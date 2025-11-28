import { useRef, useEffect } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  Animated, 
  TouchableOpacity, 
  Dimensions 
} from "react-native";

const { width } = Dimensions.get("window");

export default function Page() {

  // animação usada apenas no carrossel e no texto
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

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

  return (
    <View style={{ flex: 1, backgroundColor: "#2c0f34" }}>
      
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.headerWrapper}>
          <Image 
            source={{ uri: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltdabc3782553659f1/6785b50a1970a9f14eb5ccd7/xboxshowcase.png" }} 
            style={styles.headerImage}
          />

          <Animated.View 
            style={[
              styles.headerTextContainer, 
              { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
            ]}
          >
            <Text style={styles.title}>OVERWATCH 2</Text>
            <Text style={styles.subtitle}>Explore, jogue e descubra os heróis!</Text>
          </Animated.View>
        </View>

        {/* CARROSSEL */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          {[
            "https://select.art.br/wp-content/uploads/2021/03/1.jpg",
            "https://pt.egw.news/_next/image?url=https%3A%2F%2Fegw.news%2Fuploads%2Fnews%2F1%2F17%2F1751052661752_1751052661753.webp&w=1920&q=75",
            "https://sm.ign.com/ign_br/screenshot/default/ow2-blizzcon-2019-screenshot-rio-lucio-1p-gameplay-01-png-jp_vbex.jpg"
          ].map((uri, i) => (
            <TouchableOpacity key={i} activeOpacity={0.9}>
              <Animated.Image 
                source={{ uri }}
                style={[
                  styles.carouselImg,
                  {
                    transform: [
                      { scale: fadeAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.95, 1]
                        })
                      }
                    ]
                  }
                ]}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* SOBRE */}
        <Animated.View 
          style={[
            styles.infoCard, 
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
          ]}
        >
          <Text style={styles.infoTitle}>Sobre o App</Text>
          <Text style={styles.infoText}>
            Esse app tem o objetivo de falar sobre o jogo Overwatch 2 e contar a vocês 
            sobre a história dos jogos online, como surgiu e outras coisas... 
            Esperamos que gostem!
          </Text>
        </Animated.View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    position: "relative",
    marginBottom: 20,
  },

  headerImage: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerTextContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },

  title: {
    fontSize: 38,
    color: "#ffeb3b",
    fontWeight: "900",
    textTransform: "uppercase",
    textShadowColor: "#ff00c8",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 12,
  },

  subtitle: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "600",
    marginTop: 5,
    textShadowColor: "#ff00c8",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 8,
  },

  carousel: {
    marginTop: 15,
  },

  carouselImg: {
    width: width * 0.7,
    height: 180,
    borderRadius: 20,
    marginRight: 16,
    elevation: 10,
  },

  infoCard: {
    backgroundColor: "#ffe6f9",
    marginHorizontal: 20,
    marginTop: 20,
    padding: 24,
    borderRadius: 25,
    elevation: 8,
  },

  infoTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#cf8cc7",
    marginBottom: 12,
  },

  infoText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#6a1b9a",
  },
});
