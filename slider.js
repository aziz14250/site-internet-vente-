document.querySelectorAll('.image-slider').forEach(slider => {
    let currentIndex = 0; // Index de l'image affichée
    const images = slider.querySelectorAll('img'); // Images dans le slider
    const imageCount = images.length; // Nombre total d'images

    // Fonction pour passer à l'image suivante
    const nextImage = () => {
        currentIndex = (currentIndex + 1) % imageCount; // Boucle au début après la dernière image
        slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Déplace le slider
    };

    // Défilement automatique toutes les 3 secondes
    setInterval(nextImage, 3000);
});
