// serverless Functions
/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: "edge",
};

const br = `G24GAOR+vm5aydk4H59A0jlJGWbHlEqqHr6A9cv8HzNd6HQoUWj/91t2n2fSDohvGZvvhF6hDhOHiPfsOvWaN7lJIooCBf9IvfchxoA14/u/JGEPOB5DzxhAir5hieEXZUwzICVvSO4JH0NuS8LddSeZoU0z2IOCsMMvKA/hAUUmAouCFrZ4s4TTPSBRhZIDHOuY6gj/l17jJY4YtRzK3/7z/L8lcacZd/uLswGJdeCcIluZV6cDWYbj9DXc2B1kxHugoEotYEipoNRZsYTB4wVA4g4E9edkd31DzO2sU5x3TPncgDr/uggokBH8BOaVCtJPPmtTagBx9y3qFo+GCi/0DugRQM9Sq7HbcStb3a54b24KbbpI6i+GSjdm5DM53Q7vpBSjd1Rqh9qQjgyMIXHcfDyQIb1rt6evJAl9U85/Zg83anHmsqQctO1UaihO4u7zpqiu3+qu66H3zQ9TsNvWb/oSVZRdBcf5VI1R6FeLohbqUm9q6X7XuIzWnawe7mS08W42GQQd+iMebyDW9wrjLj2MFUnxO9sUrfa1UsKm20fCDiadHpIooLLiFZvkeH9OilHxXwTQmlRQZyTc+Sl6Dt81nFCqSKukc90kDtpVTc1JnWwNDswDKK0qfRo1olHdLUj8+BiXY492xhJ3MqOmgBE3vHFOvpT4SNxAcGCb+BRO3lAFRljy0TOWn8R1OP3/G0dTX9DGcccishDgKS3D9/bhEBT7XGttC+DMLsYS6dXx2Kjg+9T95f3MUnphqFwOJGxeftsri4SpRsmmBmXG54A6x+nJ18qowosdcwnKIhJTPr8zYDzGrhUp0Y+ifhui2wRzKUyITW9Cwg09EuSm61XKmwyKu9iRAA==`;

const files: { [key: string]: Buffer | string } = {
	"scrolling-stat.min.js": Buffer.from(br, "base64"),
};

import type { RequestHandler } from "./$types";

// handle request
export const GET: RequestHandler = async ({ params, locals }) => {
	const slug = params.slug;

	const error = locals.utils.error;

	const file = files[slug] ? files[slug] : null;

	if (!file) throw error(404, "No file found");

	const headers: { [key: string]: string } = {
		"Content-Type": "text/javascript",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET",
		"Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
		"Referrer-Policy": "strict-origin-when-cross-origin",
		"Content-Encoding": "br",
		"Vary": "Accept-Encoding",
	};

	// return response
	return new Response(file, {
		headers,
	});
};
