import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';

import Container from '../../components/Container';
import {
  Loading,
  Owner,
  Filter,
  IssueList,
  PageNavigation,
  NavButton,
} from './styles';

class Repository extends Component {
  constructor() {
    super();
    this.state = {
      repository: {},
      issues: [],
      issuesState: 'open',
      issuesPage: 1,
      loading: true,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { issuesState, issuesPage } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: issuesState,
          page: issuesPage,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  loadPage = async (state, page) => {
    const { repository } = this.state;

    this.setState({
      loading: true,
    });

    const issues = await api.get(`/repos/${repository.full_name}/issues`, {
      params: {
        state,
        page,
      },
    });

    this.setState({
      issues: issues.data,
      issuesState: state,
      issuesPage: page,
      loading: false,
    });
  };

  handleChange = async (e) => {
    const newState = e.target.value;

    this.loadPage(newState, 1);
  };

  render() {
    const { repository, issues, issuesState, issuesPage, loading } = this.state;
    if (loading) {
      return <Loading>Carregando...</Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/">Voltar para repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <Filter>
          <p>Estado das Issues: </p>
          <select onChange={this.handleChange} value={issuesState}>
            <option value="open">Abertas</option>
            <option value="closed">Fechadas</option>
            <option value="all">Todas</option>
          </select>
        </Filter>
        <IssueList>
          {issues.map((issue) => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map((label) => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
        <PageNavigation>
          <NavButton
            disabled={issuesPage === 1}
            onClick={() => this.loadPage(issuesState, issuesPage - 1)}
          >
            Anterior
          </NavButton>
          <h1>{issuesPage}</h1>
          <NavButton onClick={() => this.loadPage(issuesState, issuesPage + 1)}>
            Próxima
          </NavButton>
        </PageNavigation>
      </Container>
    );
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};

export default Repository;
