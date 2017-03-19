import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Route, Switch, Link } from 'react-router-native'

// components 
import CustomLink from './components/CustomLink'
import MainNav from './components/MainNav'

const Home = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Home</Text>
    <Text>Testing live reload, gr8 success!</Text>
    <CustomLink to="/content-page">Some content page</CustomLink>
  </View>
)

const About = () => (
  <View style={styles.container}>
    <Text style={styles.header}>About</Text>
    <Text>Testing live reload, gr8 success!</Text>
  </View>
)

const ViewNotFound = () => (
  <View style={styles.container}>
    <Text style={styles.header}>View not found</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
})

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <MainNav>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About} />
            <Route component={ViewNotFound} />
          </Switch>
        </MainNav>
      </NativeRouter>
    )
  }
}