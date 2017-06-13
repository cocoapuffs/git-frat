#!/usr/bin/env node

const _path = require('path');


const CWD     = process.cwd();
const ARGS    = process.argv.slice(2);
const OPTIONS = {
	branch: 'master',
	url:    null,
	folder: null
};


(function() {

	let urls    = ARGS.filter(a => /^(http|https|git|ssh)/g.test(a));
	let flags   = ARGS.filter(a => a.startsWith('--'));
	let folders = ARGS.filter(a => (!urls.includes(a) && !flags.includes(a)));


	flags.forEach(flag => {

		let tmp = flag.substr(2).split('=');
		if (tmp.length === 2) {

			let key = tmp[0];
			let val = tmp[1];

			if (val.startsWith('"')) val = val.substr(1);
			if (val.endsWith('"'))   val = val.substr(0, val.length - 1);


			if (/^(url|folder)/g.test(key) === false) {
				OPTIONS[key] = val;
			}

		}

	});

	let url = urls.pop();
	if (url !== undefined) {
		OPTIONS['url'] = url;
	}

	let path = folders.find(p => (p.startsWith('/') || p.startsWith('./') || p.startsWith('../')));
	if (path !== undefined) {

		OPTIONS['folder'] = _path.resolve(CWD, path);

	} else if (OPTIONS['url'] !== null) {

		let tmp = OPTIONS['url'].split('/').pop();
		if (tmp !== undefined) {

			if (tmp.endsWith('.git')) {
				tmp = tmp.split('.').slice(0, -1).join('.');
			}

			OPTIONS['folder'] = './' + tmp;

		}


	}


	console.log(OPTIONS);

})();



const _download_github = function(options) {

	let tmp = [];
	let url = options['url'];

	if (url.startsWith('git@github.com:')) {
		tmp = url.substr(15).split('/');
	} else if (url.startsWith('https://github.com/')) {
		tmp = url.substr(19).split('/');
	}

	if (tmp.length === 2) {

		let orga   = tmp[0];
		let repo   = tmp[1];
		let branch = options['branch'] || 'master';

		if (repo.endsWith('.git')) {
			repo = repo.substr(0, repo.length - 4);
		}

		url = 'https://github.com/' + orga + '/' + repo + '/archive/' + branch + '.zip';

	}


	if (url !== null) {

		console.log('download github', url);

	}

};

const _download_archive = function(options) {

	// TODO: This needs to be implemented

	console.log(options);

};


let url    = OPTIONS['url'];
let folder = OPTIONS['folder'];

if (url !== null && folder !== null) {

	console.log('Fraterning into \'' + folder + '\'...');

	if (url.startsWith('git@github.com:') || url.startsWith('https://github.com')) {
		_download_github(OPTIONS);
	} else {
		_download_archive(OPTIONS);
	}

}


