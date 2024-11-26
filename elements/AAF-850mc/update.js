function(instance, properties, context) {
	let providers = [];
	let products = [];
	let methods = [];

	// Add providers if social networks are enabled
	if (properties.facebook) providers.push({ type: "facebook" });
	if (properties.twitter) providers.push({ type: "twitter" });
	if (properties.github) providers.push({ type: "github" });
	if (properties.discord) providers.push({ type: "discord" });

	// If any social network is enabled, add 'oauth' to products
	if (
		properties.facebook ||
		properties.twitter ||
		properties.github ||
		properties.discord
	) {
		products.push("oauth");
	}

	// If SMS is true, add 'otp' to products and 'sms' to methods
	if (properties.sms) {
		products.push("otp");
		methods.push("sms");
	}

	// Construct the config object
	const config = {
		products,
		oauthOptions: {
			providers: providers,
			loginRedirectURL: properties.redirect_url,
			signupRedirectURL: properties.redirect_url,
		},
		otpOptions: {
			methods,
		},
	};

	// Mount the Stytch login
	instance.data.stytch.mountLogin({
		elementId: "#stytch-sdk",
		config,
	});
}
