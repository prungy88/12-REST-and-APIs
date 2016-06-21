//the model layer for the repos
(function(module) {
  // create repos object
  var repos = {};
  //create array that will hold all repos from our request
  repos.allRepos = [];

  repos.requestRepos = function(callback) {
    /* TODO: How would you like to fetch your repos? Someone say AJAX?
      Do not forget to call the callback. Be careful to wait until the repos are requested, before you call callback function (which will actually render to page) */
    $.ajax({
      url: 'https://api.github/users/prungy88/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data) {
        callback(data);
      }
    });
  };

  //filter repos based on given attribute
  repos.withTheAttribute = function(myAttr) {
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };
  //expose repos object to the window
  module.repos = repos;
})(window);
