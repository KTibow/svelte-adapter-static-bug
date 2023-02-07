import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: { base: "/base-path" },
    adapter: adapter(),
  },
};

export default config;
