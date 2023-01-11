// import { render } from '@testing-library/react';
import React from 'react';
import Axios from 'axios';

const linkAPI = 'https://reactnative.dev/movies.json'

export default class Data1 extends React.Component{

    state = {
        data: null
    }

    get = () => {
        Axios.get(linkAPI)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    getData = () => {
        Axios.get(linkAPI)
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    getDataMovies = () => {
        Axios.get(linkAPI)
        .then((response) => {
            console.log(response.data.movies)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    getDataMoviesIndeks0 = () => {
        Axios.get(linkAPI)
        .then((response) => {
            console.log(response.data.movies[0])
        })
        .catch((error) => {
            console.log(error)
        })
    }

    getDataMoviesIndeks0Title = () => {
        Axios.get(linkAPI)
        .then((response) => {
            console.log(response.data.movies[0].title)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    getDataToState = () => {
        Axios.get(linkAPI)
        .then((response) => {
            this.setState({data: response.data.movies[0].title})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render(){
        return(
            <div>
                <h1>
                    Fetch Data API - 1 (Open Inspect then Console)
                </h1>
                <input type='button' value='Ambil' onClick={this.get} />
                <br />
                <br />
                <input type='button' value='Ambil Data' onClick={this.getData} />
                <br />
                <br />
                <input type='button' value='Ambil Data Movies' onClick={this.getDataMovies} />
                <br />
                <br />
                <input type='button' value='Ambil Data Movies Indeks ke-0' onClick={this.getDataMoviesIndeks0} />
                <br />
                <br />
                <input type='button' value='Ambil Data Movies Indeks ke-0 Title' onClick={this.getDataMoviesIndeks0Title} />
                <br />
                <br />
                <input type='button' value='Tampilkan Data' onClick={this.getDataToState} />
                <br />
                <hr />
                <br />
                <h1>
                    Data :
                </h1>
                {
                    this.state.data
                }
            </div>
        )
    }
}