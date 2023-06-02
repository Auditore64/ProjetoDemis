
import { Button, Image, StyleSheet, Text, View } from "react-native";

const Tela2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                Você está na Tela 2
            </Text>
            <Text style={styles.texto}>
                Este é Eric Cartman
            </Text>
            <Image style={styles.imagens}
                source={require('../componentes/images/cart.webp')}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "lightpink",
    },
    texto: {
        color: 'black',
        fontSize: 30,
        marginBottom: 15,
        alignSelf: "center",
    },
    separador: {
        alignSelf: "center",
        marginBottom: 20,
    },
    imagens: {
        marginTop: 20,
        alignSelf: "center",
        width: 400,
        height: 400,
    }
});

export default Tela2;