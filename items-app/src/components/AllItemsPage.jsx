import React from 'react';
import http from 'axios';


class AllItemsPage extends React.Component {
    state = {
        listofItems: []
    }

    baseUrl = "http://localhost:5000/api/items";

    async componentDidMount() {

        const response = await http.get(`${this.baseUrl}`);

        if (response.status === 200) {
            const listofItems = response.data;
            this.setState({ listofItems });
        }
    } 
    render() {
        const { listofItems } = this.state;
        return (
            <div className="offset-1 col-sm-10">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listofItems.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default AllItemsPage;