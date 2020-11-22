const { render } = require("@testing-library/react");


function Ajax(){
    let accessToken = 'e';
    let clientId = "05769ee72ff44c248a9c4abf0617ee68";
    let url = "https://accounts.spotify.com/authorize?client_id=05769ee72ff44c248a9c4abf0617ee68&redirect_uri=http://localhost:3000&scope=user-read-private%20user-read-email&response_type=token&state=123";
  /*  $.ajax({
        url: 'https://accounts.spotify.com/authorize?client_id=05769ee72ff44c248a9c4abf0617ee68&redirect_uri=http://localhost:3000&scope=user-read-private%20user-read-email&response_type=token&state=123',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
        success: function(response) {
            console.log('gg');
        }
    });
*/}

export default Ajax;
