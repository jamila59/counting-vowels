// sentence =  0;
//
$(document).ready(function() {

  $("#submit").click(function(event) {
    var sentence = $("input#sentence").val();
    var splitSentences = sentence.split("");
    var vowels = 0;
    // console.log(splitSentences);

    for (var i = 0; i <= splitSentences.length; i++) {
      if (splitSentences[i] === "a" || splitSentences[i] === "o" || splitSentences[i] === "e" || splitSentences[i] === "i" || splitSentences[i] === "u") {
            vowels += 1;
          }

        };

        alert(vowels)

    event.preventDefault();
  });
});
