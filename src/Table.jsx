import React, { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { data } from "./Data/data";
import moment from "moment";
import { Box, Button, IconButton } from "@mui/material";
import SidePanel from "./Components/SidePanel";
import FilterListIcon from "@mui/icons-material/FilterList";
import Filtering from "./Components/Filtering";
import Grouping from "./Components/Grouping";
import Sorting from "./Components/Sorting";

const Table = () => {
  const [toggleState, setToggleState] = useState(false);
  const handleToggle = (toggle) => {
    if (event.type === "keydown" ) return;
    setToggleState(toggle);
  };

  

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        size: 3,
        filter: true
      },
      {
        accessorKey: "name",
        header: "Name",
        filterFn: "fuzzy",
        size: 30,
        filter: true
      },
      {
        accessorKey: "category",
        header: "Category",
        size: 30,
        filterVariant: "multi-select",
        filter: true
      },
      {
        accessorKey: "subcategory",
        header: "Subcategory",
        size: 30,
        filterVariant: "multi-select",
        filter: true
      },
      {
        accessorFn: (originalRow) => new Date(originalRow.createdAt),
        id: 'createdAt',
        header: "Created At",
        Cell: ({ renderedCellValue }) => {
          const date = moment(renderedCellValue);
          return <>{date.format("DD-MMM-YYYY hh:mm")}</>;
        },
        filter: true,
        filterVariant:'date-range'
      },
      {
        // accessorKey: "updatedAt",
        accessorFn: (originalRow) => new Date(originalRow.updatedAt), //convert to date for sorting and filtering
        id: 'updatedAt',
        header: "Updated At",
        Cell: ({ renderedCellValue }) => {
          const date = moment(renderedCellValue);
          return <>{date.format("DD-MMM-YYYY hh:mm")}</>;
        }, // convert back to string for display
        filter: true,
        filterVariant: "date-range"
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 100,
        filterVariant: "range",
        filter: true
      },
      {
        accessorKey: "sale_price",
        header: "Sale Price",
        size: 100,
        filter: false
      },
    ],
    []
  );


  const table = useMaterialReactTable({
    columns,
    data,
    initialState:  {
      density: 'compact', 
    },
    muiPaginationProps: {
      color: "primary",
      shape: "rounded",
      showRowsPerPage: false,
      variant: "outlined",
    },
    enableColumnActions: false,
    enableSorting: false,
    enableFacetedValues: true,
    enableGrouping: true,
    enableColumnDragging: false,
    columnFilterDisplayMode: "custom",
    paginationDisplayMode: "pages",
    renderToolbarInternalActions: ({ table }) => (
      <IconButton onClick={() => handleToggle(true)}>
        <FilterListIcon />
      </IconButton>
    ),
  }); 

  const handleGroupBy = (val) => {
    table.setGrouping([val]);
  }
  
  return (
    <>
      <MaterialReactTable table={table} />
      <SidePanel
        // component=<Grouping setGroupBy={handleGroupBy} handleToggle={setToggleState}/>
        // component=<Filtering table={table}/>
        component=<Sorting table={table} />
        table={table}
        toggleState={toggleState}
        setToggleState={handleToggle}
      />
    </>
  );
};

export default Table;
