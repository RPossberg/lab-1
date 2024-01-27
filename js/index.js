console.log("Hello from index.js");

// Task: Reference Variables

/*
        Create reference variables for the following:
        Call to action button (speed-test), a unique id for the open dialog element prevent default and the close button inside the dialog.
*/

const speedTestBtn = document.querySelector("#speed-test");
console.log(speedTestBtn);

const dialog = document.querySelector("#open-dialog");
console.log(dialog);

const closeDialog = document.querySelector("#close-dialog");
console.log(closeDialog);

// Task: Event Listener
speedTestBtn.addEventListener("click", onHandleChange);
closeDialog.addEventListener("click", onHandleChange);

// Task: Event Handler call to action button
function onHandleChange() {
  dialog.showModal();
}
