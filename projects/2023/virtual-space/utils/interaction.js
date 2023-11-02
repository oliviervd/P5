// function that enables the user to move through space.
// https://www.toptal.com/developers/keycode (find keycodes)
// todo: check if azerty or qwerty.

let speed = 20;

function move() {
  if (keyCode === 90) {
    // if "z" (code 90) move forward
    cameraZ += speed;
  } else if (keyCode === 83) {
    // if "s" (code 83) move backwards
    cameraZ -= speed * 0.3; // decrease speed, as moving backwards is harder.
  }
  console.log("KEY PRESSED");
}
