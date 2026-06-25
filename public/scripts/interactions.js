function scrollToSection(targetSection) {
    const target = document.getElementById(targetSection);

    const y = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: y,
        behavior: "smooth"
    });
}

function openContacts(){
    const contact = document.getElementById("contact");
    contact.classList.add("contact-open");
    contact.classList.remove("contact-close");

}

function closeContacts(){
    const contact = document.getElementById("contact");
    contact.classList.remove("contact-open");
    contact.classList.add("contact-close");

}