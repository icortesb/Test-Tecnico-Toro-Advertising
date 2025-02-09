document.addEventListener('DOMContentLoaded', () => {
    const moviePosters = document.querySelectorAll('.movie_poster');
    const currentStepElement = document.getElementById('current-step');
    const questionTitleElement = document.getElementById('question-title');
    const movieSelector = document.getElementById('movie-selector');
    const congratsMessage = document.createElement('p');
    congratsMessage.innerText = 'Congratulations! Enjoy your movie!';
    congratsMessage.style.display = 'none';
    congratsMessage.style.textAlign = 'center';
    congratsMessage.style.fontSize = '1.5rem';
    document.body.appendChild(congratsMessage);
    
    const steps = [
        {
            question: 'Choose one of the three movies',
            movieImages: {
                first_movie: ['images/top_gun.webp', 'images/bullet_train.webp', 'images/thor_love_and_thunder.webp'],
                second_movie: ['images/purple_hearts.webp', 'images/black_panther_wakanda_forever.webp', 'images/the_godfather.webp'],
                third_movie: ['images/sing_2.webp', 'images/the_bad_guys.webp', 'images/puss_in_boots_the_last_wish.webp']
            }
        },
        {
            question: 'Which one do you like the most?',
            movieImages: {
                first_movie: ['images/top_gun.webp', 'images/bullet_train.webp', 'images/thor_love_and_thunder.webp'],
                second_movie: ['images/purple_hearts.webp', 'images/black_panther_wakanda_forever.webp', 'images/the_godfather.webp'],
                third_movie: ['images/sing_2.webp', 'images/the_bad_guys.webp', 'images/puss_in_boots_the_last_wish.webp']
            }
        },
        {
            question: 'Which one do you want to watch now?',
            movieImages: {
                first_movie: ['images/top_gun.webp', 'images/bullet_train.webp', 'images/thor_love_and_thunder.webp'],
                second_movie: ['images/purple_hearts.webp', 'images/black_panther_wakanda_forever.webp', 'images/the_godfather.webp'],
                third_movie: ['images/sing_2.webp', 'images/the_bad_guys.webp', 'images/puss_in_boots_the_last_wish.webp']
            }
        }
    ];

    function updateMovieImages(movieId, step) {
        const { first_movie, second_movie, third_movie } = steps[step - 1].movieImages;
        const dataMovie = document.getElementById(movieId).getAttribute('data-movie');

        document.getElementById('first_movie').style.backgroundImage = `url('${first_movie[dataMovie]}')`;
        document.getElementById('second_movie').style.backgroundImage = `url('${second_movie[dataMovie]}')`;
        document.getElementById('third_movie').style.backgroundImage = `url('${third_movie[dataMovie]}')`;
    }

    function updateStep(step) {
        currentStepElement.innerText = step;
        questionTitleElement.innerText = steps[step - 1].question;
        document.querySelector(`.step[data-step="${step}"]`).classList.add('active');
    }

    function handleMovieClick(movieId) {
        const currentStep = parseInt(currentStepElement.innerText);

        if (currentStep < steps.length) {
            updateMovieImages(movieId, currentStep);
            updateStep(currentStep + 1);
        } else {
            movieSelector.style.display = 'none';
            congratsMessage.style.display = 'block';
        }
    }

    moviePosters.forEach(poster => {
        poster.addEventListener('click', () => {
            handleMovieClick(poster.id);
        });
    });
});
