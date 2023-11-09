import { StyleSheet, View, Image, TextInput } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_PLACES_API_KEY } from '../config/index';

export default function AddressSearch() {
  return (
    <View style={styles.addressContainer}>
      <Image source={{ uri: 'https://picsum.photos/24' }} style={styles.icon}></Image>
      <GooglePlacesAutocomplete
        placeholder="search properties"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        onFail={(err) => console.log('error: ', err)}
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en',
        }}
      />
      <Image source={{ uri: 'https://picsum.photos/24' }} style={styles.icon}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: 327,
    flexShrink: 0,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#EBEEF0',
    backgroundColor: '#FFF',
    shadowColor: '#005B98',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.12,
    elevation: 2,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
    flex: 0,
  },
});
