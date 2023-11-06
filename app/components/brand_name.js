import { StyleSheet, Text, View } from 'react-native';

export default function BrandName() {
  return (
    <View>
      <Text style={styles.text}>Qur8</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
    fontFamily: 'Impact',
    fontSize: '54px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
});
