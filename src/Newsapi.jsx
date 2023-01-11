import React from 'react'
import Axios from 'axios'

const LinkAPI = 'https://newsapi.org/v2/everything?q=apple&from=2023-01-08&to=2023-01-08&sortBy=popularity&apiKey=b64670ddd924417e9e13cd387a55b94e'

export default class Newsapi extends React.Component{

    state = {
        articles: null
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        Axios.get(LinkAPI)
        .then((res) => {
            console.log(res.data.articles)
            this.setState({articles: res.data.articles})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        if(this.state.articles === null){
            return(
                <div>
                    <h1>
                        Loading ...
                    </h1>
                </div>
            )
        }
        return(
            <div>
                {
                    this.state.articles.map((value, index) => {
                        return(
                            <div key={index}>
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    <div className='col'>
                                        <div className='card h-100'>
                                            <img className='card-img-top' style={{"height": "100px"}} src={value.urlToImage}></img>
                                            <div className='card-body'>
                                                <h5 className='card-title'>{value.title}</h5>
                                                <p className='card-text'>
                                                    {
                                                        value.content
                                                    }
                                                </p>
                                                <b>Penulis: {value.author}</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}