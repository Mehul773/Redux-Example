import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, toggleUserSelection } from "../actions/userActions";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://api.github.com/users");
        const usersDoc = res.data;
        usersDoc.forEach((user) => {
          user.isSelected = false;
        });
        dispatch(addUsers(usersDoc));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [dispatch]);

  const handleCheckboxChange = (event) => {
    const checkedId = parseInt(event.target.value);
    if (event.target.checked) {
      setSelectedIds((prevSelectedIds) => [...prevSelectedIds, checkedId]);
    } else {
      setSelectedIds((prevSelectedIds) =>
        prevSelectedIds.filter((id) => id !== checkedId)
      );
    }
  };
  console.log(selectedIds);
  const handleToggleUserSelection = () => {
    selectedIds.map((id) => {
      dispatch(toggleUserSelection(id));
    });
  };

  return (
    <div>
      <button onClick={() => handleToggleUserSelection()}>click me</button>
      <Link to={"/selected"}>second</Link>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>photo</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {users
            ?.filter((user) => user.isSelected == false)
            .map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.login}</td>
                <td>
                  <img src={user.avatar_url} alt="avatar" />
                </td>
                <td>
                  <input
                    type="checkbox"
                    value={user.id}
                    checked={selectedIds.includes(user.id)}
                    onChange={handleCheckboxChange}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
