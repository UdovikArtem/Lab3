import {BrowserRouter, Navigate} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Table from '../../conteiners/Table';
import Form from '../../conteiners/Form';
import Login from '../../conteiners/Login';
import { Component } from 'react';
// import {useDispatch, useSelector} from "react-redux"
import PropTypes from 'prop-types'


class App extends Component {
    // static propTypes = {
    //     isLogined: PropTypes.bool.isRequired
    // }
    // dispatch = useDispatch()
    // cach = useSelector(state => state)

    // state = JSON.parse(window.localStorage.getItem('state')) || {
    //     characters: [],
    //     characterLastId: 1,
    //     isLogined: false
    // };

    // setState(state) {
    //     window.localStorage.setItem('state', JSON.stringify(state));
        
    //     super.setState(state);
    // }

    // removeCharacter = index => {
    //     const { characters } = this.state;
    //     this.setState({
    //         characters: characters.filter((character, i) => { 
    //             return i !== index;
    //         }),
    //         characterLastId: this.state.characterLastId,
    //         isLogined: this.state.isLogined
    //     });

    // }

    // handleSubmit = character => {
    //     this.setState({
    //         characters: [...this.state.characters, character], 
    //         characterLastId: this.state.characterLastId + 1, 
    //         isLogined: this.state.isLogined});
    // }

    // loginUser = ({email, password}) =>{
    //     console.log(this.state)
    //     let user = this.state.characters.filter((character) =>{
    //         return email === character.email
    //     })
    //     user = user.filter((character) => {
    //         return password === character.password
    //     })
    //     if(user.length !== 0){
    //         this.setState({...this.state, isLogined: true});
    //     }
    // }

    render() {
        const {isLogined} = this.props
        // alert(isLogined)
        return(
            <BrowserRouter>
                    {
                       isLogined ?  
                       <Routes>
                        <Route path='/users' element={<Table/>}/>
                        <Route path='*' element={<Navigate to='/users'/>}/>
                       </Routes>
                       :
                       <Routes>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/form' element={<Form/>}/>
                            <Route path='*' element={<Navigate to='/login'/>}/>
                       </Routes>
                    }
            </BrowserRouter>
        );
    }
}

export default App;
