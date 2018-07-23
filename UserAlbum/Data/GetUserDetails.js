import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity
 
} from 'react-native';

const GetAllUserDetails='https://jsonplaceholder.typicode.com/users';
async function getUsers(params) {
    try{
        let response=await fetch(GetAllUserDetails);
        let responseJson=await response.json();
        return responseJson;
        
    }catch(error){
        console.error('Error is'+error);
    }
}
export {getUsers};