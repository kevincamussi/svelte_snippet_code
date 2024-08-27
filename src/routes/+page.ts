import type { PageLoad } from './$types';

export const load = (() => {
	// can get date from any source
	//egm fetch call, grapql
	return {
		snippets: [
			{
				title: 'Kevin COde Snippet',
				language: 'HTML',
				code: `<div> This is a div </div>`,
				favorite: false
			},
			{
				title: 'Kevin COde Snippet',
				language: 'HTML',
				code: `<div>teste</div>`,
				favorite: false
			}
		]
	};
}) satisfies PageLoad; // pageLoad => pagedata
