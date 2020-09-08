var getUserRepos = function(user) {
    // console.log("function was called");
    // fetch("https://api.github.com/users/octocat/repos");
      // format the GitHub api url
      var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // var response = fetch("https://api.github.com/users/octocat/repos").then(function(response) {
         // make a request to the url
        fetch(apiUrl).then(function(response) {
            response.json().then(function(data){
            console.log(data);
        });
        // console.log("inside", response)
    });
    // console.log("outside")
};

getUserRepos();

