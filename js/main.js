function startGame(level) {
    const feedback = document.getElementById('feedback');
    
    if (level === 'básico') {
        feedback.innerText = "Has seleccionado el Nivel Básico. ¡Prepárate para resolver sumas y restas!";
    } else if (level === 'avanzado') {
        feedback.innerText = "Has seleccionado el Nivel Avanzado. ¡Prepárate para multiplicaciones y divisiones!";
    }

    // Simulación de inicio de juego (se puede expandir en el futuro)
    setTimeout(() => {
        feedback.innerText += "\n¡Vamos a empezar!";
    }, 1000);
}
