class BlogPost {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.createdAt = new Date();
  }

  editPost(newTitle, newContent) {
    this.title = newTitle;
    this.content = newContent;
    this.updatedAt = new Date();
  }
}


class BlogUser {
  constructor(username, fullName) {
    this.username = username;
    this.fullName = fullName;
    this.posts = [];
  }

  createPost(title, content) {
    const post = new BlogPost(title, content, this.fullName);
    this.posts.push(post);
    console.log(`Post "${title}" created by ${this.fullName}.`);
  }

  editPost(index, newTitle, newContent) {
    if (index >= 0 && index < this.posts.length) {
      this.posts[index].editPost(newTitle, newContent);
      console.log(`Post "${this.posts[index].title}" has been edited.`);
    } 
    else {
      console.log('Post not found.');
    }
  }

  deleteLastPost() {
    if (this.posts.length > 0) {
      const deletedPost = this.posts.pop();
      console.log(`Post "${deletedPost.title}" has been deleted.`);
    } 
    else {
      console.log('No posts to delete.');
    }
  }

  displayPosts() {
    if (this.posts.length === 0) {
      console.log(`${this.fullName} has no posts.`);
    } 
    else {
      console.log(`${this.fullName}'s posts:`);
      this.posts.forEach((post, index) => {
        console.log(`${index + 1}. ${post.title} (Created: ${post.createdAt})`);
      });
    }
  }
}

// Two BlogUser
const user1 = new BlogUser('andrea', 'Andrea Hennig');
const user2 = new BlogUser('sharon', 'Sharon Botha');

// User1 posts
user1.createPost('First Blog Post', 'This will be my first blog post.');
user1.createPost('Second Blog Post', 'This wil be my second blog post.');

// User2 posts
user2.createPost('Sharon’s blog post', 'Learning how to blog.');
user2.createPost('Blogging Tips', 'Tips on how to blog faster.');

// Display posts for both
user1.displayPosts();
user2.displayPosts();

// User1 edits blog post
user1.editPost(0, 'Updated First Blog Post', 'This will be the updated blog post.');

// Display edited post
user1.displayPosts();

// User2 deletes last post
user2.deleteLastPost();

// Display User2 post
user2.displayPosts();


// Post "First Blog Post" created by Andrea Hennig.
// Post "Second Blog Post" created by Andrea Hennig.

// Post "Sharon’s blog post" created by Sharon Botha.
// Post "Blogging Tips" created by Sharon Botha.

// Andrea Hennig's posts:
// 1. First Blog Post (Created: Thu Sep 19 2024 08:30:37 GMT+0200 (South Africa Standard Time))
// 2. Second Blog Post (Created: Thu Sep 19 2024 08:30:37 GMT+0200 (South Africa Standard Time))

// Sharon Botha's posts:
// 1. Sharon’s blog post (Created: Thu Sep 19 2024 08:30:37 GMT+0200 (South Africa Standard Time))
// 2. Blogging Tips (Created: Thu Sep 19 2024 08:30:37 GMT+0200 (South Africa Standard Time))

// Post "Updated First Blog Post" has been edited.

// Andrea Hennig's posts:
// 1. Updated First Blog Post (Created: Thu Sep 19 2024 08:30:37 GMT+0200 (South Africa Standard Time))
// 2. Second Blog Post (Created: Thu Sep 19 2024 08:30:37 GMT+0200 (South Africa Standard Time))

// Post "Blogging Tips" has been deleted.

// Sharon Botha's posts:
// 1. Sharon’s blog post (Created: Thu Sep 19 2024 08:30:37 GMT+0200 (South Africa Standard Time))