import React, { Fragment } from "react";
import Loader from "./../loader/loader";
import Table from "./../table/table";
import InputForm from "./../inputForm/inputForm";

const TableBody = ({
  contactData,
  sortData,
  detailItemData,
  directionSort,
  detailRow,
  isLoading,
  rowIsClick,
  onSearchSend,
  getInputFormData,
}) => {
  return isLoading ? (
    <Loader />
  ) : (
    <Fragment>
      <InputForm getInputFormData={getInputFormData} />
      <Table
        contactData={contactData}
        sortData={sortData}
        directionSort={directionSort}
        detailRow={detailRow}
        detailItemData={detailItemData}
        rowIsClick={rowIsClick}
        onSearchSend={onSearchSend}
      />
    </Fragment>
  );
};
export default TableBody;
