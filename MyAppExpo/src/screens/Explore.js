import { Text, View } from "react-native";
import ExploreStyles from "./HomeStyles";

const Explore = ({ navigation }) => {
  return (
    <View style={ExploreStyles.container}>
      <Text onPress={() => navigation.navigate("Home")}>Explore</Text>
    </View>
  );
};

export default Explore;
