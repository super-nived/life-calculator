function myFunction() {
    var age= document.getElementById('age').value
    let final= document.getElementById('final').value
    let sleep= document.getElementById('sleep').value
    
    let life=final-age
    let days=life*365;
    let hours=days*24
    let sleepHours=sleep*days
    let totalHours=hours-sleepHours

    let rmdays=totalHours/24
    
   console.log(rmdays)

    
    document.getElementById("demo").innerHTML = Math.trunc(rmdays)
    let day=Math.trunc(rmdays)
     ///////////speak out//////
     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
     const recognition =  new SpeechRecognition();
     function readOut(message){

      const speech = new SpeechSynthesisUtterance()
      const allVoices= speechSynthesis.getVoices();
      speech.text=message;
      speech.allVoice=allVoices[23];
      speech.volume=1
      window.speechSynthesis.speak(speech)
      
  }
   readOut('you have'+day+'days left')
   
  }