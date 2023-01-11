import React from 'react';
import Axios from 'axios';

const LinkAPI = 'https://cat-fact.herokuapp.com/facts'

export default class LifeCycleMethod extends React.Component{

    state = {
        nama: 'Joko',
        data: null
    }

    componentDidMount(){
        console.log('Component Did Mount Jalan')
        this.onGetData()
    }

    onGetData = () => {
        Axios.get(LinkAPI)
        .then((res) => {
            console.log(res.data)
            this.setState({data: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    // componentDidUpdate(){
    //     alert('Component Did Update Jalan')
    // }

    // componentWillUnmount(){
    //     alert('Component Will Unmount Jalan')
    // }

    render(){
        console.log('Render Jalan')
        if(this.state.data === null){
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
                {/* <input type='button' value='Tes Did Update' onClick={() => this.setState({nama: 'Patrick'})} /> */}
                {
                    this.state.data.map((value, index) => {
                        return(
                            <div key={index}>
                                <h1>
                                    {value.text}
                                </h1>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}