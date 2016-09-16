var classify, filterPosts, insertMarkdown, toggleNav;

classify = function() {
  var path;
  path = window.location.pathname.split('/')[1];
  return document.getElementsByTagName('body')[0].className = path || 'home';
};

toggleNav = function(event) {
  var nav;
  event.preventDefault();
  nav = document.getElementsByTagName('nav')[0];
  if (nav.className === 'show') {
    return nav.className = '';
  } else {
    return nav.className = 'show';
  }
};

filterPosts = function() {
  var i, j, len, len1, post, posts, query, results, results1;
  query = document.getElementById('search').value.toLowerCase();
  posts = document.getElementsByClassName('searchable');
  if (query.length > 0) {
    results = [];
    for (i = 0, len = posts.length; i < len; i++) {
      post = posts[i];
      results.push((function(post) {
        if (post.children[1].innerHTML.toLowerCase().indexOf(query) > -1) {
          return post.style.display = 'block';
        } else {
          return post.style.display = 'none';
        }
      })(post));
    }
    return results;
  } else {
    results1 = [];
    for (j = 0, len1 = posts.length; j < len1; j++) {
      post = posts[j];
      results1.push((function(post) {
        return post.style.display = 'block';
      })(post));
    }
    return results1;
  }
};

insertMarkdown = function(from, into) {
  var xhr;
  xhr = new XMLHttpRequest();
  xhr.open('GET', from);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      return document.getElementById(into).innerHTML = marked(xhr.responseText);
    }
  };
  return xhr.send();
};
