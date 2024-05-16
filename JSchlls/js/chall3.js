function challenge3() {
    var standingRadios = document.getElementsByName("standing");
    var gradDateRadios = document.getElementsByName("gradDate");
    
    // Check if at least one radio button from each group is selected
    var standingChecked = false;
    var gradDateChecked = false;
    
    for (var i = 0; i < standingRadios.length; i++) {
      if (standingRadios[i].checked) {
        standingChecked = true;
        break;
      }
    }
    
    for (var j = 0; j < gradDateRadios.length; j++) {
      if (gradDateRadios[j].checked) {
        gradDateChecked = true;
        break;
      }
    }
    
    // If both groups of radio buttons are not selected, display an alert
    if (!standingChecked || !gradDateChecked) {
      alert("Please select both your current class standing and anticipated graduation date.");
      return false; // Prevent form submission
    }
    
    return true; // Allow form submission
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("ch3form");
    form.addEventListener("submit", function(event) {
      if (!challenge3()) {
        event.preventDefault(); // Prevent default form submission behavior
      }
    });
  });
  