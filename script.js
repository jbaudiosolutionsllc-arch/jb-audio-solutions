```javascript id="j5xq2n"
// JB's Audio Solutions LLC
// Website Scripts


document.addEventListener("DOMContentLoaded", function () {


    // Smooth scrolling for page links

    const links = document.querySelectorAll('a[href^="#"]');


    links.forEach(link => {


        link.addEventListener("click", function(e) {


            const target = document.querySelector(
                this.getAttribute("href")
            );


            if (target) {

                e.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth"

                });

            }


        });


    });



    // Simple image loading effect

    const images = document.querySelectorAll("img");


    images.forEach(img => {


        img.addEventListener("load", function(){


            this.style.opacity = "1";


        });


    });



});
```
