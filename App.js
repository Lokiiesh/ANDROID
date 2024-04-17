import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('lightgreen');  
  const [textColor, setTextColor] = useState('navy'); 

  const changeBackgroundColor = () => {
    setBackgroundColor(backgroundColor === 'lightgreen' ? 'lightcoral' : 'lightgreen');     
    setTextColor(textColor === 'navy' ? 'darkorange' : 'navy');  
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { fontFamily: 'Georgia', color: textColor }]}>Lokesh Kannan-22MIS1155</Text>
      <Button title="Background change" onPress={changeBackgroundColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    fontStyle: 'italic',
  },
});

export default App;
