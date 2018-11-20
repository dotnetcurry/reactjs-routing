import React, { Component } from "react";
import { githubDataSvc } from "./githubData";
import { Link } from "react-router-dom";

export class Members extends Component {
  constructor() {
    super();
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    githubDataSvc
      .getMembers()
      .then(members => this.setState({ members }));
  }

  renderMember(member) {
    return (
      <div className="col-md-3 card" key={member.login}>
        <div className="card-body">
          <div>
            <img
              src={member.avatar_url}
              alt={member.login}
              className="avatar"
            />
          </div>
          <div>
            <a target="_blank" className="text-left" href={member.html_url}>
              {member.login}
            </a>
            <br />
            <a target="_blank" href={member.html_url + "?tab=repositories"}>
              Repos
            </a>
            <br />
            <Link to={`/member/${member.login}`}>View Details</Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3>Members of the {githubDataSvc.org} organization</h3>
        <div className="row">
          {this.state.members.map(this.renderMember)}
        </div>
      </div>
    );
  }
}
