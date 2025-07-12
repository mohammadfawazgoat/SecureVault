let lightmode = localStorage.getItem("theme") ==="light";
        let name = document.getElementById("jname");
        let btn = document.getElementById("themebutton");
        function applytheme(){
            if(lightmode){
                btn.innerHTML ="Dark";
                document.body.style.backgroundColor = "white";
                if(name) name.style.color = "#25715B"; 
                const quote = document.getElementById("quote");
                if(quote) quote.style.color = "#25715B";
                document.querySelectorAll(".questions").forEach(function(el) {
                    el.style.color = "#00a76f";
                });
                document.querySelectorAll(".ans").forEach(function(el){
                    el.style.color = "#333333";});
                const pp = document.getElementById("pp");
                if(pp) pp.style.color = "#333333";
                document.querySelectorAll(".custom-list li,i").forEach(function(el) {
                    el.style.color = "#333333";
                });
                const navbar = document.querySelector(".navbar");
                if(navbar) navbar.style.setProperty("background-color", "#f8f9fa", "important"); // Light background for navbar
                const brand = document.querySelector(".navbar-brand");
                if(brand) brand.style.setProperty("color","#00a76f", "important"); // Light color for navbar brand
                const lock = document.querySelector(".lock-icon");
                if(lock) lock.src = "/static/images/logol.png";

                const logo = document.querySelector(".logo_img");
                if(logo) logo.src = "/static/images/mainl.png"; // Change logo for light mode
                document.getElementById("themebutton").style.backgroundColor = "#00332A";
                document.getElementById("themebutton").style.color = "#00FF88"; // Change button color for light mode
                document.querySelectorAll(".nav-link").forEach(function(el){
                    el.style.setProperty("color","#00a76f","important")// Change nav link color for light mode
                    const wwwtext = document.querySelectorAll(".wwwtext").forEach(function(el){
                        el.style.color = "#00a76f";
                    })
                    const input = document.querySelectorAll(".wbs").forEach(function(el){
                        el.style.backgroundColor = "#c7c7c7";
                        el.style.color = "#00a76f";
                    })
                    const addbutton = document.getElementById("add");
                    if(addbutton) addbutton.style.backgroundColor = "#25715B";
                    if(addbutton) {
                        addbutton.addEventListener("mouseenter",function(){
                            addbutton.style.backgroundColor = "green";
                        })
                        addbutton.addEventListener("mouseleave",function(){
                            addbutton.style.backgroundColor = "#25715B";
                        })
                        
                    }


                    const table = document.getElementById("tbb");
                    if(table) table.style.backgroundColor = "#c7c7c7";

                    const sp = document.getElementById("sp");
                    if(sp) sp.style.color = "#25715B";

                    const tth = document.getElementById("tth");
                    if(tth) tth.style.color = "#25715B";

                    const tbb = document.querySelectorAll(".tbb");
                    if(tbb) tbb.forEach(function(el){
                        el.style.color = "green";
                    })
                })
            }
            else{
                btn.innerHTML ="Light";
                document.body.style.backgroundColor = ""; 
                if(name) name.style.color = ""; 
                const quote = document.getElementById("quote");
                if(quote) quote.style.color = "";// Dark background
                document.querySelectorAll(".questions").forEach(function(el) {
                    el.style.color = "";
                });
                document.querySelectorAll(".ans").forEach(function(el){
                    el.style.color = "";});
                const pp = document.getElementById("pp");
                if(pp) pp.style.color = "";
                document.querySelectorAll(".custom-list li,i").forEach(function(el) {
                    el.style.color = "";
                });
                const navbar = document.querySelector(".navbar");
                if(navbar) navbar.style.setProperty("background-color", "", "important"); // Light background for navbar
                const brand = document.querySelector(".navbar-brand");
                if(brand) brand.style.setProperty("color","", "important");
                const lock = document.querySelector(".lock-icon");
                if(lock) lock.src = "/static/images/lock.png";// Change lock icon for light mode
                if(lock) lock.style.width = "";
                const logo = document.querySelector(".logo_img");
                if(logo) logo.src = "/static/images/main.png"; 
                document.getElementById("themebutton").style.backgroundColor = "";
                document.getElementById("themebutton").style.color = ""; 
                document.querySelectorAll(".nav-link").forEach(function(el){
                    el.style.setProperty("color","","important")})
                    const wwwtext = document.querySelectorAll(".wwwtext").forEach(function(el){
                        el.style.color = "";
                    })
                const input = document.querySelectorAll(".wbs").forEach(function(el){
                        el.style.backgroundColor = "";
                        el.style.color = "";
                    })
                    const addbutton = document.getElementById("add");
                    if(addbutton) addbutton.style.backgroundColor = "";
                    if(addbutton) {
                        addbutton.addEventListener("mouseenter",function(){
                            addbutton.style.backgroundColor = "";
                        })
                        addbutton.addEventListener("mouseleave",function(){
                            addbutton.style.backgroundColor = "";
                        })
                        
                    }   
                const table = document.getElementById("tbb");
                    if(table) table.style.backgroundColor = "";

                    const sp = document.getElementById("sp");
                    if(sp) sp.style.color = "";

                    const tth = document.getElementById("tth");
                    if(tth) tth.style.color = "";

                    const tbb = document.querySelectorAll(".tbb");
                    if(tbb) tbb.forEach(function(el){
                        el.style.color = "";
                    })     

            }
        };
        applytheme();

        btn.addEventListener("click", function(){
            lightmode = !lightmode;
            localStorage.setItem("theme", lightmode ? "light" : "dark");
            applytheme();
        })