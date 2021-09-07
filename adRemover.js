var increamentalTimer = 500;

async function action() {
	let idSelector = [
		"[id^='google_ads_iframe_']"
	];

	[...document.querySelectorAll(idSelector.join(","))].every(x => !x.remove());

	increamentalTimer *= 3;
	setTimeout(action, increamentalTimer);
}

window.onload = function (e) {
	setTimeout(action, increamentalTimer);
};