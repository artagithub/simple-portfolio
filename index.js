let openContentTab = (name) =>{

    let aboutTabLinks = document.getElementsByClassName('about-tab-links');
    let aboutContents = document.getElementsByClassName('about-contents')

    for (const link of aboutTabLinks) {
        link.classList.remove("active")
    }
    for (const content of aboutContents) {
        content.classList.remove("active")
    }

    event.currentTarget.classList.add("active")
    document.getElementById(name).classList.add("active")

} 

