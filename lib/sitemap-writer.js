var constants = require('./constants');
var utils = require('./utils');
var path = require('path');

exports.writeSitemap = function(config, posts, callback) {

  var jadeTemplate = path.join(config.directory, constants.FILE_JADE_SITEMAP);
  var sitemapPath = path.join(config.directory, constants.FILE_XML_SITEMAP);

  var lastDate;
  posts.forEach(function(post) {
      post.isoDate = utils.extractIsoDate(post.date);
      lastDate = post.isoDate; // since posts are ordered, lastDate will finish with the last value
  });

  var file = [{
      locals: { posts: posts, lastDate: lastDate},
      name: sitemapPath
  }];

  utils.renderWithJade(file, jadeTemplate, function(err) {
      callback(err, posts);
  });
};
