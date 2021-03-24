import React, {Component} from 'react';
import CardArray from './CardArray'
import Navbar from "./Navbar"
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary'
import queryString from 'query-string'

class Page extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield:''
        }
    }

    onSearchChange = (event) =>{        
        this.setState({
            searchfield: event.target.value
        })
    }

    render(){
        
        if( this.state.robots.length === 0){
            return( <h1>Loading</h1>)
        }else{
        const newRobos = this.state.robots.filter(user=>{
            return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div>
                <Navbar searchchange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardArray robots={newRobos}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}
    componentDidMount(){
        const delayParam = queryString.parse(this.props.location.search)
        const delay = delayParam.delay
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then((users)=>{
            if(delay){
                setTimeout(()=>{
                    this.setState({robots: users})
                },(Number(delay)*1000))                
            }else{
                this.setState({robots: users})
            }             
        });
    }
}

export default Page;