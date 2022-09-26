  const nav_link = document.querySelector(".nav_link");
  const nav_toggle = document.querySelector(".mobile_nav");

  nav_toggle.addEventListener('click', () => {
    const visibility = nav_link.getAttribute("data-visible");

    if(visibility === "false"){
        nav_link.setAttribute("data-visible", true);
        nav_link.setAttribute("aria-expanded", true);
    } else if(visibility === "true") {
        nav_link.setAttribute("data-visible", false);
        nav_link.setAttribute("aria-expanded", false);
    }
  });
  nav_link.onclick = function(){
    nav_link.setAttribute("data-visible",false);
  }


