(function () {
	'use strict';

	class App {
		routes = [
			{ path: "", view: null }
		];

		constructor() {
			window.addEventListener('hashchange', this.route.bind(this)); // чтобы не потерять контекст в route()
			this.route();
		}

		route() {
			this.routes.find(r => r.path == location.hash).view;
		}
	}

	new App();

})();
