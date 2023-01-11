// import { render } from '@testing-library/react';
import React from 'react';
import Axios from 'axios';

const linkAPI = 'https://reactnative.dev/movies.json'

export default class Data1 extends React.Component{

    state = {
        data: null
    }

    getDataToStateMap = () => {
        Axios.get(linkAPI)
        .then((response) => {
            this.setState({data: response.data.movies})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render(){
        if(this.state.data === null){
            return(
                <div>
                    <h1>
                        Fetching Data API ...
                    </h1>
                    <input type='button' value='Tampilkan Data Mapping' onClick={this.getDataToStateMap} />
                </div>
            )
        }
        return(
            <div>
                <h1>
                    Fetch Data API - 1
                </h1>
                <br />
                <br />
                <br />
                <h1>
                    Data :
                </h1>
                {
                    this.state.data.map((value, index) => {
                        return(
                                <div key={index}>
                                    <h1>
                                        {value.title}
                                    </h1>
                                    <p>
                                        Film ini dirilis pada {value.releaseYear}
                                    </p>
                                </div>
                        )
                    })
                }
            </div>
        )
    }
}