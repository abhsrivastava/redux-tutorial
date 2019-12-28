import * as React from 'react';
import {Provider} from 'react-redux';
import logo from './images/logo';
import './css/App.css';
import PostForm from './components/PostForm';
import Posts from './components/Posts';

export default class App extends React.Component<{}, {}>{
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-Header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-tite">Welcome to React</h1>
                    </header>
                    <PostForm/>
                    <hr />
                    <Posts/>
                </div>
            </Provider>
        );
    }
}