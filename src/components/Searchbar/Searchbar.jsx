import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TbPhotoSearch } from 'react-icons/tb';

import {
  SearchbarHeader,
  Form,
  SearchButton,
  SearchLabel,
  SearchInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    query: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  onChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query.trim());
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <Form onSubmit={this.onSubmit}>
          <SearchButton type="submit">
            <TbPhotoSearch size={30} />
          </SearchButton>
          <SearchLabel>
            <SearchInput
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.query}
              onChange={this.onChange}
            />
          </SearchLabel>
        </Form>
      </SearchbarHeader>
    );
  }
}

export default Searchbar;
