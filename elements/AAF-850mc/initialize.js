function(instance, context) {
  instance.data.stytch = new window.stytch(context.keys["Public"]);
  instance.publishState("logged_in", !!instance.data.stytch.session.getSync());

  // Create a new div element
  const stytchDiv = document.createElement("div");
  stytchDiv.id = "stytch-sdk";
  instance.canvas.appendChild(stytchDiv);
}