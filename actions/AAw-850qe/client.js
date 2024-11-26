function(properties, context) {
  const stytch = new window.stytch(context.keys["Public"]);
  stytch.session.revoke();
}
