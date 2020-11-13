import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function Profile(){


    return(

        <SafeAreaView  style={styles.container}>
        <Text style={styles.text}  numberOfLines={4}>Profile
        </Text>
        
        
        <StatusBar style="auto" />
      </SafeAreaView>
    )
}
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#f1f1f1',
          alignItems: 'center',
          justifyContent: 'center',
         
        },
        text:{
      
          marginLeft: 40,
        marginRight: 40
        }
      });


      export default Profile