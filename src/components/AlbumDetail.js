import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const AlbumDetail = (props) => (
    <View>
      <View>
        <Image
          source={{
            uri: props.album.thumbnail_image,
            method: 'GET'
          }}
          style={{ width: 50, height: 50 }}
        />
        <Text>{props.album.title}</Text>
        <Text>{props.album.artist}</Text>
      </View>
      <View>
      <Image
        source={{
          uri: props.album.image,
          method: 'GET'
        }}
        style={{ width: 150, height: 150 }}
      />
      </View>
      <View>
        <Button onPress={null} title="Comprar" />
      </View>
    </View>
  );

export default AlbumDetail;
