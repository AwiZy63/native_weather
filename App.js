import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.current_day}>Sun Jan 13 2019</Text>
        <View style={styles.current_weather_data}>
          <View style={styles.current_weather_data_value_left}>
            <Text style={styles.current_temp}>19°</Text>
            <Text style={styles.current_temp_feel}>12°</Text>
          </View>
          <View style={styles.current_weather_data_value_right}>
            <Image style={styles.current_weather_icon} source={{ uri: 'https://img.icons8.com/ios/452/cloud.png' }} />
            <Text style={styles.current_weather}>Cloud</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
  },
  header: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    height: 220,
    backgroundColor: '#1045a0',
  },
  current_weather_data: {
    flex: 1,
    flexDirection: 'row',
  },
  current_weather_data_value_right: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  current_weather_data_value_left: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  current_day: {
    fontSize: 18,
    marginBottom: 5,
    color: 'white',

  },
  current_weather: {
    fontSize: 20,
    color: 'white',

  },
  current_weather_icon: {
    tintColor: 'white',
    width: 100,
    height: 100,

  },
  current_temp: {
    fontSize: 60,
    color: 'white',

  },
  current_temp_feel: {
    color: 'white',
    fontSize: 30,

  },
});
