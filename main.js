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
];

const moviesForSteps = {
    1: {
        first_movie: [
            { name: "Top Gun", url: "images/top_gun.webp", imdb: "https://www.imdb.com/title/tt0092099/" },
            { name: "Bullet Train", url: "images/bullet_train.webp", imdb: "https://www.imdb.com/title/tt12593682/" },
            { name: "Thor: Love and Thunder", url: "images/thor_love_and_thunder.webp", imdb: "https://www.imdb.com/title/tt10648342/" }
        ],
        second_movie: [
            { name: "Purple Hearts", url: "images/purple_hearts.webp", imdb: "https://www.imdb.com/title/tt4614584/" },
            { name: "Black Panther: Wakanda Forever", url: "images/black_panther_wakanda_forever.webp", imdb: "https://www.imdb.com/title/tt9114286/" },
            { name: "The Godfather", url: "images/the_godfather.webp", imdb: "https://www.imdb.com/title/tt0068646/" }
        ],
        third_movie: [
            { name: "Sing 2", url: "images/sing_2.webp", imdb: "https://www.imdb.com/title/tt6467266/" },
            { name: "The Bad Guys", url: "images/the_bad_guys.webp", imdb: "https://www.imdb.com/title/tt8115900/" },
            { name: "Puss in Boots: The Last Wish", url: "images/puss_in_boots_the_last_wish.webp", imdb: "https://www.imdb.com/title/tt3915174/" }
        ]
    },
    2: {
        first_movie: {
            first_movie: [
                { name: "Top Gun: Maverick", url: "images/top_gun_maverick.webp", imdb: "https://www.imdb.com/title/tt1745960/" },
                { name: "Days of Thunder", url: "images/days_of_thunder.webp", imdb: "https://www.imdb.com/title/tt0099371/" },
                { name: "Independence Day", url: "images/independence_day.webp", imdb: "https://www.imdb.com/title/tt0116629/" }
            ],
            second_movie: [
                { name: "Mad Max: Fury Road", url: "images/mad_max_fury_road.webp", imdb: "https://www.imdb.com/title/tt1392190/" },
                { name: "John Wick", url: "images/john_wick.webp", imdb: "https://www.imdb.com/title/tt2911666/" },
                { name: "The Man from U.N.C.L.E.", url: "images/the_man_from_uncle.webp", imdb: "https://www.imdb.com/title/tt1638355/" }
            ],
            third_movie: [
                { name: "The Batman", url: "images/the_batman.webp", imdb: "https://www.imdb.com/title/tt1877830/" },
                { name: "Spider-Man: No Way Home", url: "images/spiderman_no_way_home.webp", imdb: "https://www.imdb.com/title/tt10872600/" },
                { name: "The Flash", url: "images/the_flash.webp", imdb: "https://www.imdb.com/title/tt0439572/" }
            ]
        },
        second_movie: {
            first_movie: [
                { name: "The Lucky One", url: "images/the_lucky_one.webp", imdb: "https://www.imdb.com/title/tt1327194/" },
                { name: "A Walk to Remember", url: "images/a_walk_to_remember.webp", imdb: "https://www.imdb.com/title/tt0281358/" },
                { name: "Dear John", url: "images/dear_john.webp", imdb: "https://www.imdb.com/title/tt0989757/" }
            ],
            second_movie: [
                { name: "Avengers: Endgame", url: "images/avengers_endgame.webp", imdb: "https://www.imdb.com/title/tt4154796/" },
                { name: "Captain Marvel", url: "images/captain_marvel.webp", imdb: "https://www.imdb.com/title/tt4154664/" },
                { name: "Aquaman", url: "images/aquaman.webp", imdb: "https://www.imdb.com/title/tt1477834/" }
            ],
            third_movie: [
                { name: "Goodfellas", url: "images/goodfellas.webp", imdb: "https://www.imdb.com/title/tt0099685/" },
                { name: "Scarface", url: "images/scarface.webp", imdb: "https://www.imdb.com/title/tt0086250/" },
                { name: "Casino", url: "images/casino.webp", imdb: "https://www.imdb.com/title/tt0112641/" }
            ]
        },
        third_movie: {
            first_movie: [
                { name: "The Secret Life of Pets 2", url: "images/the_secret_life_of_pets_2.webp", imdb: "https://www.imdb.com/title/tt5113044/" },
                { name: "Zootopia", url: "images/zootopia.webp", imdb: "https://www.imdb.com/title/tt2948356/" },
                { name: "Incredibles 2", url: "images/incredibles_2.webp", imdb: "https://www.imdb.com/title/tt3606756/" }
            ],
            second_movie: [
                { name: "Ocean's Eleven", url: "images/oceans_eleven.webp", imdb: "https://www.imdb.com/title/tt0240772/" },
                { name: "Madagascar", url: "images/madagascar.webp", imdb: "https://www.imdb.com/title/tt0351283/" },
                { name: "Scooby-Doo! The Mystery Begins", url: "images/scooby_doo_the_mystery_begins.webp", imdb: "https://www.imdb.com/title/tt1258157/" }
            ],
            third_movie: [
                { name: "Shrek 2", url: "images/shrek_2.webp", imdb: "https://www.imdb.com/title/tt0298148/" },
                { name: "Puss in Boots", url: "images/puss_in_boots.webp", imdb: "https://www.imdb.com/title/tt0448694/" },
                { name: "Trolls World Tour", url: "images/trolls_world_tour.webp", imdb: "https://www.imdb.com/title/tt6587640/" }
            ]
        }
    }
};

