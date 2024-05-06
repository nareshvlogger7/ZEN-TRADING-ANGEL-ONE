document.getElementById('loginButton').addEventListener('click', function() {
    var axios = require('axios');
    var data = JSON.stringify({
        "clientcode": "CLIENT_ID",
        "password": "CLIENT_PIN",
        "totp": "TOTP_CODE"
    });

    var config = {
        method: 'post',
        url: 'https://apiconnect.angelbroking.com/rest/auth/angelbroking/user/v1/loginByPassword',
        headers: {
            'Authorization': 'Bearer AUTHORIZATION_TOKEN',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-UserType': 'USER',
            'X-SourceID': 'WEB',
            'X-ClientLocalIP': '192.168.168.168',
            'X-ClientPublicIP': '106.193.147.98',
            'X-MACAddress': 'fe80::216e:6507:4b90:3719',
            'X-PrivateKey': 'dTd8R04O '
        },
        data: data
    };

    axios(config)
    .then(function(response) {
        console.log(JSON.stringify(response.data));
        // Check if login was successful
        if (response.data.status === true && response.data.message === "SUCCESS") {
            console.log("Login successful");
            // You can access the JWT token, refresh token, feed token from response.data.data
            var jwtToken = response.data.data.jwtToken;
            var refreshToken = response.data.data.refreshToken;
            var feedToken = response.data.data.feedToken;
            // Further processing with tokens if needed
        } else {
            console.log("Login failed"); // Or handle login failure
        }
    })
    .catch(function(error) {
        console.log(error);
    });
});
