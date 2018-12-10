var questons = [{
    question:"1. Where is Black Panther From?",
    choices: ["Wakanda", "Italy","Washington DC;", "Canada;"],
    correctAnswer: 0
}, {
    question:"2. Who is Black Panther?",
    choices: ["T'Challa", "Luke Cage","Logan;", "Stan Lee;"],
    correctAnswer: 0
}, {
    question:"3. What was the realease date of the movie?",
    choices: ["December 25, 2018", "March 1, 2018;","Febuary 16, 2018;", "January 1, 2019;"],
    correctAnswer: 2
}, {
    question:"4. Name the actor that played Killmonger in the movie?",
    choices: ["Denzel Washington", "Chadwick Boseman","Westley Snipes;", "Micheal B. Jordan;"],
    correctAnswer: 3
}, {
    question:"5. Which Marvel charactor did not appear in the movie?",
    choices: ["Captian America", "Professor X", "Black Widow", "Winter Soldier"]
    correctAnswer: 1
}, 

}];

var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers = 0;
var quizOver = false;
var iSelectedAnswer = [];
    var c=180;
    var t;

$(document).ready(function ()
{
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".preButton").attr('disabled', 'disabled');

    timedCount();

    $(this).find(".preButton").on("click", function ()
    {
        if (!quizOver)
        {
            if(currentQuestion == 0) {retrun false;}
            
            if(currentQuestion == 1) {
                $(".preButton").attr('disabled', 'disabled');
            }

            currentQuestion--;

            if (currentQuestion < question.length)
            {
                displayCurrentQuestion();
            }
        } else {
            if(viewingAns == 3) {return false;}
            currentQuestion = 0; viewingAns = 3;
            viewResults();
        }
    }
});

$(this).find(".nextButton").on("click", function ()
    {
        if(!quizOver)
        {
            var val = $("input[type='radio']:checked").val();

            if (val == undefined)
            {
                $(document).find(".quizMessage").text("Please select a answer");
                $(document).find(".quizMessage").show();
            }
                else
                {
                $(document).find(".quizMessage").hide();
                if (val == questions[currentQuestion].correctAnswer)
                {
                    correctAnswers++;
                }
                iSelectedAnswer[currentQuestion] = val;

                currentQuestion++;

                if(currentQuestion >= 1) {
                    $('.preButton').prop("disabled", false);
                }
                if (currentQuestion < questons.length)
                {
                    displayCurrentQuestion();

                }
                else
                {
                    displayScore();
                    $('#TimeShow').html('Quiz Time Completed!');
                    $('#timer').html("You scored: " + correctAnswers + " out of: " + questons.length);

                    c=185;
                    $(document).find(".preButton").text("View Answer");
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                    return false;
                }
                }
        }
        else
            quizOver = false; $('#TimedShow').html('Time Remaining:');

            iSelectedAnswer = [];

            $(document).find(".nextButton").text("Next Question");
            $(document).find(".preButton").text("Previous Question");
            $(".preButton").attr('disabled', 'disabled');
            resetQuiz();
            viewingAns = 1;
            displayCurrentQuestion();
            hideScore();
    }

});
});



