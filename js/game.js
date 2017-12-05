(function () {
    const hangman = {
        // VARIABLES
        game_array : [ "armadillo", "dog", "fish", "horse", "snake", "otter", "spider", "bear", "cat", "lizard", "alligator", "eagle" ],
        g_a_length: function() { return hangman.game_array.length },
        score_win: 0,
        score_lose: 0,
        score_try: 5,
        letters_used: [],
        underscore_arr : [],

        
        init: function() {
            this.cache_dom();
            this.bind_events();
        },

        // CACHE DOM
        cache_dom: function() {
            this.word_container = document.getElementById("word_container");
            this.letters_used = document.getElementById("letters_used");
        },

        // EVENT BINDERS
        bind_events: function() {
            window.addEventListener("keydown", this.get_letter);
        },


        // FUNCTIONS

        // Get a new word to play
            // Generate a random number between 0 and the length of the array, to use as index for the array
        random_index : function() { 
            return Math.floor((Math.random() * this.g_a_length()))
        },
            // Finds the new word... which is the array element based on the random index
        word_play: function() {
            const game_word = this.game_array[this.random_index()];
            return game_word;
        },

        // Show _ for every letter of the word to guess
        under_generator: function () {
            let word = this.word_play();
            let word_l = word.length;

            console.log(`my word_play is: ${word}`);

            for(let i = 0; i < word_l; i++) {
                this.underscore_arr.push("_");
            }

            for(let i = 0; i < this.underscore_arr.length; i++) {
                this.word_container.innerHTML = "Wa";
            }
            console.log(this.underscore_arr);
        },

        // Get the letter pressed by user
        get_letter: (event) => {
            let str = `Keyboard Event: key = ${event.key} and code = ${event.code}`;
            this.letters_used.innerHTML = str;
        }

        // If letter pressed matches one of the word 
            // Show it

            // If the no more _ update win 

            
            

        // If letter DOESN'T match pass it to the "user used" array and section

            // Was letter pressed before? If it was, IGNORE IT

            // If it wasn't

                // Display it in the "user used" section

                // Update "tries"

                // If Tries == 0, update lose

    }






// CONSOLE LOG TESTS
    // This is init word_play
    // console.log(hangman.word_play());
    hangman.under_generator();
    hangman.init(); // Inits program

})()