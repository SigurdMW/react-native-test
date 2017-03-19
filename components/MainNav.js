import React, { Component } from 'react'
import { Link } from 'react-router-native'
import { StyleSheet, Text, View } from 'react-native'

class MainNav extends Component {
	render(){
		return (
			  <View style={styles.container}>
			    <View style={styles.nav}>
			      <Link
			        to="/"
			        underlayColor='#f0f4f7'
			        style={styles.navItem}>
			          <Text>Home</Text>
			      </Link>
			      <Link
			        to="/about"
			        underlayColor='#f0f4f7'
			        style={styles.navItem}>
			          <Text>About</Text>
			      </Link>
			      <Link
			        to="/topics"
			        underlayColor='#f0f4f7'
			        style={styles.navItem} >
			          <Text>Topics</Text>
			      </Link>
			    </View>
			    {this.props.children}
			  </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }
})

export default MainNav