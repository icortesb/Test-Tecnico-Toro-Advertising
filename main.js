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
        first_movie: [
            { name: "Top Gun", url: "images/top_gun.webp" },
            { name: "Bullet Train", url: "images/bullet_train.webp" },
            { name: "Thor: Love and Thunder", url: "images/thor_love_and_thunder.webp" }
        ],
        second_movie: [
            { name: "Purple Hearts", url: "images/purple_hearts.webp" },
            { name: "Black Panther: Wakanda Forever", url: "images/black_panther_wakanda_forever.webp" },
            { name: "The Godfather", url: "images/the_godfather.webp" }
        ],
        third_movie: [
            { name: "Sing 2", url: "images/sing_2.webp" },
            { name: "The Bad Guys", url: "images/the_bad_guys.webp" },
            { name: "Puss in Boots: The Last Wish", url: "images/puss_in_boots_the_last_wish.webp" }
        ]
    },
    2: {
        first_movie: {
            first_movie: [
                { name: "Top Gun: Maverick", url: "images/top_gun_maverick.webp" },
                { name: "Days of Thunder", url: "images/days_of_thunder.webp" },
                { name: "Independence Day", url: "images/independence_day.webp" }
            ],
            second_movie: [
                { name: "Mad Max: Fury Road", url: "images/mad_max_fury_road.webp" },
                { name: "John Wick", url: "images/john_wick.webp" },
                { name: "The Man from U.N.C.L.E.", url: "images/the_man_from_uncle.webp" }
            ],
            third_movie: [
                { name: "The Batman", url: "images/the_batman.webp" },
                { name: "Spider-Man: No Way Home", url: "images/spiderman_no_way_home.webp" },
                { name: "The Flash", url: "images/the_flash.webp" }
            ]
        },
        second_movie: {
            first_movie: [
                { name: "The Lucky One", url: "images/the_lucky_one.webp" },
                { name: "A Walk to Remember", url: "images/a_walk_to_remember.webp" },
                { name: "Dear John", url: "images/dear_john.webp" }
            ],
            second_movie: [
                { name: "Avengers: Endgame", url: "images/avengers_endgame.webp" },
                { name: "Captain Marvel", url: "images/captain_marvel.webp" },
                { name: "Aquaman", url: "images/aquaman.webp" }
            ],
            third_movie: [
                { name: "Goodfellas", url: "images/goodfellas.webp" },
                { name: "Scarface", url: "images/scarface.webp" },
                { name: "Casino", url: "images/casino.webp" }
            ]
        },
        third_movie: {
            first_movie: [
                { name: "The Secret Life of Pets 2", url: "images/the_secret_life_of_pets_2.webp" },
                { name: "Zootopia", url: "images/zootopia.webp" },
                { name: "Incredibles 2", url: "images/incredibles_2.webp" }
            ],
            second_movie: [
                { name: "Ocean\"s Eleven", url: "images/oceans_eleven.webp" },
                { name: "Madagascar", url: "images/madagascar.webp" },
                { name: "Scooby-Doo! The Mystery Begins", url: "images/scooby_doo_the_mystery_begins.webp" }
            ],
            third_movie: [
                { name: "Shrek 2", url: "images/shrek_2.webp" },
                { name: "Puss in Boots", url: "images/puss_in_boots.webp" },
                { name: "Trolls World Tour", url: "images/trolls_world_tour.webp" }
            ]
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const moviePosters = document.querySelectorAll('.movie_poster');
    const currentStepElement = document.getElementById('current-step');
    const questionTitleElement = document.getElementById('question-title');
    
    let currentStep = 1;
    let selectedMovieId = '';
    let lastMovieSelected = '';

    function updateMovieImages(movieId) {
        const movieImages = currentStep === 2 ? moviesForSteps[currentStep][selectedMovieId][movieId] : moviesForSteps[currentStep][movieId];
        const [firstMovieImage, secondMovieImage, thirdMovieImage] = movieImages.map(movie => movie.url);

        document.getElementById('first_movie').style.backgroundImage = `url('${firstMovieImage}')`;
        document.getElementById('second_movie').style.backgroundImage = `url('${secondMovieImage}')`;
        document.getElementById('third_movie').style.backgroundImage = `url('${thirdMovieImage}')`;
    }

    function updateStep(step, question) {
        currentStepElement.innerText = step;
        questionTitleElement.innerText = question;
        document.querySelector(`.step[data-step="${step}"]`).classList.add('active');
    }

    function trackLastMovieSelected(event) {
        if (currentStep === 3) {
            const backgroundImage = event.target.style.backgroundImage.slice(5, -2);
            console.log(`Last movie selected: ${backgroundImage}`);
            let objectWithMovie;
            for (let key in moviesForSteps[2][selectedMovieId]) {
                objectWithMovie = moviesForSteps[2][selectedMovieId][key].find(movie => movie.url === backgroundImage);
                if (objectWithMovie) break;
            }
            lastMovieSelected = objectWithMovie.name;
            window.open(`https://www.imdb.com/find?q=${lastMovieSelected}`, '_blank');    
        }
    }

    function handleMovieClick(event) {
        const movieId = event.target.id;
        trackLastMovieSelected(event);
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
        poster.addEventListener('click', handleMovieClick);
    });
});


