import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	// Load env file based on `mode` in the current working directory.
	// Set the third parameter to '' to load all env regardless of the
	// `VITE_` prefix.
	const env = loadEnv(mode, process.cwd(), "");

	return {
		// vite config
		define: {
			publicKey: JSON.stringify(env.VITE_PUBLIC_KEY),
			serviceId: JSON.stringify(env.VITE_APP_SERVICE_ID),
			templateId: JSON.stringify(env.VITE_APP_TEMPLATE_ID),
		},
		plugins: [react()],
	};
});
