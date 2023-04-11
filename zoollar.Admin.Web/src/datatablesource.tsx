import * as React from 'react';
import { GridColDef } from "@mui/x-data-grid";
import Switch from '@mui/material/Switch';


export const userColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params: any) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    }
  },
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'age', headerName: 'Age', width: 100 },
  {
    field: 'status', headerName: 'Status', width: 160,
    renderCell: (params: any) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    }
  },
  {
    field: 'locked', headerName: 'Locked', width: 90,
    renderCell: (params: any) => {
      return (
        <Switch
          checked={params.row.locked}
          inputProps={{ 'aria-label': 'controlled' }} />
      );
    }
  },

];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/45204/alm-friuli-snow-snowfall-45204.jpeg",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
    locked: true
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg",
    status: "passive",
    email: "2snow@gmail.com",
    age: 42,
    locked: false
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg",
    status: "pending",
    email: "3snow@gmail.com",
    age: 35,
    locked: true
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/45204/alm-friuli-snow-snowfall-45204.jpeg",
    status: "active",
    email: "4snow@gmail.com",
    age: 35,
    locked: false
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/45204/alm-friuli-snow-snowfall-45204.jpeg",
    status: "passive",
    email: "5snow@gmail.com",
    age: 22,
    locked: false
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/45204/alm-friuli-snow-snowfall-45204.jpeg",
    status: "active",
    email: "6snow@gmail.com",
    age: 35,
    locked: false
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/45204/alm-friuli-snow-snowfall-45204.jpeg",
    status: "passive",
    email: "7snow@gmail.com",
    age: 36,
    locked: false
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/45204/alm-friuli-snow-snowfall-45204.jpeg",
    status: "active",
    email: "8snow@gmail.com",
    age: 35,
    locked: false
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/45204/alm-friuli-snow-snowfall-45204.jpeg",
    status: "pending",
    email: "snow@gmail.com",
    age: 35,
    locked: false
  },
  {
    id: 10,
    username: "Bello",
    img: "https://images.pexels.com/photos/45204/alm-friuli-snow-snowfall-45204.jpeg",
    status: "pending",
    email: "snow@gmail.com",
    age: 35,
    locked: false
  }
]