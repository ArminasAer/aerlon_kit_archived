interface meta {
	fileName: string;
	title: string;
	date: Date;
	series: string;
	categories: string[];
	post_snippet: string;
	featured: boolean;
	published: boolean;
}

function postsSorter(a: meta, b: meta) {
	if (a.date > b.date) {
		return -1;
	} else if (a.date < b.date) {
		return 1;
	} else {
		if (a.title < b.title) {
			return -1;
		} else {
			return 1;
		}
	}
}
