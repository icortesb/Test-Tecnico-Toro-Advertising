const steps = [
    {
        step: 1,
        question: 'Choose one of the three movies'
    },
    {
        step: 2,
        question: 'Which movie do you like the most?'
    },
    {
        step: 3,
        question: 'Which movie do you want to watch now?'
    }
]

const moviesForSteps = {
    1: {
        first_movie: ['images/top_gun.webp', 'images/bullet_train.webp', 'images/thor_love_and_thunder.webp'],
        second_movie: ['images/purple_hearts.webp', 'images/black_panther_wakanda_forever.webp', 'images/the_godfather.webp'],
        third_movie: ['images/sing_2.webp', 'images/the_bad_guys.webp', 'images/puss_in_boots_the_last_wish.webp']
    },
    2: {
        first_movie: {
            first_movie: ['images/top_gun_maverick.webp', 'images/days_of_thunder.webp', 'images/independence_day.webp'],
            second_movie: ['images/mad_max_fury_road.webp', 'images/john_wick.webp', 'images/the_man_from_uncle.webp'],
            third_movie: ['images/the_batman.webp', 'images/spiderman_no_way_home.webp', 'images/the_flash.webp']
        },
        second_movie: {
            first_movie: ['images/the_lucky_one.webp', 'images/a_walk_to_remember.webp', 'images/dear_john.webp'],
            second_movie: ['images/avengers_endgame.webp', 'images/captain_marvel.webp', 'images/aquaman.webp'],
            third_movie: ['images/purple_hearts4.webp', 'images/black_panther_wakanda_forever4.webp', 'images/the_godfather4.webp']
        },
        third_movie: {
            first_movie: ['images/the_secret_life_of_pets_2.webp', 'images/zootopia.webp', 'images/incredibles_2.webp'],
            second_movie: ['images/oceans_eleven.webp', 'images/madagascar.webp', 'images/scooby_doo_the_mystery_begins.webp'],
            third_movie: ['images/shrek_2.webp', 'images/puss_in_boots.webp', 'images/trolls_world_tour.webp']
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const moviePosters = document.querySelectorAll('.movie_poster');
    const currentStepElement = document.getElementById('current-step');
    const questionTitleElement = document.getElementById('question-title');
    
    let currentStep = 1;
    let selectedMovieId = '';

    function updateMovieImages(movieId) {
        const movieImages = currentStep === 2 ? moviesForSteps[currentStep][selectedMovieId][movieId] : moviesForSteps[currentStep][movieId];
        const [firstMovieImage, secondMovieImage, thirdMovieImage] = movieImages;

        document.getElementById('first_movie').style.backgroundImage = `url('${firstMovieImage}')`;
        document.getElementById('second_movie').style.backgroundImage = `url('${secondMovieImage}')`;
        document.getElementById('third_movie').style.backgroundImage = `url('${thirdMovieImage}')`;
    }

    function updateStep(step, question) {
        currentStepElement.innerText = step;
        questionTitleElement.innerText = question;
        document.querySelector(`.step[data-step="${step}"]`).classList.add('active');
    }

    function handleMovieClick(movieId) {
        if (currentStep === 1) {
            console.log(`${movieId} clicked`);
            updateMovieImages(movieId);
            updateStep(2, steps[1].question);
            currentStep = 2;
            selectedMovieId = movieId;
        } else if (currentStep === 2) {
            console.log(`${movieId} clicked`);
            updateMovieImages(movieId);
            updateStep(3, steps[2].question);
            currentStep = 3;
        }
    }

    moviePosters.forEach(poster => {
        poster.addEventListener('click', () => {
            handleMovieClick(poster.id);
        });
    });
});


