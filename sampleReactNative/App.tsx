import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, Alert} from 'react-native';

import CustomButton from 'sharing-components/atoms/button';
import CustomTypography from 'sharing-components/atoms/typography';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" />
      <View>
        <View style={{padding: 15}}>
          <CustomTypography variant="header">Header Text</CustomTypography>
          <CustomTypography variant="subheader">
            Subheader Text
          </CustomTypography>
          <CustomTypography variant="body">Body Text</CustomTypography>
          <CustomTypography variant="caption">Caption Text</CustomTypography>
        </View>
        <View style={{padding: 15}}>
          <CustomButton
            title="Click Me"
            onPress={() => Alert.alert('Button pressed!')}
            style={{backgroundColor: '#b8446a'}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
