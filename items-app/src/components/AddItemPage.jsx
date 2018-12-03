import React from 'react';
//import http from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class AddItemPage extends React.Component {

    state = {
        item: {
            name: '',
            price: ''
        },
        listofItems: []
    };


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            item: {
                ...prevState.item,
                [name]: value
            }
        }));
    };

    // add item in the state

    handleAdd = () => {
        const { item, listofItems } = this.state;
        this.setState((prevState) => ({
            listofItems: [...prevState.listofItems, item],
            item: {
                name: '',
                price: ''
            }
        }));
        console.log(listofItems);
    };

    handleRemoveItem = (index) => {
        const { listofItems } = this.state;
        listofItems.splice(index, 1);
        this.setState({ listofItems });
    };

    render() {
        const { listofItems, item: { name, price } } = this.state;
        return (
            <div className="card-body border minHeight">

                <div className="offset-2 col-sm-8">

                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">
                            Item Name
                            </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="price" className="col-sm-2 col-form-label">
                            Price
                            </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                name="price"
                                value={price}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <button className="btn  btn-primary" type="button" onClick={this.handleAdd}>Add</button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="offset-2 col-sm-8 content">
                        <form onSubmit={this.handleSaveChanges}>
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listofItems.map((obj, index) => (
                                        <tr key={index}>
                                            <td>{obj.name}</td>
                                            <td>{obj.price}</td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-info"
                                                    onClick={() => this.handleRemoveItem(index)}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button type="submit" className="btn btn-info">Save Changes</button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}
export default AddItemPage;