/* global app*/

'use strict';

(function(app) {

	app.factory('SearchGitSrv', ['$q', 'httpRequestsSrv',
		function($q,httpRequestsSrv) {

			var getRepositoriesGit = function(framework,num) {
				var configuration = {
					url: 'https://api.github.com/search/repositories?q='+ framework +'+language:javascript&page=1&per_page='+num+'&sort=stars&order=desc'
				};

				return httpRequestsSrv.get(configuration);
			};

			return {
				getRepositoriesGit: getRepositoriesGit
			};
		}
	]);

}(app));