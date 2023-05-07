// Make a request to retrieve the posts
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function(response) {
    // Handle the successful response
    var posts = response.data;
    var postsContainer = document.getElementById('posts');

    // Loop through the posts
    posts.forEach(function(post) {
      // Create a div for each post
      var postDiv = document.createElement('div');
      postDiv.classList.add('post');

      // Create heading for the post title
      var postTitle = document.createElement('h2');
      postTitle.textContent = post.title;

      // Create paragraph for the post body
      var postBody = document.createElement('p');
      postBody.textContent = post.body;

      // Append the post title and body to the post div
      postDiv.appendChild(postTitle);
      postDiv.appendChild(postBody);

      // Append the post div to the posts container
      postsContainer.appendChild(postDiv);

      // Make a request to retrieve the comments for the current post
      axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + post.id)
        .then(function(response) {
          // Handle the successful response
          var comments = response.data;

          // Create a div for the comments
          var commentsDiv = document.createElement('div');
          commentsDiv.classList.add('comments');

          // Loop through the comments
          comments.forEach(function(comment) {
            // Create a div for each comment
            var commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');

            // Create heading for the comment name
            var commentName = document.createElement('h3');
            commentName.textContent = comment.name;

            // Create paragraph for the comment body
            var commentBody = document.createElement('p');
            commentBody.textContent = comment.body;

            // Append the comment name and body to the comment div
            commentDiv.appendChild(commentName);
            commentDiv.appendChild(commentBody);

            // Append the comment div to the comments div
            commentsDiv.appendChild(commentDiv);
          });

          // Append the comments div to the current post div
          postDiv.appendChild(commentsDiv);
        })
        .catch(function(error) {
          // Handle the error
          console.error(error);
        });
    });
  })
  .catch(function(error) {
    // Handle the error
    console.error(error);
  });
