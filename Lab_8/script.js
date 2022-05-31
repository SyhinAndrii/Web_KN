
(function (global) {
    var script = {};
    script.names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
    console.log("Наші імена: " + script.names);
    console.log(" Спосіб селекціонування людей: за першою буквою 'J' або 'j'");
    script.names.forEach(i =>
      (i.toLowerCase()[0] == 'j' ? SpeakGoodBye.speak(i) : SpeakHello.speak(i))
    )
    
    console.log("\n");
    console.log("Спосіб селекціонування людей: за останньою буквою 'n' або 'N'");
    script.names.forEach(i =>
      (i.toLowerCase()[i.length-1] == 'n' ? SpeakGoodBye.speak(i) : SpeakHello.speak(i))
    )
    
  
    global.script = script
  })(window)