import React, { Component } from 'react';
import { Message, Table , Container } from 'semantic-ui-react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import IncreaseCountButton from '../components/IncreaseCountButton';
import { API_BASE_URL } from '../config'
import BannerM from '../components/BannerM';
import MovieForm from '../components/MovieForm';

class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            isLoading: null
        };
        this.onIncrease = this.onIncrease.bind(this);
        this.onAddition = this.onAddition.bind(this);
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
                const response = await fetch(API_BASE_URL + '/movies');
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
                {this.state.isLoading && <Message info header="Loading movies..." />}
                {this.state.movies &&
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Episode</th>
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
                        <MovieForm onAddition={this.onAddition}/>
                    </div>
                }
                 </Container>
                <Footer />
            </div>
        );
    }
};
export default Movies ;
