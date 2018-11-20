export class GithubData {
	org = 'facebook';
	orgBaseUrl = 'https://api.github.com/orgs/';
	userBaseUrl = 'https://api.github.com/users/';

	constructor() {
		this.headers = new Headers();
		this.headers.append('Accept', 'application/vnd.github.v3+json');
	}

	getRepos(orgName) {
		let request = new Request(`${this.orgBaseUrl}${this.org}/repos`, { headers: this.headers });

		return fetch(request).then((res) => {
			return res.json();
		});
	}

	getMembers(orgName) {
		let request = new Request(`${this.orgBaseUrl}${this.org}/members`, { headers: this.headers });

		return fetch(request).then((res) => {
			return res.json()
				.then(members => {
					return members;
				});
		});
	}

	getMemberDetails(memberLogin) {
		let userRequest = new Request(`${this.userBaseUrl}${memberLogin}`, { headers: this.headers });
		let userReposRequest = new Request(`${this.userBaseUrl}${memberLogin}/repos`, { headers: this.headers });

		return Promise.all([fetch(userRequest),
		fetch(userReposRequest)])
			.then(([member, repos]) => {
				return Promise.all([member.json(), repos.json()]);
			})
			.then(([memberValue, reposValue]) => {
				return {
					member: memberValue,
					repos: reposValue
				};
			});
	}
}

export let githubDataSvc = new GithubData();