const keysCount = Object.keys(moviesForSteps).length;

document.addEventListener('DOMContentLoaded', () => {
    const moviePosters = document.querySelectorAll('.movie_poster');
    const currentStepElement = document.getElementById('current-step');
    const questionTitleElement = document.getElementById('question-title');
    
    let currentStep = 1;
    let selectedMovieId = '';

    function updateMovieImages(movieId) {
        const movieImages = currentStep === keysCount ? moviesForSteps[currentStep][selectedMovieId][movieId] : moviesForSteps[currentStep][movieId];
        const [firstMovie, secondMovie, thirdMovie] = movieImages;

        const firstMovieElement = document.getElementById('first_movie');
        const secondMovieElement = document.getElementById('second_movie');
        const thirdMovieElement = document.getElementById('third_movie');

        firstMovieElement.style.backgroundImage = `url('${firstMovie.url}')`;
        firstMovieElement.setAttribute('aria-label', firstMovie.name);

        secondMovieElement.style.backgroundImage = `url('${secondMovie.url}')`;
        secondMovieElement.setAttribute('aria-label', secondMovie.name);

        thirdMovieElement.style.backgroundImage = `url('${thirdMovie.url}')`;
        thirdMovieElement.setAttribute('aria-label', thirdMovie.name);
    }

    function updateStep(step, question) {
        currentStepElement.innerText = step;
        questionTitleElement.innerText = question;
        document.querySelector(`.step[data-step="${step}"]`).classList.add('active');
    }
    
    let objectWithMovie;

    function trackLastMovieSelected(event) {
        if (currentStep === 3) {
            const backgroundImage = event.target.style.backgroundImage.slice(5, -2);
            for (let key in moviesForSteps[2][selectedMovieId]) {
                objectWithMovie = moviesForSteps[2][selectedMovieId][key].find(movie => movie.url === backgroundImage);
                if (objectWithMovie) break;
            }
            document.getElementById('js-movie-selector').style.display = 'none';
            document.getElementById('js-final-msg').style.display = 'flex';
        }
    }

    function handleMovieClick(event) {
        const movieId = event.target.id;
        trackLastMovieSelected(event);
        if (currentStep === 1) {
            updateMovieImages(movieId);
            updateStep(2, steps[1].question);
            currentStep = 2;
            selectedMovieId = movieId;
        } else if (currentStep === 2) {
            updateMovieImages(movieId);
            updateStep(3, steps[2].question);
            currentStep = 3;
        }
    }

    moviePosters.forEach(poster => {
        poster.addEventListener('click', handleMovieClick);
        poster.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                handleMovieClick(event);
            }
        });
    });

    function watchMovie() {
        window.open(objectWithMovie.imdb, '_blank', 'noopener,noreferrer');
    }

    document.getElementById('watch-movie').addEventListener('click', watchMovie);
});


