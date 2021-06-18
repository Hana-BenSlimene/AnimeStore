import React, { Component } from 'react';
import {Container,Table } from 'semantic-ui-react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import BannerM from '../components/BannerM';
import MovieForm from '../components/MovieForm'
import IncreaseCountButton from '../components/IncreaseCountButton';

import { API_BASE_URL } from '../config'

class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            isLoading: null
        };
        this.onAddition = this.onAddition.bind(this);
        this.onIncrease = this.onIncrease.bind(this);
    }
    componentDidMount() {
        this.getMovies();
    }
    onAddition(movie) {
        this.setState({
            movies: [...this.state.movies, movie]
        })
    }
    onIncrease(data, id) {
        let movies = this.state.movies;
        let movie = movies.find(movie => movie.id === id);
        movie.count = data.count;
        this.setState({
            movies: movies
        })
    }

     async getMovies() {
        if (!this.state.movies) {
            try {
                this.setState({ isLoading: true });
                const response = await fetch(API_BASE_URL + '/add');
                const data = await response.json();
                this.setState({ movies: data, isLoading: false});
            } catch (err) {
                this.setState({ isLoading: false });
                console.error(err);
            }
        }
    }
    render() {
        return (
            <div>
            <NavBar />
            <BannerM />
            <Container>
            <MovieForm onAddition={this.onAddition} />
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Bad Puns Count</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.movies.map(
                                movie => 
                                    <tr id={movie.id} key={movie.id}>
                                        <td>{movie.id}</td>
                                        <td>{movie.title}</td>
                                        <td>{movie.count}</td>
                                        <td>
                                        <IncreaseCountButton onIncrease={this.onIncrease} movieId={movie.id} />
                                        </td>
                                    </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
             </Container>
            <Footer />
        </div>
            
        );
    }
};
export default Add ;
