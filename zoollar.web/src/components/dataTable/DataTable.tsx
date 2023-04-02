import * as React from 'react';
import "./dataTable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';


export default function DataTable() {

  const [data, setData] = React.useState(userRows)

  const handleDelete = ({ id }: any) => {
    setData(data.filter(item => item.id !== id))
  }
  const actionColumn = [
    {
      field: "action", headerName: "Action", width: 200,
      renderCell: (params: any) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
              <DeleteOutlineIcon />
            </div>
          </div>
        );
      }
    }
  ]

  return (
    <div className="dataTable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}
