console.log("Hello from index.js");

// Task: Reference Variables
/*
        Create reference variables for the following:
        Call to action button (speed-test), a unique id for the open dialog element and the close button inside the dialog.
*/
// Task: Reference Variables
const speedTestBtn = document.querySelector("#speed-test");
console.log(speedTestBtn);
const dialog = document.querySelector("#open-dialog");
console.log(dialog);
const closeDialog = document.querySelector("#close-dialog");

// Task: Event Listener
speedTestBtn.addEventListener("click", onOpenDialog);
closeDialog.addEventListener("click", onCloseDialog);

// Task: Event Handler call to action button
function onOpenDialog() {
  dialog.showModal();
}

// Task: Event Handler close button
function onCloseDialog() {
  dialog.close();
}

// Task: Event Listener to close dialog outside of the dialog box
// Check to see if the coordinates of the mouse click are outside of the dialog box. If so, then call the close dialog function.
dialog.addEventListener("click", onClickOutsideDialog);
function onClickOutsideDialog(event) {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    event.clientX < dialogDimensions.left ||
    event.clientX > dialogDimensions.right ||
    event.clientY < dialogDimensions.top ||
    event.clientY > dialogDimensions.bottom
  ) {
    onCloseDialog();
  }
}
