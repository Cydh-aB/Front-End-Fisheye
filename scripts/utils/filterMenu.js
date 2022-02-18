export function displayFilterMenu(mediaFactory) {
    const filterMenu = document.querySelector(".filterMenu");
    const filterSelect = document.querySelector(".filter_select");
    const filterSelectTrigger = document.querySelector(".filter_select_trigger");
    const filterOptions = document.querySelectorAll(".filter_option");
    //Selection du premier enfant de l'élément filter_select
    const firstFilterOption = document.querySelector(".filter_select a:first-child");

    //Selection du dernier enfant filter_select
    const lastFilterOption = document.querySelector(".filter_select a:last-child");

    //on parcours le tableau filterOptions au click sur le menu filter

    for (const filter of filterOptions) {
        filter.addEventListener("click", function(e) {
            e.preventDefault();
            //si un filtre ne contient pas la classe selected -> selection du premier parent du filtre contenant la classe
            //filterOption.selected
            if (!this.classList.contains("selected")) {
                const selected = this.parentNode.querySelector(".filter_option.selected");
                
                selected.classList.remove("selected");
                this.classList.add("selected");
                this.setAttribute("aria-selected", "true");
                // l'ancetre le plus proche de l'élément filter_select_trigger span
                // remplace en passant le filtre sélectionné en haut
                this.closest(".filter_select").querySelector(".filter_select_trigger span").textContent = this.textContent;
                hideMenuFiltre();
                mediaFactory();
            }
        });
    }

    filterMenu.addEventListener("click", function(e) {
        e.preventDefault();
        if (filterSelect.classList.contains("open")) {
            hideMenuFiltre();
        } else {
            displayMenuFiltre();
        }
    });
    
    lastFilterOption.addEventListener("keydown", function(e) {
        if (e.code === "Tab" && !e.shiftKey) {
            hideMenuFiltre();
        }
    });
    
    firstFilterOption.addEventListener("keydown", function(e) {
        if (e.code === "Tab" && e.shiftKey) {
            hideMenuFiltre();
        }
    });
    
    window.addEventListener("click", function (e) {
        if (!filterSelect.contains(e.target)) {
            hideMenuFiltre();
        }
    });
    
    function displayMenuFiltre() {
        filterSelect.classList.add("open");
        filterSelectTrigger.setAttribute("aria-expended", "true");
    }
    
    function hideMenuFiltre() {
        filterSelect.classList.remove("open");
        filterSelectTrigger.setAttribute("aria-expanded", "false");
    }
}

