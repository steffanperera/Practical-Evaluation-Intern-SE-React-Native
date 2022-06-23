import { Text, View } from "react-native";
import HomeStyles from "./HomeStyles";

const Home = ({ navigation }) => {
  return (
    <View style={HomeStyles.container}>
      <Text onPress={() => alert("Home")}>Home</Text>
    </View>
  );
};

export default Home;
