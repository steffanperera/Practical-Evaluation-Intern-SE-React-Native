import { Text, View } from "react-native";
import ProfileStyles from "./HomeStyles";

const Profile = ({ navigation }) => {
  return (
    <View style={ProfileStyles.container}>
      <Text onPress={() => navigation.navigate("Home")}>Profile</Text>
    </View>
  );
};

export default Profile;
