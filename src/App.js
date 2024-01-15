// App.js
import React from 'react';
import EditableTable from './EditableTable';

const App = () => {
  const data = [
    { id: 1, name: 'John', age: 25, country: 'USA' },
    { id: 2, name: 'Alice', age: 30, country: 'Canada' },
  ];

  const headers = ['id', 'name', 'age', 'country']
  const dropdownColumns = [ 'country'];

  const dropdownOptions = {
    country: [
      { label: 'USA', value: 'USA' },
      { label: 'UK', value: 'UK' },
      { label: 'India', value: 'India' },
      { label: 'China', value: 'China' },
      { label: 'Canada', value: 'Canada' },
    ]
  };

  const handleInputChange = (updatedData) => {
    console.log('Updated data with input change:', updatedData);
  };

  const handleSelectChange = (updatedData) => {
    console.log('Updated data with select change:', updatedData);
  };

  return (
    <div className="App">
      <h1>custom Table</h1>
      <EditableTable
        data={data}
        headers = {headers}
        onInputChange={handleInputChange}
        onSelectChange={handleSelectChange}
        dropdownColumns={dropdownColumns}
        dropdownOptions={dropdownOptions}
      />
    </div>
  );
};

export default App;
