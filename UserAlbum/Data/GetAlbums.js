import React, { Component } from 'react';

async function getUserAlbum(itemId) {
    debugger;
    const GetUserAlbumsDetails='https://jsonplaceholder.typicode.com/albums?userId='+itemId;
    try{
        let response=await fetch(GetUserAlbumsDetails);
        let responseJson=await response.json();
        return responseJson;
        
    }catch(error){
        console.error('Error is'+error);
    }
}
export {getUserAlbum};