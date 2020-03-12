import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';

export default class Product extends Component {
    state = {
        product: {},
    };

    async componentDidMount() {

        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
    }

    render() {
        const { product } = this.state;

        return (
            <div className="product-info">
                <img src={product.img_url} width="100" height="100"></img>
                <strong>{product.title}</strong>
                <p>{product.description}</p>
                <div className="actions">
                    <Link to="/">Anterior</Link>
                </div>
            </div>
        )
    };
}