import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView 
} from "react-native";

export default function Page() {
  return (
    <ScrollView style={styles.container}>

      {/* IMAGEM DE CAPA */}
      <Image 
        source={{ uri: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltdabc3782553659f1/6785b50a1970a9f14eb5ccd7/xboxshowcase.png" }} 
        style={styles.headerImage}
      />

      {/* TÍTULO */}
      <View style={styles.header}>
        <Text style={styles.title}>Bem vindo 👋</Text>
        <Text style={styles.subtitle}>Explore o aplicativo</Text>
      </View>

      {/* CARROSSEL DE IMAGENS (simples) */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      >
        <Image style={styles.carouselImg} source={{ uri: "https://picsum.photos/300/200?1" }} />
        <Image style={styles.carouselImg} source={{ uri: "https://picsum.photos/300/200?2" }} />
        <Image style={styles.carouselImg} source={{ uri: "https://picsum.photos/300/200?3" }} />
      </ScrollView>

    

      {/* CARD DE INFORMAÇÃO */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Informações</Text>
        <Text style={styles.infoText}>
          Aqui você pode personalizar a tela inicial com imagens, componentes e 
          botões. Essa é uma base bonita e moderna para evoluir seu app.  
        </Text>
      </View>

     

      {/* ESPAÇAMENTO FINAL */}
      <View style={{ height: 40 }} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eef4ff",
    flex: 1,
  },

  headerImage: {
    width: "100%",
    height: 230,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  header: {
    padding: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#0a284b",
  },

  subtitle: {
    marginTop: 5,
    fontSize: 18,
    color: "#3b5673",
  },

  carousel: {
    marginTop: 10,
    paddingLeft: 10,
  },

  carouselImg: {
    width: 220,
    height: 140,
    borderRadius: 16,
    marginRight: 12,
  },

  shortcuts: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 25,
  },

  shortcutCard: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  shortcutEmoji: {
    fontSize: 32,
  },

  shortcutText: {
    marginTop: 8,
    fontSize: 14,
    color: "#333",
  },

  infoCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 30,
    padding: 20,
    borderRadius: 16,
    elevation: 3,
  },

  infoTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#123456",
  },

  infoText: {
    fontSize: 16,
    marginTop: 10,
    color: "#444",
    lineHeight: 22,
  },

  mainButton: {
    backgroundColor: "#0057ff",
    marginHorizontal: 20,
    marginTop: 30,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  mainButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
