(function () {
    const hangman = {
        // VARIABLES //
        game_array : [ "armadillo", "dog", "fish", "horse", "snake", "otter", "spider", "bear", "cat", "lizard", "alligator", "eagle" ],
        word: "",
        word_l: 0,
        score_win: 0,
        score_lose: 0,
        score_try: 5,
        letters_used_arr: [],
        word_arr: [],
        underscore_arr : [],
        
        init: function() {
            this.cache_dom();
            this.bind_events();
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
            this.score_win = 0; // 
            this.score_lose = 0;
            this.score_try = 5;
            this.letters_used = [];
            this.underscore_arr  = []
            this.under_generator();
        },

        word_play: function() {  //Finds the new word... which is the array element based on the random index
            const r_index = Math.floor((Math.random() * this.game_array.length));
            this.word = this.game_array[r_index];
            console.log(this.word); // TEST!!!
        },

        under_generator: function() {   // Show _ for every letter of the word to guess
            
            this.word_play(); // Get a word
            this.word_l = this.word.length;
            
            console.log(`${this.word} it's ${this.word_l} chars long`); // TEST!!!

            for(let i = 0; i < this.word_l; i++) { 
                this.underscore_arr.push("_"); // Fills underscore array with "_"
                // Updates the word_array to be an array of letters in the same order as the WORD... Ex: if WORD = cat... word_arr = [c,a,t]
                this.word_arr[i] = this.word.charAt(i); 
            }

            this.word_container.innerHTML = this.underscore_arr.join(" ");
         
        },
        
        get_letter: function(event) {   // Get the letter pressed by user
            if(event.type == "keyup") {
                let p_key = event.key; // Get the key that was pressed
                let p_key_index = this.word.indexOf(p_key); // Is the key pressed part of the WORD
                
                if (p_key_index >= 0){ // if the index > 0 means the letter pressed is part of the word
                    this.good_guess(p_key);
                }
                else { // If the key pressed is not part of the WORD 
                    if(this.letters_used_arr.indexOf(p_key) <0) { // If the key was not pressed pressed before
                        this.letters_used_arr.push(p_key); // Add the key to the letters used array
                        this.score_try--;
                        this.tries_span.innerHTML = this.score_try;
                        this.letters_used_div.innerHTML = this.letters_used_arr.join(" "); // Re render the array
                    }
                }
            }

        },

        good_guess: function(p_key) { // only fires if there's a match
            // Go through the word_arr to check if the key pressed is equal to one of the items in it 
            for (let k = 0; k < this.word_l; k++) {
                if(this.word_arr[k] == p_key){  // If the key pressed matches the current item in the array
                    this.underscore_arr[k] = p_key;  // change the corresponding "_" to match the key as well
                }
            }
            this.word_container.innerHTML = this.underscore_arr.join(" "); // Re render that underscore arr (now it contains the guessed letters)
        },


            
            

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
   
    hangman.init(); // Inits program
})()