var filterPosts, getUnderservedEpisodeID, getUnderservedEpisodeTitleAndDescription, insertMarkdown, toggleNav, underserved;

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

if (window.deferredInline) {
  window.deferredInline.forEach(function(runnable) {
    return runnable();
  });
}

getUnderservedEpisodeID = function() {
  var xhr;
  xhr = new XMLHttpRequest();
  xhr.open('GET', "http://underserved.libsyn.com/");
  xhr.onreadystatechange = function() {
    var id;
    if (xhr.readyState === 4) {
      id = xhr.responseText.match(/id\/(.*?)\/height/g)[0].replace('id/', '').replace('/height', '');
      return document.getElementById("underserved-player").setAttribute('src', "//html5-player.libsyn.com/embed/episode/id/" + id + "/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/87A93A/");
    }
  };
  return xhr.send();
};

getUnderservedEpisodeTitleAndDescription = function() {
  var xhr;
  xhr = new XMLHttpRequest();
  xhr.open('GET', "https://underserved.libsyn.com/rss");
  xhr.onreadystatechange = function() {
    var description, title;
    if (xhr.readyState === 4) {
      title = xhr.responseText.match(/<itunes:title>(.*?)\<\/itunes:title>/g)[0].replace('<itunes:title>', '').replace('</itunes:title>', '');
      description = xhr.responseText.match(/<description><!\[CDATA\[<p>(.*?)\<\/p>/g)[0].replace('<description><![CDATA[<div>', '').replace('</div>', '');
      document.getElementById("underserved-title").innerHTML = "What's New: Underserved, " + title;
      return document.getElementById("underserved-description").innerHTML = description;
    }
  };
  return xhr.send();
};

underserved = document.getElementById("underserved");

if (underserved !== null) {
  getUnderservedEpisodeID();
  getUnderservedEpisodeTitleAndDescription();
}
