function(instance, properties, context) {
  // On page load, we check for the existence of a cached session.
  let cachedSession = instance.data.stytch.session.getSync();
  // If there is no session publish state as false
  if (!cachedSession) {
    instance.publishState("logged_in", false);
  }

  const unsubscribe = instance.data.stytch.session.onChange((session) => {
    if (session) {
      instance.publishState("logged_in", true);
    } else {
      instance.publishState("logged_in", false);
    }
  });

  // On page close unsubscribe the onChange listener.
  window.addEventListener("beforeunload", () => {
    unsubscribe && unsubscribe();
  });
}
