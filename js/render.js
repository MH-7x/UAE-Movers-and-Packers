const services = [
    {
        name : "Villa Moving",
        desc : "All kinds of small and big villas moving in Abu Dhabi, Al Ain, Dubai at affordable price with guaranteed service.",
        link: "#",
        icon : `<i class=" text-white text-xl fa fa-home" aria-hidden="true"></i>`
    },
    {
        name : "Office Moving",
        desc : "Move your office in UAE without any stress and get your office furniture and equipment transferred in an arranged and adequateway.",
        link: "#",
        icon : `<i class=" text-white text-xl fa fa-building" aria-hidden="true"></i>  `  
    },
    {
        name : "Heavy Goods Moving",
        desc : "We handle all kinds of big and heavy commercial and residential relocations. Najmat Suhail has all the required resources for heavy objects moving.",
        link: "#",
        icon : `<i class=" text-white text-xl fa fa-truck" aria-hidden="true"></i>`
    },
    {
        name : "Small / Single Furniture Moving",
        desc : "Small and single furniture moving all over UAE. We have small vehicles which carry these items at an affordable price",
        link: "#",
        icon : `<i class=" text-white text-xl fa fa-building" aria-hidden="true"></i>`
    },
    {
        name : "Moving & Cargo Packing",
        desc : "We offer packing for moving using the best quality of materials. Our team can do strong packing for cargo.",
        link: "#",
        icon : `<i class=" text-white text-xl fas fa-truck-loading"></i>`
    },
    {
        name : "Apartments Moving",
        desc : "Specialized team for moving apartments. No matter loading/unloading through stairs or elevators.",
        link: "#",
        icon : `<i class=" text-white text-xl fa fa-warehouse"></i>`
    },
    {
        name : "Appliances Moving",
        desc : "All kinds of commercial and residential appliances moving service in UAE.",
        link: "#",
        icon : `<i class=" text-white text-xl fas fa-tools"></i>`
    },
    {
        name : "Curtains Installation",
        desc : "Installation of all kinds of curtains, blinds, rods and tracks in UAE.",
        link: "#",
        icon : `<i class=" text-white text-xl fas fa-couch"></i>`
    },
    {
        name : "Furniture Assembly",
        desc : "Professional carpenters for installation all kinds of new and used furniture.",
        link: "#",
        icon : `<i class=" text-white text-xl fas fa-screwdriver"></i>`
    },
    {
        name : "Packed Items Moving",
        desc : "We provide relocation for already packed items like boxes and, furniture and appliances.",
        link: "#",
        icon : `<i class=" text-white text-xl fas fa-box-open"></i>`
    },
    {
        name : "Piano Relocation",
        desc : "We do moving of all kinds of piano with dismantling, packing, moving and fixing.",
        link: "#",
        icon : `<i class=" text-white text-xl fas fa-people-carry"></i>`
    },
]


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".render-container");
    if (container) {
        services.map((service) => {
            container.innerHTML += `
                <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style="border-radius : 10px ">
                        <div class="service-icon">
                            ${service.icon}
                        </div>
                        <a href="${service.link}"><h4 class="mb-3">${service.name}</h4></a>
                        <p class="m-0">${service.desc}</p>
                        <a class="btn btn-lg btn-primary rounded" href="${service.link}">
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `;
        });
    }
});
