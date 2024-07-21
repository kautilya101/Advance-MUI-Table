import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { data } from "./Data/data";
import moment from "moment";
import { Box, Button, IconButton } from "@mui/material";
import { FilterListIcon, SortIcon,GroupIcon,VisibilityIcon, Filtering, Grouping, SidePanel, Sorting, Visibility } from "./Components";
import './App.css';


const Table = () => {
  const [toggleState, setToggleState] = useState(false);
  const [selectedOption,setSelectedOption] = useState(null)
  const handleToggle = (toggle) => {
    if (event.type === "keydown" ) return;
    setToggleState(toggle);
  };

  const handleToolButtonClick = (option) => {
    setSelectedOption(option);
    handleToggle(true)
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        size: 3,
        filter: true,
        
      },
      {
        accessorKey: "name",
        header: "Name",
        filterFn: "fuzzy",
        size: 30,
        filter: true,
        enableSorting:true,
        sortDescFirst: true,
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
        filterVariant: "range-slider",
        filter: true
      },
      {
        accessorKey: "sale_price",
        header: "Sale Price",
        size: 100,
        enableColumnFilter: false,
        filterVariant: "range-slider",
      },
    ],
    []
  );


  const table = useMaterialReactTable({
    columns,
    data,
    initialState:  {
      density: 'compact', 
      showColumnFilters: false,
    },
    muiPaginationProps: {
      color: "primary",
      shape: "rounded",
      showRowsPerPage: false,
      variant: "outlined",
    },
    enableFacetedValues: true,
    enableGrouping: true,
    enableColumnActions: false,
    enableColumnDragging: false,
    columnFilterDisplayMode: "custom",
    paginationDisplayMode: "pages",
    renderToolbarInternalActions: ({ table }) => (
      <Box>
        <IconButton onClick={() => handleToolButtonClick('visible')}
        >
          <VisibilityIcon />
        </IconButton>
        <IconButton onClick={() => handleToolButtonClick('sort')}>
          <SortIcon />
        </IconButton>
        <IconButton onClick={() => handleToolButtonClick('filter')}>
          <FilterListIcon />
        </IconButton>
        <IconButton onClick={() => handleToolButtonClick('groupBy')}>
          <GroupIcon />
        </IconButton>
      </Box>  
    ),
  }); 

  
  const handleSorting = (state) => {
    table.setSorting([state])
  }

  const handleGroupBy = (state) => {
    table.setGrouping([state]);
  }

  const clearVisibility = () => {
    table.resetColumnVisibility();
  }

  const clearSort = () => {
    table.resetSorting();
  }

  return (
    <>
      <MaterialReactTable table={table} />
      <SidePanel
        table={table}
        option={selectedOption}
        toggleState={toggleState}
        setToggle={setToggleState}
        setToggleState={handleToggle}
        handleGroupBy={handleGroupBy}
        handleSorting={handleSorting}
        clearSort={clearSort}
        clearVisibility={clearVisibility}
      />
    </>
  );
};

export default Table;
