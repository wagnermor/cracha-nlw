const linksSocialMedia = {
  github: "wagnermor",
  twitter: "wagnerianomor",
  linkedin: "wagnermor",
}

function changeLinksSocialMedia() {
  userName.textContent = "Wagneriano Mor";
  
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    let linkedinLink = "in/";
    
    if(social !== "linkedin") linkedinLink = '';

     li.children[0].href = `https://${social}.com/${linkedinLink}${linksSocialMedia[social]}`;
  }
}

changeLinksSocialMedia();