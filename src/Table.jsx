import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { data } from "./Data/data";
import moment from "moment";
import { Box, Button, IconButton } from "@mui/material";
import { FilterListIcon, SortIcon,GroupIcon,VisibilityIcon, Filtering, Grouping, SidePanel, Sorting, Visibility } from "./Components";



const Table = () => {
  const [toggleState, setToggleState] = useState(false);
  const [activeSidePanelComponent,setActiveSidePanelComponent] = useState({})
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
      showColumnFilters: false
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
        <IconButton onClick={() => {
          handleToggle(true)
          setActiveSidePanelComponent(components.visible)
          }}
        >
          <VisibilityIcon />
        </IconButton>
        <IconButton onClick={() => {
          handleToggle(true)
          setActiveSidePanelComponent(components.sort)
          }}>
          <SortIcon />
        </IconButton>
        <IconButton onClick={() => {
          handleToggle(true)
          setActiveSidePanelComponent(components.filter)
          }}>
          <FilterListIcon />
        </IconButton>
        <IconButton onClick={() => {
          handleToggle(true)
          setActiveSidePanelComponent(components.groupBy)
          }}>
          <GroupIcon />
        </IconButton>
      </Box>  
    ),
  }); 

  
  const handleGroupBy = (state) => {
    table.setGrouping([state]);
  }

  const handleSorting = (state) => {
    table.setSorting([state])
  }

  const clearVisibility = () => {
    table.resetColumnVisibility();
  }

  const clearSort = () => {
    table.resetSorting();
  }

  const components = useMemo(() => ({
    visible: <Visibility table={table} clearVisibility={clearVisibility} toggle={setToggleState} />,
    sort: <Sorting table={table} sortFn={handleSorting} clear={clearSort}/>,
    groupBy: <Grouping setGroupBy={handleGroupBy} handleToggle={setToggleState}/>,
    filter: <Filtering table={table}/>,
  }),[table])
  
  return (
    <>
      <MaterialReactTable table={table} />
      <SidePanel
        component={activeSidePanelComponent}
        heading={'Options'}
        toggleState={toggleState}
        setToggle={setToggleState}
        setToggleState={handleToggle}
      />
    </>
  );
};

export default Table;
