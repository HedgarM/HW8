document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const userImage = document.getElementById("userImage");
  const userName = document.getElementById('userName');
  const userBlog = document.getElementById('userBlog');
  const userCreated = document.getElementById('userCreated');

  userImage.innerHTML = '';
  userName.textContent = '';
  userBlog.textContent = '';
  userCreated.textContent = '';

  fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(userData => {
    const user = userData;
    console.log(user);
    userImage.innerHTML = `<img src="${user.avatar_url}" alt="${user.login}" width="100">`;
    userName.textContent = user.name;
    userBlog.textContent = user.blog;
    userCreated.textContent = new Date(user.created_at).toLocaleDateString();
  })
  .catch(err => {
    console.error(err.message);
  })
})