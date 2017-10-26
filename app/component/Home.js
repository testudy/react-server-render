import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    componentWillMount() {
        if (this.props.table.length < 300) {
            this.props.fetch();
        }
    }

    render() {
        const props = this.props;
        return (
            <ol>
                {
                    props.table.map(poem => (
                        <li key={poem.id}>
                            <Link to={`/${poem.title}`}>{poem.title}</Link>
                        </li>
                    ))
                }
            </ol>
        );
    }
}

export default Home;
