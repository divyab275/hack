import ImagePicker from 'react-native-image-picker';
import React from 'react';
import { View, Button, TextInput, StyleSheet,Image,Text,Modal,TouchableHighlight,  Alert} from 'react-native'
// More info on all the options is below in the API Reference... just some common use cases shown here



const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info in the API Reference)
 */
const checkAllPermissions = async () => {
  try {
      await PermissionsAndroid.requestMultiple
      ([PermissionsAndroid.PERMISSIONS.CAMERA, PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE]);
      if ((await PermissionsAndroid.check('android.permission.CAMERA')) &&
          (await PermissionsAndroid.check('android.permission.CAMERA')) &&
          (await PermissionsAndroid.check('android.permission.CAMERA'))) {
          console.log('You can use the camera');
          return true;
      } else {
          console.log('all permissions denied');
          return false;
      }
  } catch (err) {
      console.warn(err);
  }
};
ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  } else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  } else {
    const source = { uri: response.uri };

    // You can also display the image using data:
    // const source = { uri: 'data:image/jpeg;base64,' + response.data };

    this.setState({
      avatarSource: source,
    });
  }
});
export default class Camer extends React.Component{
  render(){
    return(
      <View>
        <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
      </View>
    )
  }
}