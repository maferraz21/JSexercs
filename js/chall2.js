document.addEventListener("DOMContentLoaded", function() {
    // Get the checkbox and textarea elements
    const checkbox = document.getElementById("sameAddress");
    const homeAddress = document.getElementById("home");
  
    // Add event listener to the checkbox
    checkbox.addEventListener("change", function() {
      // If the checkbox is checked, copy the billing address to the home address field
      if (checkbox.checked) {
        homeAddress.value = document.getElementById("bill").value;
        homeAddress.setAttribute("readonly", true); // Make the home address field readonly
      } else {
        // If the checkbox is unchecked, allow editing the home address field
        homeAddress.removeAttribute("readonly");
      }
    });
  });
  