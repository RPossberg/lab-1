console.log("Hello from index.js");

// Task: Reference Variables

/*
    Create reference variables for the following:
    Call to action button (speed-test), the dialog element and the close button inside the dialog.
*/

const openDialogButton = document.querySelector("#open-modal");
const speedTest = document.querySelector("#speed-test");
const closeButton = document.querySelector("#close-modal");

// Task: Add Event Listeners
// Add an event listener to the call to action button that will open the dialog.
openDialogButton.addEventListener("click", onUpdateDialog);

// Add an event listener to the close button that will close the dialog.
closeButton.addEventListener("click", onCloseDialog);

// Task: Create Functions
// Create a function that will open the dialog.
function onUpdateDialog(e) {
  speedTest.showModal();
}

// Create a function that will close the dialog.
function onCloseDialog(e) {
  speedTest.close();
}
