import React, { Component } from "react";
import { githubDataSvc } from "./githubData";

export class Repos extends Component {
  constructor() {
    super();
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    githubDataSvc
      .getRepos()
      .then(repos => this.setState({ repos }));
  }

  renderRepoInfo(repo) {
    const link = repo.homepage ? (<a href={repo.homepage} target="_blank">Home Page</a>) : (<span>-</span>);
    return (
      <tr key={repo.id}>
        <td> {repo.name} </td>
        <td> {repo.stargazers_count} </td>
        <td> {repo.watchers_count} </td>
        <td> {repo.forks_count} </td>
        <td> {repo.open_issues_count} </td>
        <td>{link}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <h3>Repos in the org {githubDataSvc.org}</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Stars</th>
              <th>Watches</th>
              <th>Forks</th>
              <th>issues</th>
              <th>Home Page</th>
            </tr>
          </thead>
          <tbody>{this.state.repos.map(this.renderRepoInfo)}</tbody>
        </table>
      </div>
    );
  }
}
