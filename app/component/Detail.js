import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Detail extends Component {
    componentDidMount() {
        if (!this.props.text) {
            this.props.fetch();
        }
    }

    render() {
        const props = this.props;
        return (
            <article>
                <header>
                    <h1>{props.title}</h1>
                    <p>{props.author}</p>
                    <p>{props.style}</p>
                </header>
                <p dangerouslySetInnerHTML={{__html: props.text && props.text.replace(/。/g, '。<br />')}} />
            </article>
        );
    }
}
export default Detail;
