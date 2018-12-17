
        //create an arry for all the possible options for computer's guess
        var compGuess = ['a','b','c','d','f','g','h','i','j','k','l','m','n','o','p','q',
            'r','s','t','u','v','w','x','y','z'];

        //create var to store numbers of wins, loses, guess left and user's guess so far
        var wins = 0;
        var loses = 0;
        var guessLeft ='';
        var yourGuess = '';

        //to show users how many wins, losese, guesses left and their guess so far, will need var that allow us to print or output the result
        var winsText =document.getElementById('win-text');
        var losesText = document.getElementById('lose-text');
        var yourGuessText = document.getElementById('your-guess-text');
        var guessLeftText = document.getElementById('guess-left-text');

        // this function funs when the user types on keyboard. the value of users guess will be stored as the userGuess var
        document.onkeyup = function(event) {
            var userGuess = event.key;
        } 
        console.log(userGuess);

        //comp randomly chooses a letter from the compGuess array
        var compChoice = compGuess[Math.floor(Math.random()* compGuess.length)];
        
        //user has 5 chances to guess.
        for (var i = 1; i < 5; i++) {
        
            if (userGuess === compChoice) {
            return 'That\'s right! ' 
        }else {
            return 'Sorry. Keep trying'
            }
        };