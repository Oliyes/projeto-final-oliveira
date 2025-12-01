import { StyleSheet, Text, View, Image, Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import foto from "../assets/olizin.jpg";

export default function Page() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Sobre mim</Text>

      <View style={styles.card}>
        
        {/* FOTO */}
        <View style={styles.photoWrapper}>
          <Image source={foto} style={styles.foto} />
        </View>

        <View style={styles.infoBox}>
          <Info label="Nome" value="Ana Clara Oli" icon="person-circle-outline" />
          <Info label="RM" value="08308" icon="finger-print-outline" />
          <Info label="Endereço" value="Rua Marcondes, 15, Jd. Alvorada" icon="home-outline" />
          <Info label="Cidade" value="Presidente Venceslau" icon="business-outline" />
          <Info label="Estado" value="São Paulo" icon="flag-outline" />

          {/* BIO */}
          <Text style={styles.bio}>
            Sou apaixonada por tecnologia, games e design.  
            Adoro criar experiências bonitas, criativas e funcionais!
          </Text>

          {/* HABILIDADES */}
          <View style={styles.tagContainer}>
            {["React Native", "UI Design", "Criatividade", "Games"].map((item, i) => (
              <View key={i} style={styles.tag}>
                <Text style={styles.tagText}>{item}</Text>
              </View>
            ))}
          </View>

          {/* REDES SOCIAIS */}
          <View style={styles.socials}>
            <Ionicons name="logo-instagram" size={32} color="#C13584" />
            <Ionicons name="logo-github" size={32} color="#000" />
            <Ionicons name="logo-tiktok" size={32} color="#000" />
          </View>

        </View>

      </View>
    </View>
  );
}

/* Componente Info com ícone */
function Info({ label, value, icon }) {
  return (
    <View style={styles.infoRow}>
      <Ionicons name={icon} size={22} color="#7a1bb3" />
      <Text style={styles.subtitle}>
        <Text style={styles.bold}>{label}:</Text> {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#f7d6ff",
  },

  title: {
    fontSize: 42,
    fontWeight: "900",
    color: "#5a0a78",
    marginBottom: 30,
    textTransform: "uppercase",
    letterSpacing: 2,
  },

  card: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    padding: 25,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 6,

    flexDirection: Platform.OS === "web" ? "row" : "column",
    alignItems: "center",

    rowGap: 25, // substitui gap
  },

  photoWrapper: {
    borderWidth: 5,
    borderColor: "#d04eff",
    padding: 6,
    borderRadius: 150,

    shadowColor: "#d04eff",
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 12,
  },

  foto: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },

  infoBox: {
    flex: 1,
    width: "100%",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10, // substitui gap
    marginVertical: 4,
  },

  subtitle: {
    fontSize: 18,
    color: "#312244",
  },

  bold: {
    fontWeight: "bold",
    color: "#7a1bb3",
  },

  bio: {
    marginTop: 10,
    fontSize: 16,
    color: "#4a2f5c",
    lineHeight: 22,
  },

  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 10,   // substitui gap
    columnGap: 10,
    marginTop: 15,
  },

  tag: {
    backgroundColor: "#e9c6ff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },

  tagText: {
    color: "#5a0a78",
    fontWeight: "600",
  },

  socials: {
    flexDirection: "row",
    columnGap: 20, // substitui gap
    marginTop: 20,
    alignSelf: "center",
  },
});
