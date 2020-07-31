import React, { useState } from "react";
import ArrowUp from "./../svg/arrowUp";
import ArrowDown from "./../svg/arrowDown";
import DetailedItem from "./../detailItem/detailItem";
import SearchElement from "./../search/searchElement";

const Table = ({
  sortData,
  contactData,
  directionSort,
  detailRow,
  detailItemData,
  rowIsClick,
  onSearchSend,
}) => {
  const [fieldData, setFieldData] = useState("");
  const Arrow = () => {
    return directionSort ? <ArrowDown /> : <ArrowUp />;
  };

  const fieldSortData = (field) => {
    sortData(field);
    console.log(field);
    setFieldData(field);
  };

  return (
    <div>
      <SearchElement onSearchSend={onSearchSend} />
      <table className="table">
        <thead>
          <tr>
            <th
              onClick={() => {
                fieldSortData("id");
              }}
            >
              id {fieldData === "id" ? <Arrow /> : null}
            </th>
            <th
              onClick={() => {
                fieldSortData("firstName");
              }}
            >
              FirstName {fieldData === "firstName" ? <Arrow /> : null}
            </th>
            <th
              onClick={() => {
                fieldSortData("lastName");
              }}
            >
              LastName {fieldData === "lastName" ? <Arrow /> : null}
            </th>
            <th
              onClick={() => {
                fieldSortData("email");
              }}
            >
              email {fieldData === "email" ? <Arrow /> : null}
            </th>
            <th
              onClick={() => {
                fieldSortData("phone");
              }}
            >
              phone {fieldData === "phone" ? <Arrow /> : null}
            </th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((item) => (
            <tr key={item.id + item.email} onClick={() => detailRow(item)}>
              <td> {item.id}</td>
              <td> {item.firstName}</td>
              <td> {item.lastName}</td>
              <td> {item.email}</td>
              <td> {item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {rowIsClick ? <DetailedItem detailItemData={detailItemData} /> : null}
    </div>
  );
};
//rowIsClick
export default Table;
