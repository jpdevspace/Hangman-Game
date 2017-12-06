(function () {
    const hangman = {
        // VARIABLES //
        game_array : [ "armadillo", "dog", "fish", "horse", "snake", "otter", "spider", "bear", "cat", "lizard", "alligator", "eagle" ],
        word: "",
        score_win: 0,
        score_lose: 0,
        score_try: 5,
        letters_used: [],
        underscore_arr : [],
        
        init: function() {
            this.cache_dom();
            this.bind_events();
        },

        cache_dom: function() {
            this.word_container = document.getElementById("wordContainer");
            this.letters_used_div = document.getElementById("letters_used");
            this.btn_start = document.getElementsByTagName('button')[0];
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
            word = this.game_array[r_index];
            console.log(word); // TEST!!!
            return word;
        },

        under_generator: function() {   // Show _ for every letter of the word to guess
            const gen_word = this.word_play(); //The generated word.
            const underscore_l = gen_word.length;
            
            console.log(`${gen_word} it's ${underscore_l} chars long`); // TEST!!!

            for(let i = 0; i < underscore_l; i++) { // Creates the _ for the chosen word
                this.underscore_arr.push("_");
            }

            this.word_container.innerHTML = this.underscore_arr.join(" ");
         
        },
        
        get_letter: function(event) {   // Get the letter pressed by user

            // if(event.type == "keyup") {
            //     let pressed_key = event.key;
            //     console.log(this.gen_word.indexOf(press_key));
            // }else{
            //     console.log("Start Typing");
            // }
            // let str = `Keyboard Event: key = ${event.key} and code = ${event.code}`;
            // this.letters_used_div.innerHTML = str;

            // let letter_pressed = event.key;

            // console.log(`this.word is ${this.word}`)
            // console.log(this.word_play.indexOf(letter_pressed));
            // if((this.word.indexOf(letter_pressed)) >== 0) {
            //     console.log("you got one letter");
            // }
        },

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
   
    hangman.init(); // Inits program
})()