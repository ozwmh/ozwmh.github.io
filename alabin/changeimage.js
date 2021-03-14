function changeimg(url,name,actor,profile,desc,imgurl,e) {

  let directory;
  const isPc = screen.width > 680;
  if (isPc) {
  	directory = "images/pc/"
  } else {
  	directory = "images/sp/"
  }

  document.getElementById("img").src = directory + url;
  document.getElementById("name").textContent = name;
  document.getElementById("actor").textContent = actor;
  document.getElementById("profile").textContent = profile;
  if (isPc) {
  	document.getElementById("desc").innerText = desc;
  } else {
  	document.getElementById("desc").textContent = desc
  }
  
  document.getElementById("animeimg").src = imgurl;



  let nodes = document.getElementById("thumb_img");
  let img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active')
  }
  e.classList.add('active');

}
