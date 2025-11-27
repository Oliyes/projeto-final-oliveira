import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView 
} from "react-native";
import {  } from '@expo-google-fonts/goblin-one';
import {  } from '@expo-google-fonts/mali';

export default function Page() {
  return (
    <ScrollView style={styles.container}>


      <Image 
        source={{ uri: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltdabc3782553659f1/6785b50a1970a9f14eb5ccd7/xboxshowcase.png" }} 
        style={styles.headerImage}
      />


      <View style={styles.header}>
        <Text style={styles.title}>Oii esse é o meu app</Text>
        <Text style={styles.subtitle}>Essa é a introdução</Text>

      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      >
        <Image style={styles.carouselImg} source={{ uri: "https://select.art.br/wp-content/uploads/2021/03/1.jpg" }} />
        <Image style={styles.carouselImg} source={{ uri: "https://pt.egw.news/_next/image?url=https%3A%2F%2Fegw.news%2Fuploads%2Fnews%2F1%2F17%2F1751052661752_1751052661753.webp&w=1920&q=75" }} />
        <Image style={styles.carouselImg} source={{ uri: "https://sm.ign.com/ign_br/screenshot/default/ow2-blizzcon-2019-screenshot-rio-lucio-1p-gameplay-01-png-jp_vbex.jpg" }} />
      </ScrollView>

    

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Sobre o app</Text>
        <Text style={styles.infoText}>
          Esse app, tem o objetivo de falar sobre o jogo Overwatch 2 e contar a vocês sobre a história dos jogos online,
           como surgiu e outras coisas...Espero que gostem  
        </Text>
      </View>

     

      <View style={{ height: 40 }} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4d2847",
    flex: 1,
  },

  headerImage: {
    width: "100%",
    height: 230,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
   
    shadowColor: "#ffe3fc",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5, 
  },

  header: {
    padding: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#ffb0f8",
  },

  subtitle: {
    marginTop: 5,
    fontSize: 18,
    color: "#ffc9f4",
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
   
    shadowColor: "#ffe3fc",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 30,
    elevation: 10, 
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
    shadowOpacity: 0.50,
    shadowRadius: 5,
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
    backgroundColor: "#ffe6f9",
    marginHorizontal: 20,
    marginTop: 30,
    padding: 20,
    borderRadius: 16,
    elevation: 3,
    
    shadowColor: "#ffe3fc",
    shadowOpacity: 0.30,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },

  infoTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#cf8cc7",
  },

  infoText: {
    fontSize: 16,
    marginTop: 10,
    color: "#cf8cc7",
    lineHeight: 22,
  },


});
