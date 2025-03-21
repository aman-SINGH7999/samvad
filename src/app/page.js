"use client"
// import Image from "next/image";
import React, {useState} from "react";
import { writeUserData, getAllData} from "@/firebaseConfig";



export default function Home() {
  const [users, setUsers] = useState(null);
  let c = 0;

  const handle = ()=>{
    writeUserData(`test/users/${c}`, {name:`pintua_${c}`, email:`pintu@ji_${c}.com`});
    c++;
  }

  const handleget = async ()=>{
    const response = await getAllData("test/users");
    console.log("Response : ", response);
    setUsers(response);
  }

  return (
    <div className="">
        Samvad
        <button onClick={handle}
         className="bg-white text-black p-4 rounded-2xl m-52 cursor-pointer">add data</button>
         <button onClick={handleget}
         className="bg-white text-black p-4 rounded-2xl m-52 cursor-pointer">get data</button>
         {
          users?.status == 201 
          ? <div className="flex flex-col">
              {users?.data?.map((user)=>{
            return <div key={user.email} className="bg-white p-2 text-blue-900 rounded-md mt-4"> {user.name}</div>
          })}
          </div>
          : <div>{users?.message}</div>
         }
    </div>
  );
}
