/*
  In a factory a printer prints a labels for boxes. For one kind of boxes
  the printer has to use colors which, for the sake of simplicity, are named
  with letters from a to m. The colors used by the printer are recorded
  in a control string.For example a "good" control string would be
  aaabbbbhaijjjm meaning that the printer used three times color a, four times
  color b, then one time color a...

  */
  /*
  s="aaabbbbhaijjjm"
  error_printer(s) => "0/14"

  s="aaaxbbbbyyhwawiwjjjwwm"
  error_printer(s) => "8/22"
  */

  var printerErrors = function(s){
      var reg =  /^[n-z]+$/i; //bad letters
      var count = 0;
      var result ="";
      for(var i = 0; i < s.length; i++){
        //count the bad letters in the string
        if(reg.test(s.charAt(i)))
          count +=1;
      }
      result += count +'/'+s.length;
      return result;
  };
  console.log(printerErrors('aaabbbbhaijjjm'));
  console.log(printerErrors('aaaxbbbbyyhwawiwjjjwwm'));
