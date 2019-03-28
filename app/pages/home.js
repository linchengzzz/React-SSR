import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
    <div>
        <h1>{ props.title }</h1>
        <Link to={"/list"}>go to list</Link>
    </div>
);

function mapStateToProps(state) {
    return { ...state.home };
}

export default connect(mapStateToProps)(Home)
