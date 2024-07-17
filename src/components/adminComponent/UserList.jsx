import React, { useEffect, useState } from "react";
import { userList } from "../../api/adminApi";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userList()
      .then((res) => {
        setUsers(res?.data?.users);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="mx-auto w-full px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div className="pb-6 font-serif">
            <h2 className="font-bold text-gray-700">Users List</h2>
            <span className="text-xs text-gray-500">
              View accounts of registered users
            </span>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-black text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-3">ID</th>
                  <th className="px-5 py-3">Full Name</th>
                  <th className="px-5 py-3">Mobile </th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-black">
                {users.length > 0 ? (
                  users.map((data) => (
                    <tr key={data?._id}>
                      <td className="border-b border-gray-200 bg-gray-300 px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">{data?._id}</p>
                      </td>
                      <td className="border-b border-gray-200 bg-gray-300 px-5 py-5 text-sm">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0 bg-gray-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                              {data?.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="ml-3">
                            <div className="font-medium">{data?.name}</div>
                            <div className="text-gray-500">{data?.email}</div>
                          </div>
                        </div>
                      </td>

                      <td className="bg-gray-300 border-gray-200 border-b">
                        {data?.phone}
                      </td>
                      <td className="px-4 py-4 bg-gray-300 border-gray-200 border-b">
                        {data?.isVerified ? (
                          <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                            Verified
                          </span>
                        ) : (
                          <span className="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-red-900">
                            Not Verified
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-4 text-center text-gray-900 dark:text-white"
                    >
                      No users
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
