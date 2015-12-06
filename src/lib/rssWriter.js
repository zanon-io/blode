var constants = require('./constants');
var utils = require('./utils');

exports.writeRss = function(config, posts, callback) {

  var jadeTemplate = config.directory + constants.FILE_JADE_RSS;
  var rssPath = config.directory + constants.FILE_XML_RSS;

  posts.forEach(function(post) {
      post.longDate = utils.extractLongDate(post.date);
  });

  var file = [{
      locals: { posts: posts },
      name: rssPath
  }];

  utils.renderWithJade(file, jadeTemplate, function(err) {
      callback(err, posts);
  });
}
