import React, { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-hot-toast"

const ComponentManager = () => {
  const [userList, setUserList] = useState([])

  const getDataFromBackend = async () => {
    // send request
    const res = await fetch("http://localhost:5000/components/getall")

    // accessing data from response
    const data = await res.json()

    console.log(data)
    setUserList(data)
  }

  useEffect(() => {
    getDataFromBackend()
  }, [])

  const deleteComp = async (id) => {
    console.log(id)
    const res = await fetch("http://localhost:5000/components/delete/" + id, {
      method: "DELETE",
    })

    if (res.status === 200) {
      getDataFromBackend()
      toast.success("Component Deleted Successfully!!")
    }
  }

  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container">
          <h1 className="display-3 fw-bold text-white text-center">Manage User Data</h1>
        </div>
      </header>

      <div className="container mt-4">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userList.map((comp) => (
              <tr>
                <td>{comp.title}</td>

                <td>
                  <button className="btn btn-danger" onClick={() => deleteComp(comp._id)}>
                    {" "}
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ComponentManager
