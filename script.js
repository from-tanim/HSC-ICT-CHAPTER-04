// GSAP Animation Script

document.addEventListener("DOMContentLoaded", () => {
    // Header Animation
    gsap.from("header", {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: "bounce.out"
    });

    // Introduction Section Animation
    gsap.from("#intro h2", {
        duration: 1,
        x: -200,
        opacity: 0,
        delay: 0.5
    });

    gsap.from("#intro p", {
        duration: 1,
        x: 200,
        opacity: 0,
        delay: 1
    });

    // Concepts Section Animations
    const concepts = document.querySelectorAll(".concept");
    concepts.forEach((concept, index) => {
        gsap.from(concept, {
            duration: 1,
            x: index % 2 === 0 ? -200 : 200,
            opacity: 0,
            delay: 1.5 + index * 0.3
        });
    });

    // Web Structures Section Animations
    const structures = document.querySelectorAll(".structure");
    structures.forEach((structure, index) => {
        gsap.from(structure, {
            duration: 1,
            y: 100,
            opacity: 0,
            delay: 2 + index * 0.3
        });
    });

    // Footer Animation
    gsap.from("footer", {
        duration: 1,
        y: 100,
        opacity: 0,
        delay: 3.5
    });
});
