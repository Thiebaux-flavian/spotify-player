import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import $ from 'jquery';
import App from "./App";
import Coucou from "./App";
const { render, getDefaultNormalizer } = require("@testing-library/react");

class Ajax {
        constructor(accessToken, idCurrentPlay){
            this.accessToken = accessToken;
            this.get();
            this.nowPlaying();
            this.check = 0;
            this.scopes = 'user-read-private user-read-email';
            this.idCurrent = idCurrentPlay;
        }
        get(){
               //seek user let url='https://api.spotify.com/v1/users/julie';
                
                let urlUser = "https://api.spotify.com/v1/me"; //ppl log
                $.ajax({
                   
                    url: urlUser,
                    method: 'GET',
                    headers: {
                        'content-Type' : 'application/x-www-form-urlencoded',
                        'Authorization': 'Bearer ' + this.accessToken
                    },
                    success: function(response) {
                        sessionStorage.setItem("name", response.display_name);
                        App(response);
                    }   
                });
                
        }
        nowPlaying(){
                let url ='https://api.spotify.com/v1/me/player/currently-playing';
                let idCurrent = this.idCurrent;
                
                $.ajax({
                
                url: url,
                method: 'GET',
                headers: {
                    'content-Type' : 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + sessionStorage.getItem("token")
                },
                success: function(response) {
                    console.log(response);
                    if (response.currently_playing_type == "track"){
                        console.log('on continu le proc');
                        let img = response.item.album.images[1].url;
                        let name = response.item.album.name;
                        let artist = response.item.artists[0].name;
                        console.log(img);
                        sessionStorage.setItem('currently_img', img);
                        sessionStorage.setItem('currently_name', name);
                        sessionStorage.setItem('currently_artist', artist);
                    }
                    else{
                        console.log("stop here");
                    }
                }

            });
        
        }    
}
        

            
export default Ajax;
