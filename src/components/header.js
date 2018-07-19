//Import a Library to help crate a component
import React from 'react';
import { Text, View } from 'react-native';

//Create a component
  const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
  };

const styles = {
  viewStyle: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 5,
    paddingBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 24,
  }
};

//Render it to Device
export default Header;
