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
          {/* <div className="max-w-screen-md mx-auto justify-end me-0">
              <form className="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg">
                <svg
                  className="absolute left-2 block h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={11} cy={11} r={8} className="" />
                  <line x1={21} y1={21} x2="16.65" y2="16.65" className="" />
                </svg>
                <input
                  className="h-14 w-full rounded-md py-4 pr-80 pl-12 outline-none focus:ring-2"
                  type="name"
                  name="search"
                  value={searchInput}
                  onChange={handleInputChange}
                  placeholder="Search"
                />
         
              </form>
            </div> */}
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
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=100&q=80"
                              alt="Profile"
                              className="h-full w-full rounded-full"
                            />
                          </div>
                          <div className="pl-3">
                            <div className="text-base font-semibold">
                              {data?.name}
                            </div>
                            <div className="font-normal">{data?.email}</div>
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
