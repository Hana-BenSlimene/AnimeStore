import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';

export default(class Navbar extends Component {
    render() {
        return (
            <div>
                <Menu fixed="top" inverted>
                    <Container>
                        <Menu.Item as="a" header href="/add">
                            Store_Movie
                        </Menu.Item>
                        {<Menu.Item id="movies-button" as="a" href="/">Home</Menu.Item>}
                        {<Menu.Item id="movies-button" as="a" href="/movies">Movies</Menu.Item>}
                        {<Menu.Item id="movies-button" as="a" href="/add">Add-Movies</Menu.Item>}
                    </Container>
                </Menu>
            </div>
        );
    }
});