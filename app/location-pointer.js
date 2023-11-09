import { StyleSheet, Text, View } from 'react-native';
import { Link } from '@react-navigation/native';

export default function BrandName() {
  return (
    <View style={styles.container}>
      <Link to={{ screen: 'index' }}>Open home page</Link>
      <Text style={styles.text}>Location Pointer Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
