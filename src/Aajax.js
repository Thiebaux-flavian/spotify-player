/* --------------------------------------------------------- */
/* --------------------------------------------------------- */
/* ------------- Ajax récupération du Parse  --------------- */
/* --------------------------------------------------------- */
/* --------------------------------------------------------- */
class Ajax {
    constructor(accessToken){
        this.accessToken = accessToken;
        this.get();
    }
    get(){
            console.log('coucou');
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
                    userData = response;
                    console.log('gg');
                    console.log(userData);
                    console.log(sendData);
                    this.data = userData;
                }
            });
        
        }
            }
    
}
