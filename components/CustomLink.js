import React, { Component } from 'react'
import { Link } from 'react-router-native'
import { StyleSheet, Text, View } from 'react-native'

class CustomLink extends Component {
	render(){
		return (
			<Link to={this.props.to}>
				<Text style={[styles.link, this.props.style || {}]}>
					{this.props.children}
				</Text>
			</Link>
		)
	}
}

const styles = StyleSheet.create({
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
})

export default CustomLink