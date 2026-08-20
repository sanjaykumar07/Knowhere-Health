import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>GlucoCare</Text>
      <Text style={styles.subtitle}>Your health, simplified.</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Glucose</Text>
        <Text style={styles.value}>108 mg/dL</Text>
        <Text style={styles.status}>Latest reading</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Blood Pressure</Text>
        <Text style={styles.value}>128 / 82</Text>
        <Text style={styles.status}>Latest reading</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f7fb',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    color: '#666',
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 8,
  },
  status: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});