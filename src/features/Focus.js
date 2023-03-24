import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from '../components/RoundedButton'
import { spacing } from '../utils/sizes'

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="Focus Goal"
          onChangeText={setSubject}></TextInput>
          <View style={styles.buttonContainer}>
            <RoundedButton style={styles.button} title="+" size={50} onPress={() => addSubject(subject)} />
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm
  },
  container: {
  },
});
