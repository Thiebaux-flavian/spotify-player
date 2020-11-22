import $ from 'jquery';
import App from "./App";
import Coucou from "./App";
const { render, getDefaultNormalizer } = require("@testing-library/react");

class Ajax{
        constructor(accessToken){
            this.accessToken = accessToken;
            this.get();
        }
        get(){
            
           
               //seek user let url='https://api.spotify.com/v1/users/julie';
                // Actual listing let urlactualy ='https://api.spotify.com/v1/me/player/currently-playing';
                let urlUser = "https://api.spotify.com/v1/me"; //ppl log
                $.ajax({
                    url: urlUser,
                    method: 'GET',
                    headers: {
                        'content-Type' : 'application/x-www-form-urlencoded',
                        'Authorization': 'Bearer ' + this.accessToken
                    },
                    success: function(response) {
                        console.log('salut');
               
                    }
          
                });
                
            }
                }
        


export default Ajax;
