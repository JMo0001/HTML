import { Tab } from "bootstrap";
import { Component } from "react";
import { Table } from "reactstrap";
class R054_ReactstrapTable extends Component{
    render(){
        return(
            <Table striped hover>
            {/* <Table dart bordered> */}
            {/* <Table Borderless size="sm"> */}
        
            {/* </Table> */}
                <thead>
                    <tr>
                        <th>number</th>
                        <th>Book name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>React 100</td>
                        <td>100원</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>React 200</td>
                        <td>200원</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}
export default R054_ReactstrapTable;