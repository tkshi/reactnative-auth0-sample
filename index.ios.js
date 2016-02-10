/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
var Button = require('react-native-button');
var Auth0Lock = require('react-native-lock-ios');
var lock = new Auth0Lock({clientId: "BzBQHnAFYCMcMQe4zofmIcRFKbLvv1S8", domain: "takashi-sample-qiita-edited.auth0.com"});

class twitter extends Component {
  _handlePress() {
    lock.show({
      connections: ['twitter', 'facebook','google']
    }, (err, profile, token) => {
      alert(profile.userId);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this._handlePress}
        >
          ログイン!
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('twitter', () => twitter);
