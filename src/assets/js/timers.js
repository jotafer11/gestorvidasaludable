    /*<![CDATA[*/
function uncheck(){
 var a=uncheck.arguments,z0=0;
 for (;z0<a.length;z0++){
  document.getElementById(a[z0])?document.getElementById(a[z0]).checked=false:null;
 }
}


(function () {

    'use strict';

    var _countTimer = 50,
        _countShort = 10,
        _countLong = 180,
        _countdownTimer,
        _countdownShort,
        _countdownLong;
        
    
    function resetCounter() {

        if (_countdownTimer) {
            window.clearInterval(_countdownTimer);
        }

        if (_countdownShort) {
            window.clearInterval(_countdownShort);
        }

        if (_countdownLong) {
            window.clearInterval(_countdownLong);
        }        

        _countdownTimer = null;
        _countdownShort = null;
        _countdownLong = null;

        _countTimer = 50;
        _countShort = 10;
        _countLong = 180;

    }
  
    function startCountdownTimer() {
              
        if (!_countdownTimer) {
          
            _countdownTimer = window.setInterval(function () {
              
                document.getElementById("countdownPTimer").innerText = _countTimer;
                _countTimer = _countTimer - 1;
                
                if (_countTimer < 0) {
                    resetCounter();                  
                    document.getElementById("countdownPTimer").innerText = "0";
                    document.getElementById("beep").play();
                }
                
            }, 1000); 
          
        }
    }

    function startCountdownShort() {
              
        if (!_countdownShort) {
          
            _countdownShort = window.setInterval(function () {
              
                document.getElementById("countdownPShort").innerText = _countShort;
                _countShort = _countShort - 1;
                
                if (_countShort < 0) {
                    resetCounter();                  
                    document.getElementById("countdownPShort").innerText = "0";
                    document.getElementById("beep").play();
                }
                
            }, 1000); 
          
        }
    }


    function startCountdownLong() {
              
        if (!_countdownLong) {
          
            _countdownLong = window.setInterval(function () {
              
                document.getElementById("countdownPLong").innerText = _countLong;
                _countLong = _countLong - 1;
                
                if (_countLong < 0) {
                    resetCounter();                  
                    document.getElementById("countdownPLong").innerText = "0";
                    document.getElementById("beep").play();
                }
                
            }, 1000); 
          
        }
    }   

    function stopCountdownTimer() {
        resetCounter();
    }

    function stopCountdownShort() {
        resetCounter();
    }

    function stopCountdownLong() {
        resetCounter();
    }


    // Init
    
    document.getElementById("startButtonTimer").onclick = startCountdownTimer;
    document.getElementById("stopButtonTimer").onclick = stopCountdownTimer;

    document.getElementById("startButtonShort").onclick = startCountdownShort;
    document.getElementById("stopButtonShort").onclick = stopCountdownShort;

    document.getElementById("startButtonLong").onclick = startCountdownLong;
    document.getElementById("stopButtonLong").onclick = stopCountdownLong;    
    
}());


  