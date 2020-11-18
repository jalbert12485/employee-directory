import React, { Component } from "react";
import EmployeeList from "./components/EmployeeList";
import employees from "./employees.json";




const styles = {
  container: {
    borderStyle: "solid",
    borderWidth: "20px",
    borderColor: "#A37871",
    backgroundColor: "#F3D8C7"
  },
  li: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "black"
  }
};

class App extends Component {
  state = {
    "employees": employees,
    "filteredEmployees": employees
  };

  handleLocationChange= location=>{
    let array=[];
    if(location !== "all"){
      array=this.state.employees.filter(employee => employee.Region === location);
    }else{
      array=this.state.employees;
    }
    this.setState({ filteredEmployees: array });
  }

  handleSortChange= sortOption => {
    let array=[];
    array=this.state.filteredEmployees.sort((a, b) => {
      if (a[sortOption] < b[sortOption]) {
        return -1;
      }
      if (a[sortOption] > b[sortOption]) {
        return 1;
      }
    
      return 0;
    });

    this.setState({filteredEmployees: array});
  }

  render() {
    return (
      <div className="container p-4 mr-auto ml-auto" style={styles.container}>
        <EmployeeList employees={this.state.filteredEmployees} locationChange={this.handleLocationChange} sortChange={this.handleSortChange}/>
      </div>
    );
  }
}

export default App;