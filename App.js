import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Привет</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Здесь можно писать текст</Text>
      </View>
      <View style={styles.container}>
        <Button
          title="Кнопка"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'red',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#fff',
    borderRadius: 50,
  },
});
