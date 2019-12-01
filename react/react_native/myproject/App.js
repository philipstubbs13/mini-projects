import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', key: '1' },
    { name: 'yoshi', key: '2' },
    { name: 'mario', key: '3' },
    { name: 'luigi', key: '4' },
    { name: 'peach', key: '5' },
    { name: 'toad', key: '6' },
    { name: 'bowser', key: '7' },
  ])
  const [name, setName] = useState('phil');
  const [age, setAge] = useState('30');
  const [person, setPerson] = useState({
    name: 'mario',
    age: 40
  });

  const clickHandler = () => {
    setName('chun-li');
    setPerson({ name: 'luigi', age: 45 });
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#777',
  //   padding: 8,
  //   margin: 10,
  //   width: 200
  // },
  // buttonContainer: {
  //   marginTop: 20
  // },
  // header: {
  //   backgroundColor: 'pink',
  //   padding: 20
  // },
  // boldText: {
  //   fontWeight: 'bold'
  // },
  // body: {
  //   backgroundColor: 'yellow',
  //   padding: 20,
  //   fontWeight: 'bold'
  // }
});


// <Text>Enter name:</Text>
// <TextInput
//   multiline
//   style={styles.input}
//   placeholder='e.g. John Doe'
//   onChangeText={(val) => setName(val)}
// />
// <Text>Enter age:</Text>
// <TextInput
//   keyboardType='numeric'
//   style={styles.input}
//   placeholder='e.g. 99'
//   onChangeText={(val) => setAge(val)}
// />
// <Text>name: {name}, age: {age}</Text>
// <Text>His name is {person.name} and his age is {person.age}</Text>
// <View style={styles.buttonContainer}>
//   <Button title='update state' onPress={clickHandler} />
// </View>