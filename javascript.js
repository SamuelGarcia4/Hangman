window.onload = function() {



    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',

        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',

        't', 'u', 'v', 'w', 'x', 'y', 'z'

    ];


    var word = []; // Selected word

    var guess; // guess

    var guesses = []; // Stored guesses

    var lives = 0; // Lives

    var counter = 0; // Count correct guesses

    var space = 0; // Number of spaces in word '-'



    // Get elements

    var showLives = document.getElementById("mylives");

    var showCatagory = document.getElementById("scatagory");

    var getHint = document.getElementById("hint");

    var showClue = document.getElementById("clue");







    // create alphabet ul

    var buttons = function() {

        myButtons = document.getElementById('buttons');

        letters = document.createElement('ul');



        for (var i = 0; i < alphabet.length; i++) {

            letters.id = 'alphabet';

            list = document.createElement('li');

            list.id = 'letter';

            list.innerHTML = alphabet[i];

            check();

            myButtons.appendChild(letters);

            letters.appendChild(list);

        }

    }
    
    // Create guesses ul

    result = function() {

        wordHolder = document.getElementById('hold');

        correct = document.createElement('ul');



        for (var i = 0; i < word.length; i++) {

            correct.setAttribute('id', 'my-word');

            guess = document.createElement('li');

            guess.setAttribute('class', 'guess');

            if (word[i] === "-") {

                guess.innerHTML = "-";

                space = 1;

            } else {

                guess.innerHTML = "_";

            }



            guesses.push(guess);

            wordHolder.appendChild(correct);

            correct.appendChild(guess);

        }

    }



    // Show lives

    comments = function() {

        showLives.innerHTML = "You have " + lives + " lives";

        if (lives < 1) {

            showLives.innerHTML = "Game Over";

        }

        for (var i = 0; i < guesses.length; i++) {

            if (counter + space === guesses.length) {

                showLives.innerHTML = "You Win!";

            }

        }

    }




    // OnClick Function

    check = function() {

        list.onclick = function() {

            var guess = (this.innerHTML);

            this.setAttribute("class", "active");

            this.onclick = null;

            for (var i = 0; i < word.length; i++) {

                if (word[i] === guess) {

                    guesses[i].innerHTML = guess;

                    counter += 1;

                }

            }

            var j = (word.indexOf(guess));

            if (j === -1) {

                lives -= 1;

                comments();

                animate();

                if (lives === 0) {

                    $("#pic1").delay(1000).fadeIn(1000);

                }

            } else {

                comments();

            }

        }

    }





    // Play

    play = function() {

        categories = [

            ["ice cream", "pie", "pizza", "steak", "spaghetti", "salsa", "soup", "gelato", "salad"]

        ];



        chosenCategory = categories[Math.floor(Math.random() * categories.length)];

        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];

        word = word.replace(/\s/g, "-");

        console.log(word);

        buttons();



        guesses = [];

        lives = 10;

        counter = 0;

        space = 0;

        result();

        comments();

        selectCat();

        canvas();

    }



    play();



    // User Hints



    hint.onclick = function() {



        hints = [

        ];



        var catagoryIndex = categories.indexOf(chosenCategory);

        var hintIndex = chosenCategory.indexOf(word);

        showClue.innerHTML = "Clue: - " + hints[catagoryIndex][hintIndex];

    };



   // Reset with jquery :p

  function resetGame() {

    correct.parentNode.removeChild(correct);

    letters.parentNode.removeChild(letters);

    showClue.innerHTML = "";

    context.clearRect(0, 0, 400, 400);

    play();    

  }



  document.getElementById('reset').onclick = function() {

    resetGame();

  }


}