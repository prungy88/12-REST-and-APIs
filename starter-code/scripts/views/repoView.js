(function(module) {
  var repoView = {};
  /* TODO: Let's compile our new handlebars template!
           Save the result of invoking Handlebars in this 'repoCompiler' variable
           that we will pass to the append method below. */
  var repoCompiler = function(r) {
    // console.log(Handlebars.compile($('#repo-template'));
    var template = Handlebars.compile($('#repo-template').text());
    return template(r);
  };
 //Finish the Handlebars method here!

  //logic to append the data

  repoView.renderRepos = function() {
    // console.log();
    $('#about ul').empty().append(
      repos.withTheAttribute('name') //TODO: experiment changing this attribute field, to see how it alters your collection
      .map(repoCompiler)
    );
  };
  /* TODO: Call the function that loads (or 'requests') our repo data. Pass in some view function as a higher order callback, so our repos will render after the data is loaded. */
  repos.requestRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);
