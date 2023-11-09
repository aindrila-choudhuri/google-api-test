import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import BrandName from './components/brand_name';
import AddressSearch from './components/address_search';
import { Link } from '@react-navigation/native';

export default function Page() {
  return (
    <View style={styles.container}>
      <BrandName />
      <AddressSearch />
      <Link to={{ screen: 'location-pointer' }} style={{ color: '#FFF' }}>
        Open location pointer page
      </Link>
      <Link to={{ screen: 'login' }} style={{ color: '#FFF' }}>
        Open login pointer page
      </Link>
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
