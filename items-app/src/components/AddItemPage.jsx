import React from 'react';
//import http from 'axios';
import http from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

class AddItemPage extends React.Component {

    state = {
        item: {
            name: '',
            price: ''
        },
        listofItems: [],
        isEditMode: false,
        selectedIndex: null
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
        const { isEditMode, listofItems, item: { name, price }, selectedIndex } = this.state;
        if (isEditMode) {
            listofItems[selectedIndex].name = name.trim();
            listofItems[selectedIndex].price = price.trim();
            this.setState({ listofItems });
            this.handleCancelEditMode();
        } else {
            const { item } = this.state;
            this.setState((prevState) => ({
                listofItems: [...prevState.listofItems, item],
                item: {
                    name: '',
                    price: ''
                }
            }));
        }
        // console.log(listofItems);
    };

    handleRemoveItem = (index) => {
        const { listofItems } = this.state;
        listofItems.splice(index, 1);
        this.setState({ listofItems });
    };

    baseUrl = "http://localhost:5000/api/items";

    handleSaveChanges = async (event) => {
        event.preventDefault();
        const { listofItems } = this.state;
        const response = await http.post(`${this.baseUrl}/batch-items`, listofItems);
        if (response.status === 200) {
            // const listofItems = response.data;
            // this.setState({ listofItems });
            this.props.history.push('/allItemsPage');

        }
    };

    handleSelectItemToEdit = index => {
        const { listofItems } = this.state;

        const itemToSelect = listofItems[index];

        this.setState({
            item: {
                name: itemToSelect.name,
                price: itemToSelect.price
            },
            selectedIndex: index,
            isEditMode: true
        });
    };




    handleCancelEditMode = () => {
        this.setState({
            item: {
                name: '', price: ''
            },
            isEditMode: false,
            selectedIndex: null,
            isClickAdd: false
        });
    }

    render() {
        const { listofItems, item: { name, price }, isEditMode } = this.state;
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
                            <button className="btn btn-sm btn-primary" type="button" onClick={this.handleAdd}>
                                {isEditMode ? "Update" : "ADD"}
                            </button>
                            {isEditMode && (
                                <button className="btn btn-sm btn-warning ml-2" type="button" onClick={this.handleCancelEditMode} >Cancel</button>
                            )}
                        </div>
                    </div>
                </div>
                {/* \\{isAddButtonClick &&( )} */}
                <div className="card-body">
                    <div className="offset-2 col-sm-8 content">
                        {listofItems.length > 0 && (
                            <form onSubmit={this.handleSaveChanges}>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Price</th>
                                            <th width="100">Action</th>
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
                                                        className="btn btn-sm btn-warning"
                                                        onClick={() => this.handleRemoveItem(index)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-info ml-2" onClick={() => this.handleSelectItemToEdit(index)}><FontAwesomeIcon icon={faEdit} /></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button type="submit" className="btn btn-info">Save Changes</button>
                            </form>
                        )}
                    </div>
                </div>


            </div>
        );
    }
}
export default AddItemPage;