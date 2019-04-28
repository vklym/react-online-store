import React, { Component } from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import {routes} from './routes';
import { products } from './data/products'; 
import AdminPage from './scenes/admin/index';

const getProducts = async () => products;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }
  async componentDidMount(){
    const prods = await getProducts();
    this.setState({ products: prods })
  } 
  render() {
    return (
      <div className="App">
          <p>
            <Link to={routes.admin}>Admin</Link>
          </p>
          <Route
            exact
            path={routes.admin} 
            render={
              (renderProps) => (
                <AdminPage productList={this.state.products} {...renderProps} />
              )}
            />
      </div>
    );
  }
}

export default App;
