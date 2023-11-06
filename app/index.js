import { StyleSheet, Text, View } from 'react-native';
import BrandName from './components/brand_name';

export default function Page() {
  return (
    <View style={styles.container}>
      <BrandName />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
