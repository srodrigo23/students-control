import * as React from 'react'
import { api } from "~/utils/api";
import { useEffect, useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type Student = {
  firstname: string
  lastname: string  
  ci:string
  codsis:string|undefined
  career: string
}

const columnHelper = createColumnHelper<Student>()

const columns = [
  columnHelper.accessor('firstname', {
    header: () => 'Fist Name',
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  // columnHelper.accessor(row => row.lastName, {
  //   id: 'lastName',
  //   cell: info => <i>{info.getValue()}</i>,
  //   header: () => <span>Last Name</span>,
  //   footer: info => info.column.id,
  // }),
  columnHelper.accessor('lastname', {
    header: () => 'Last Name',
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('codsis', {
    header: () => 'CodSis',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('ci', {
    header: () => 'CI',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('career', {
    header: () => 'Career',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  // columnHelper.accessor('visits', {
  //   header: () => <span>Visits</span>,
  //   footer: info => info.column.id,
  // }),
  // columnHelper.accessor('status', {
  //   header: 'Status',
  //   footer: info => info.column.id,
  // }),
  // columnHelper.accessor('progress', {
  //   header: 'Profile Progress',
  //   footer: info => info.column.id,
  // }),
]

const StudentsTable = ()=>{
  
  const [data, setData] = useState<Student[]>(() => [])
  const rerender = React.useReducer(() => ({}), {})[1]
  
  const {data:userData, isLoading} = api.user.getAll.useQuery();
  const {data:careerData} = api.career.getAll.useQuery();

  useEffect(() => {
    
    const defaultData: Student[] = []

    if(careerData){
      userData?.map((userdata: {
        id: string;
        firstname: string;
        lastname: string;
        ci: string;
        email: string | null;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
      })=>{
        defaultData.push(
          {
            firstname: userdata['firstname'],
            lastname: userdata['lastname'],
            ci:userdata['ci'],
            codsis:userdata?.student?.codSis,
            // inventory.find(({ name }) => name === "cherries");
            career:careerData?.find(({codCareer})=>{ codCareer === userdata.student.careerId })?.title
            // career:userdata?.student?.careerId
          }
        )
      })
    }

    console.log(defaultData, 'ans')
    setData(defaultData)
  },[userData, careerData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if ((isLoading)|| !userData) return <div>Loading...</div>  
  console.log(userData)
  return (
    <div className="h-full w-full overflow-scroll pl-4 pr-4">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th 
                  key={header.id}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
      {/* <div className="h-4" /> */}
      {/* <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button> */}
    </div>
  )
}

export default StudentsTable;

// const rootElement = document.getElementById('root')
// if (!rootElement) throw new Error('Failed to find the root element')

// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
