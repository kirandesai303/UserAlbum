import React, { Component } from 'react';

async function GetPhotos(itemId) {
    debugger;
    const GetPhotosDetails='https://jsonplaceholder.typicode.com/photos?albumId='+itemId;
    try{
        let response=await fetch(GetPhotosDetails);
        let responseJson=await response.json();
        return responseJson;
        
    }catch(error){
        console.error('Error is'+error);
    }
}
export {GetPhotos};