const linksSocialMedia = {
  github: "wagnermor",
  twitter: "wagnerianomor",
  linkedin: "wagnermor",
}

function changeLinksSocialMedia() {
  // userName.textContent = "Wagneriano";
  
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    let linkedinLink = "in/";
    
    if(social !== "linkedin") linkedinLink = '';
    
    li.children[0].href = `https://${social}.com/${linkedinLink}${linksSocialMedia[social]}`;
  }
}


function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;


  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userLogin.children[1].textContent = data.login;
    userLogin.href = data.html_url;
    userPhoto.src = data.avatar_url;
    userLinkedin.href = data.blog;
  });
};
changeLinksSocialMedia();
getGithubProfileInfos();