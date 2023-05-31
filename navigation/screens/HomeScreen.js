import React from "react";
import { View,Text } from "react-native";
import { WebView } from 'react-native-webview';

export default function HomeScreen(navigation) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ height: '100%', width:'100%' }}>
        <WebView source={{ uri: 'http://172.20.10.2:3001' }} 
        allowsBackForwardNavigationGestures
        nestedScrollEnabled = {true}
        scalesPageToFit={false}
        
        />
      </View>
        </View>
    );
}


/* */