import React, { useState } from 'react';

const PropertyTaxCalculator = () => {
  const [year, setYear] = useState('2024-2025');
  const [cityClass, setCityClass] = useState('A1');
  const [propertyCategory, setPropertyCategory] = useState('');
  const [propertySubCategory, setPropertySubCategory] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [propertyArea, setPropertyArea] = useState('');
  const [floorData, setFloorData] = useState([
    {
      srNo: 1,
      floor: 'GF',
      propertyCategory: '',
      propertyType: '',
      propertySubCategory: '',
      coveredArea: '',
      usage: 'Self Occupied',
      rebate: 'No Rebate',
    },
  ]);

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleCityClassChange = (e) => {
    setCityClass(e.target.value);
  };

  const handlePropertyCategoryChange = (e) => {
    setPropertyCategory(e.target.value);
  };

  const handlePropertySubCategoryChange = (e) => {
    setPropertySubCategory(e.target.value);
  };

  const handlePropertyTypeChange = (e) => {
    setPropertyType(e.target.value);
  };

  const handlePropertyAreaChange = (e) => {
    setPropertyArea(e.target.value);
  };

  const handleFloorChange = (index, field, value) => {
    const updatedFloorData = [...floorData];
    updatedFloorData[index][field] = value;
    setFloorData(updatedFloorData);
  };

  const addMoreFloor = () => {
    setFloorData([
      ...floorData,
      {
        srNo: floorData.length + 1,
        floor: '',
        propertyCategory: '',
        propertyType: '',
        propertySubCategory: '',
        coveredArea: '',
        usage: 'Self Occupied',
        rebate: 'No Rebate',
      },
    ]);
  };

  const calculateTax = () => {
    // Implement your tax calculation logic here using the collected data
    // ...
  };

  return (
    <div className="container">
      <h2>Calculate Property Tax</h2>
      <div className="form-group">
        <label htmlFor="year">Year *</label>
        <select id="year" value={year} onChange={handleYearChange}>
          <option value="2024-2025">2024-2025</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="cityClass">City Class *</label>
        <select id="cityClass" value={cityClass} onChange={handleCityClassChange}>
          <option value="A1">A1</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="propertyCategory">Property Category *</label>
        <select
          id="propertyCategory"
          value={propertyCategory}
          onChange={handlePropertyCategoryChange}
        >
          <option value="">--Select--</option>
          {/* Add your property category options here */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="propertySubCategory">Property SubCategory *</label>
        <select
          id="propertySubCategory"
          value={propertySubCategory}
          onChange={handlePropertySubCategoryChange}
        >
          <option value="">--Select--</option>
          {/* Add your property sub-category options here */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="propertyType">Property Type *</label>
        <select
          id="propertyType"
          value={propertyType}
          onChange={handlePropertyTypeChange}
        >
          <option value="">--Select--</option>
          {/* Add your property type options here */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="propertyArea">Property Area *</label>
        <input
          type="text"
          id="propertyArea"
          value={propertyArea}
          onChange={handlePropertyAreaChange}
        />
      </div>
      <h3>Floor-Wise Detail</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Sr No. Floor *</th>
            <th>Property Category</th>
            <th>Property Type</th>
            <th>Property SubCategory</th>
            <th>Covered Area *</th>
            <th>Usage *</th>
            <th>Rebate *</th>
          </tr>
        </thead>
        <tbody>
          {floorData.map((floor, index) => (
            <tr key={index}>
              <td>{floor.srNo}</td>
              <td>
                <input
                  type="text"
                  value={floor.floor}
                  onChange={(e) =>
                    handleFloorChange(index, 'floor', e.target.value)
                  }
                />
              </td>
              <td>
                <select
                  value={floor.propertyCategory}
                  onChange={(e) =>
                    handleFloorChange(
                      index,
                      'propertyCategory',
                      e.target.value
                    )
                  }
                >
                  <option value="">--Select--</option>
                  {/* Add your property category options here */}
                </select>
              </td>
              <td>
                <select
                  value={floor.propertyType}
                  onChange={(e) =>
                    handleFloorChange(index, 'propertyType', e.target.value)
                  }
                >
                  <option value="">--Select--</option>
                  {/* Add your property type options here */}
                </select>
              </td>
              <td>
                <select
                  value={floor.propertySubCategory}
                  onChange={(e) =>
                    handleFloorChange(
                      index,
                      'propertySubCategory',
                      e.target.value
                    )
                  }
                >
                  <option value="">--Select--</option>
                  {/* Add your property sub-category options here */}
                </select>
              </td>
              <td>
                <input
                  type="text"
                  value={floor.coveredArea}
                  onChange={(e) =>
                    handleFloorChange(index, 'coveredArea', e.target.value)
                  }
                />
              </td>
              <td>
                <select
                  value={floor.usage}
                  onChange={(e) =>
                    handleFloorChange(index, 'usage', e.target.value)
                  }
                >
                  <option value="Self Occupied">Self Occupied</option>
                  {/* Add other usage options here */}
                </select>
              </td>
              <td>
                <select
                  value={floor.rebate}
                  onChange={(e) =>
                    handleFloorChange(index, 'rebate', e.target.value)
                  }
                >
                  <option value="No Rebate">No Rebate</option>
                  {/* Add other rebate options here */}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addMoreFloor}>ADD MORE..</button>
      <button onClick={calculateTax}>Calculate</button>
      <button>Cancel</button>
    </div>
  );
};

export default PropertyTaxCalculator;