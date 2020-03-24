/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';

import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive'

const targetPath = `${DocumentDirectoryPath}/myFile.zip`
const sourcePath = DocumentDirectoryPath

zip(sourcePath, targetPath)
.then((path) => {
  console.log(`zip completed at ${path}`)
})
.catch((error) => {
  console.error(error)
})

const App = () => {
  return (
    <View >
      <Text > Hello, world!</Text>
    </View>
  )
}

export default App;
