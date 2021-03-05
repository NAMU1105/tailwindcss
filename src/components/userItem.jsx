import React from "react";
import { useHistory, Link } from "react-router-dom";

const UserItem = ({
  data,
  handleSingleCheck,
  checkItems,
  loading,
  index,
  setCheckItems,
}) => {
  const {
    id,
    name,
    email,
    title = "title",
    // body,
    status = "online",
    // role,
    photo = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60",
  } = data;

  const history = useHistory();

  return (
    <tr id={id}>
      <td className="px-6">
        <input
          type="checkbox"
          name=""
          id=""
          onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
          checked={checkItems.includes(data.id) ? true : false}
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={photo} alt="person" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 cursor-pointer">
              <Link to={`/users/${id}`}>{name}</Link>
            </div>
            <div className="text-sm text-gray-500">{email}</div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{title}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {status}
        </span>
      </td>
      {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {role}
      </td> */}
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="/" className="text-layout hover:text-layout-dark">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default UserItem;
