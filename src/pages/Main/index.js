import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, Input, SubmitButton, List } from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newRepo: '',
      repositories: [],
      loading: false,
      notFound: false,
    };
  }

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (repositories !== prevState.repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      this.setState({ loading: true });

      const { newRepo, repositories } = this.state;

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        notFound: true,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      newRepo: e.target.value,
      notFound: false,
    });
  };

  render() {
    const { repositories, newRepo, loading, notFound } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="Nome do repositório"
            value={newRepo}
            onChange={this.handleChange}
            notFound={notFound}
          />
          <SubmitButton loading={loading}>
            {loading ? <FaSpinner /> : <FaPlus color="#fff" size={14} />}
          </SubmitButton>
        </Form>
        <List>
          {repositories.map((repository) => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
