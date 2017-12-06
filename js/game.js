(function () {
    const hangman = {
        // VARIABLES //
        game_array: [ "ladybug", "grasshopper", "lion",, "tiger", "panther", "leopard", "squirrel", "racoon", "panda", "frog", "swordfish", "butterfly", "ant", "whale", "armadillo", "dog", "fish", "horse", "snake", "otter", "spider", "bear", "cat", "lizard", "alligator", "eagle" ],
        word: "",
        word_l: 0,
        score_win: 0,
        score_lose: 0,
        score_try: 5,
        letters_used_arr: [],
        word_arr: [],
        underscore_arr: [],
        just_win: true,
        
        init: function() {
            this.cache_dom(); // Getting DOM ready for interactions
            this.bind_events(); // Initializing event listeners
        },

        cache_dom: function() {
            this.word_container = document.getElementById("wordContainer");
            this.letters_used_div = document.getElementById("letters_used");
            this.btn_start = document.getElementsByTagName("button")[0];
            this.win_span = document.getElementById("win");
            this.lose_span = document.getElementById("lose");
            this.tries_span = document.getElementById("tries");
        },

        bind_events: function() {    
            window.addEventListener("keyup", this.get_letter.bind(this));
            this.btn_start.addEventListener("click", this.start_game.bind(this));
        },

        start_game: function() {
            this.just_win = false;
            this.score_try = 5;
            this.letters_used_arr = [];
            this.underscore_arr  = [];
            this.lose_span.innerHTML = this.score_lose;
            this.win_span.innerHTML = this.score_win;
            this.tries_span.innerHTML = this.score_try;
            this.letters_used_div.innerHTML = "";
            this.under_generator(); // Picks a random word to start guessing
        },

        word_play: function() {  //Finds the new word... which is the array element based on the random index
            const r_index = Math.floor((Math.random() * this.game_array.length));
            this.word = this.game_array[r_index];
            console.log(this.word); // TEST!!!
        },

        under_generator: function() {   // Show an "_" for every letter of the word to guess
            this.word_play(); // Get a word
            this.word_l = this.word.length;
            
            console.log(`Secret word: ${this.word}. It's ${this.word_l} chars long`); // SECRET WORD AND ITS LENGTH

            for(let i = 0; i < this.word_l; i++) { 
                this.underscore_arr.push("_"); // Fills underscore array with "_"
                // Updates the word_array to be an array of letters in the same order as the WORD... Ex: if WORD = cat... word_arr = [c,a,t]
                this.word_arr[i] = this.word.charAt(i); 
            }
            this.word_container.innerHTML = this.underscore_arr.join(" ");
        },
        
        get_letter: function(event) {   // Get the letter pressed by user
            if(event.type == "keyup") {
                let p_key = event.key.toLowerCase(); // Get the key that was pressed and make it lower case
                let p_key_index = this.word.indexOf(p_key); // Get the index of the key pressed inside the array
                
                if(p_key_index >= 0){ // if the index > 0 means the letter pressed is part of the word
                    this.good_guess(p_key);
                } 
                else { // If the key pressed is not part of the WORD 
                    this.bad_guess(p_key);
                }
                this.check_win();
            }
        },

        good_guess: function(p_key) { // only fires if there's a match
            for (let k = 0; k < this.word_l; k++) { // Go through the word_arr to check if the key pressed is equal to one of the items in it 
                if(this.word_arr[k] == p_key){  // If the key pressed matches item in the array for the current iteration
                    this.underscore_arr[k] = p_key;  // change the corresponding "_" to match the key as well
                }
            }
            this.word_container.innerHTML = this.underscore_arr.join(" "); // Re render that underscore arr (now it contains the guessed letters)
        },

        bad_guess: function(p_key) {
            if(this.letters_used_arr.indexOf(p_key) < 0 && this.score_try > 0) { // If the key was not pressed before and you didn't run out of tries
                this.letters_used_arr.push(p_key); // Add the key to the letters used array
                this.score_try--; // Update the tries if you guesses the wrong letter
                this.tries_span.innerHTML = this.score_try; // Display the new score
                if(this.score_try == 0) { // When you lose.
                    this.score_lose++;  // Updzate the score
                    this.lose_span.innerHTML = this.score_lose; // Display new score
                    this.word_container.innerHTML = "GAME OVER!"; // Display the user that they lost
                } 
                else {
                    this.letters_used_div.innerHTML = this.letters_used_arr.join(" "); // Re render the array
                }  
            }
        },

        check_win: function() { // Checks if the user won
            if(this.word_arr.join("") == this.underscore_arr.join("") && !this.just_win) { // If the user guesses all the letters and didn't just win
                this.score_win++;   // Update the score
                this.just_win = true; // Update counter to stop updating scores on every right key pressed
                this.win_span.innerHTML = this.score_win; // Show the user the new score
                this.word_container.innerHTML = "YOU WIN!!!"; // Display the user that they won
            }
        }
    }
   
    hangman.init(); // Inits program
})()