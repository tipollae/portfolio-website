function scrollToSection(targetSection) {
    const target = document.getElementById(targetSection);

    const y = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: y,
        behavior: "smooth"
    });
}