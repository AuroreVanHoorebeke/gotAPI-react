import React from 'react';

import '../index.css';

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: {}
        };
    }

    componentDidMount() {
        fetch("https://www.anapioficeandfire.com/api/books/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <div>
                    {items.map(item => (
                            <div>
                                <h1>{item.name}</h1>
                                <h2>{item.authors}</h2>
                                <h3>ISBN: {item.isbn}</h3>
                                <div>Published: {item.released}
                                    <p>{item.publisher}, {item.country}</p>
                                    <p>{item.mediaType}</p>
                                </div>
                                <p>{item.numberOfPages} pages</p>
                            </div>
                        )
                    )}
                </div>
            );
        }
    }
}

export default Books;