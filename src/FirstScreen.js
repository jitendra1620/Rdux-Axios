import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {plus, minus, getMovieData} from './Actions';
import axios from 'axios';
class FirstScreen extends Component {
  componentDidMount() {
    axios
      .get('https://facebook.github.io/react-native/movies.json?ID=12345')
      .then(
        function(response) {
          console.log(response.data);
          this.props.getMovieData(response.data.movies);
          console.log('testtestetste', this.props.arrMovies, 'gtom fsts');
        }.bind(this),
      )
      .catch(function(error) {
        console.log(error);
      });
  }
  _renderSectionListItem(item, index) {
    // eslint-disable-next-line react-native/no-inline-styles
    console.log('in render methods', item);
    return (
      <View style={{height: 50, backgroundColor:'yellow'}}>
      <Text>{item.title} </Text>
        <View style={{height: 8, backgroundColor: 'white', bottom: -9}} />
      </View>
    );
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          style={{flexDirection: 'column'}}
          data={this.props.arrMovies}
          extraData={this.props.arrMovies}
          renderItem={({item, index}) =>
            this._renderSectionListItem(item, index)
          }
        />
      </SafeAreaView>
    );
  }
}
const mapDispatchToProps = {
  plus,
  minus,
  getMovieData,
};
const mapStateToProps = state => {
  console.log('dfjg hjgj', JSON.stringify(state));
  return {
    count: state.myreducer.count,
    arrMovies: state.myreducer.arrMovies,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstScreen);
