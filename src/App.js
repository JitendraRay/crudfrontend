import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:8000/api/student/${id}`,{
      method:"delete",
    }).then(resp => resp.json()).then(resp => alert(resp.msg)).then(data => setRefresh(!refresh))
  }
  
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/student").then(resp => resp.json()).then(resp => setData(resp.data))
  },[refresh])
  return (
    <div className="justify-center items-center h-auto flex">
      <table className='border border-collapse'>
        <thead>
          <tr>
            <th className='border border-slate-500'>Roll No</th>
            <th className='border border-slate-500'>Name</th>
            <th className='border border-slate-500'>Father Name</th>
            <th className='border border-slate-500'>Email</th>
            <th className='border border-slate-500'>Contact</th>
            <th className='border border-slate-500'>City</th>
            <th className='border border-slate-500'>Pincode</th>
            <th className='border border-slate-500'>Action</th>
          </tr>
        </thead>
        <tbody>
         {
          data.map((value, index) => (
            <tr key={index}>
              <td className='border border-slate-500'>{value.id}</td>
              <td className='border border-slate-500'>{value.name}</td>
              <td className='border border-slate-500'>{value.father_name}</td>
              <td className='border border-slate-500'>{value.email}</td>
              <td className='border border-slate-500'>{value.contact}</td>
              <td className='border border-slate-500'>{value.city}</td>
              <td className='border border-slate-500'>{value.pincode}</td>
              <td className='border border-slate-500'>
                <button onClick={() => handleDelete(value.id)} class=" px-2 py-1 bg-red-400 text-white hover:bg-red-600 rounded">Delete</button>
              </td>
          </tr>
          ))
         }
        </tbody>
      </table>
    </div>
  );
}

export default App;
