

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const category = button.getAttribute("data-category");


        // Change active button

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        // Filter projects

        projects.forEach(function(project) {

            const projectCategory =
                project.getAttribute("data-category");


            if (
                category === "all" ||
                projectCategory === category
            ) {

                project.style.display = "block";

            }
            else {

                project.style.display = "none";

            }

        });

    });

});




const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

