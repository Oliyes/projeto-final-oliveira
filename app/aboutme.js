import { StyleSheet, Text, View, Image } from "react-native";
import foto from "../assets/olizin.jpg";


export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sobre mim</Text>
        <View>
         <Image source={foto} style={styles.foto}/>
        </View>
        <View>
         <Text style={styles.subtitle}>Segunda página</Text>
        </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#ffaeae",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 36,
    color: "#111519",
  },
  foto:{
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,

  }
});
