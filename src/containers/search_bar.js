import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather, clearWeather } from '../actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onClearBtnClick = this.onClearBtnClick.bind(this);

    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        // We need to feth weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' })

    }

    onClearBtnClick(event) {
        this.props.clearWeather();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forcast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secoundary">Search</button>
                </span>
                <span className="input-group-btn">
                    <button onClick={this.onClearBtnClick} type="button" className="btn btn-danger">Clear</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather, clearWeather }, dispatch)
}

//null because we don't need state here
export default connect(null, mapDispatchToProps)(SearchBar);