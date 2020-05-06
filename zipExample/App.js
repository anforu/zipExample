/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { View, Text } from 'react-native';

import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive'

import { MainBundlePath, DocumentDirectoryPath } from 'react-native-fs'

const targetPath = `${DocumentDirectoryPath}/myFile.zip`
const sourcePath = DocumentDirectoryPath


export default class App extends Component {
  constructor(props) {
    super(props)
    this.compessZipFile()
   // this.decompessZipFile()
  }
  compessZipFile = () => {
    console.log('TargetPath:', targetPath)
    zip(sourcePath, targetPath)
      .then((path) => {
        console.log(`zip completed at ${path}`)
        this.decompessZipFile()
      })
      .catch((error) => {
        console.log('Error to try to decompess file', error)
      })
  }

  decompessZipFile = () => {
    unzip(targetPath, `${sourcePath}/new_files`)//with unzip(targetPath, sourcePath) show success but does not show any changes to the file
      .then((path) => {
        console.log(`unzip completed at ${path}`)
      })
      .catch((error) => {
        console.log('Error to unzip file',error)
      })
  }

  render(){
  return (
    <View >
      <Text > Hello, world!</Text>
    </View>
  )
}
}
