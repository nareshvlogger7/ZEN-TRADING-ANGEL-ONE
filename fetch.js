// Assuming you have the authentication token stored in a variable named authToken
const authToken = {
    "status": true,
    "message": "SUCCESS",
    "errorcode": "",
    "data": {
        "jwtToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIi...",
        "refreshToken": "eyJhbGciOiJIUzUxMiJ9.e...",
        "feedToken": "eyJhbGciOiJIUzUxMiJ9.eyJ1c2Vy…"
    }
};

// Fetch user details endpoint
const userDetailsUrl = "https://apiconnect.angelbroking.com/rest/secure/angelbroking/user/v1/getProfile";

// Headers with authentication token
const headers = {
    "Authorization": `Bearer ${authToken}`,
    "Content-Type": "application/json"
};

// Make a GET request to fetch user details
fetch(userDetailsUrl, {
    method: "GET",
    headers: headers
})
.then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
})
.then(data => {
    // Handle the user details data
    console.log(data);
})
.catch(error => {
    console.error("There was a problem with the fetch operation:", error);
});
