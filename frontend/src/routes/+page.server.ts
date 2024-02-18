import type { PageServerLoad } from "./$types";
import { PUBLIC_API_HOST, PUBLIC_API_PORT } from "$env/static/public";

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch(`http://${PUBLIC_API_HOST}:${PUBLIC_API_PORT}/api/posts`);
	const data = await res.json();
	return {
		data,
	};
};
