// EditableTable.js
import React, { useState } from 'react';
import Select from 'react-select';

const EditableTable = ({ data, headers, onInputChange, onSelectChange, dropdownColumns, dropdownOptions }) => {
  const [tableData, setTableData] = useState(data);

  const handleInputChange = (e, id, field) => {
    const updatedData = tableData.map((row) =>
      row.id === id ? { ...row, [field]: e.target.value } : row
    );
    setTableData(updatedData);
    if (onInputChange) {
      onInputChange(updatedData);
    }
  };

  const handleSelectChange = (selectedOption, id, field) => {
    let selectedValue = selectedOption.map(option_ => option_.value)
    const updatedData = tableData.map((row) =>
      row.id === id ? { ...row, [field]: selectedValue } : row
    );
    setTableData(updatedData);
    if (onSelectChange) {
      onSelectChange(updatedData);
    }
  };

  return (
    <table  className="table">
      <thead>
        <tr>
            {headers && headers.map((header, index)=> (
                <th scope="col" key={index}>{header}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            {
                headers && headers.map((header, index)=>(
                    <>
                    {dropdownColumns.includes(header) ? (
                        <td>
                            <Select
                            isMulti
                            // value={{ label: row[header], value: row[header] }}
                            onChange={(selectedOption) =>
                                handleSelectChange(selectedOption, row.id, header)
                            }
                            options={dropdownOptions[header] || []}
                            />
                        </td>
                        ) : (
                        <td>
                            <input
                            type="text"
                            className='border border-white'
                            value={row[header]}
                            onChange={(e) => handleInputChange(e, row.id, header)}
                            />
                        </td>
                        )}
                    </>
                ))
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditableTable;
