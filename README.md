# React Native Grid Layout

This is a component for IOS and Android css grid layout. Can be installed in both Expo managed, bare and react-native cli


## Installation

```
yarn add @ogzhnaydn/react-native-grid-layout
```

```
npm install @ogzhnaydn/react-native-grid-layout
```

## Usage

### Props

| Props        | Required     | Description  |
| ------------- |:-------------:| -----:|
| bodyStyle     | false      | style the image container |
| numCols     | true      | the grid col count |
| numRows     | true      | the grid row count |


### Child Props

| Props        | Required     | Description  |
| ------------- |:-------------:| -----:|
| colStart     | true      | the component start column number |
| colEnd     | true      | the component end column number |
| rowStart     | true      | the component start row number |
| rowEnd     | true      | the component end row number |

### Show me the code - here it is below:

```js
import { StyleSheet, Text, View } from 'react-native';
import GridLayout from "@ogzhnaydn/react-native-grid-layout";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
            <GridLayout numCols={3} numRows={3}  bodyStyle={{ backgroundColor: "#1e232a"}}>
                <View colStart={1} colEnd={2} rowStart={1} rowEnd={1} style={{backgroundColor: "red"}}></View>
                <View colStart={3} colEnd={3} rowStart={1} rowEnd={1} style={{backgroundColor: "blue"}}></View>
                <View colStart={1} colEnd={2} rowStart={2} rowEnd={3} style={{backgroundColor: "black"}}></View>
                <View colStart={3} colEnd={3} rowStart={2} rowEnd={3} style={{backgroundColor: "white"}}></View>
            </GridLayout>
      </View>
    </View>
  );
}

```

### Contributions are welcomed, we are ready to review and merge them ASAP

### Do leave a GitHub Star
