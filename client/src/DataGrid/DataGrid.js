/*
    DataGrid component to load Account table in App page. This component handle data table
    related functions such as - Sort, Filter and Download tabular data in CSV format
*/

import React, { useState, useMemo } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarFilterButton, GridToolbarExport } from '@material-ui/data-grid';

/* Column config */
import { getConfig } from '../Config';

// Custom Tool bar component
function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarFilterButton />
            <GridToolbarExport />
        </GridToolbarContainer>
    );
}

export default function DataGridDemo(props) {
    let { data: accountData } = props;

    const config = getConfig('DataGrid'),
        keyNames = Object.keys(accountData[0]),
        [pageSize, setPageSize] = useState(10),
        handlePageSizeChange = (params) => {
            setPageSize(params.pageSize)
        },
        createColumnList = () => {
            let colArr = [];

            keyNames.map((col, idx) => {
                let obj = {
                    field: col,//`col ${idx}`,
                    headerName: col,
                    description: config.colDefinition[col],
                    sortable: config.sortCol.includes(col),
                    filterable: config.filterCol.includes(col)
                }

                if (config.colWidth[col]) {
                    obj.width = config.colWidth[col];
                }

                if (config.formatCol.includes(col)) {
                    obj.valueFormatter = (params) => {
                        return `${new Date(params.value).toLocaleDateString()} ${new Date(params.value).toLocaleTimeString()}`;
                    }
                }
                colArr.push(obj);
            });

            return colArr;
        },
        createRowList = () => {
            let rowArr = [];

            accountData.map((data, idx) => {
                let obj = {...data};

                obj.id = idx;
                rowArr.push(obj);
            });

            return rowArr;
        },
        columnList = useMemo(() => createColumnList(), [accountData]),
        rowList = useMemo(() => createRowList(), [accountData]);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                pagination
                aria-label="List of accounts"
                rows={rowList}
                columns={columnList}
                pageSize={pageSize}
                rowsPerPageOptions={[10, 20, 50, 100]}
                onPageSizeChange={handlePageSizeChange}
                autoHeight={true}
                disableColumnMenu
                sortingOrder={['desc', 'asc']}
                components={{
                    Toolbar: CustomToolbar
                }}
                density="compact"
            />
        </div>
    );
}
