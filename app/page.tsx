"use client"
import { useGetJokesQuery } from "@/store/apiSlice";
import { TailSpin } from "react-loader-spinner";
import { setSearch } from "@/store/api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

export default function Home() {
  const { data: response, isLoading, error } = useGetJokesQuery()
  // const { search } = useSelector(
  //   (state: RootState) => state.posts
  // );

  const dispatch = useDispatch();

  return (
    <main className="flex flex-col items-center mt-4">
      <div className="flex gap-2">
        <input type="search"
        placeholder="Search"
        // value={search ?? ""}
        className="p-2 text-gray-400 rounded-md shadow-md"
        // onChange={(val)=>dispatch(setSearch(val))}
        />

        <button className="bg-blue-500 w-32 p-2 text-white rounded-lg shadow-md">Search</button>
      </div>
      { 
        isLoading?(<TailSpin color="#OOBFFF" height={80} width={80}/>):
           (response?.jokes.map((joke)=>{
            return (
              <div key={joke.id} className="flex flex-col bg-blue-500 w-3/4 justify-center items-center gap-2 mt-4 p-8">
                  <div className="flex flex-col bg-gray-600 p-2 w-full items-center text-center">
                        <h1 className="text-center text-white">Category: {joke.category}</h1>
                        <h3 className="text-center text-white">Type: {joke.type}</h3>
                        <p className="text-center text-white">Set up: {joke.setup}</p>
                        <p className="text-center text-white">Delivery: {joke.delivery}</p>
                  </div>
                  <div className="flex gap-2 w-full bg-red-200 rounded-lg p-4 shadow-lg mb-4">
                        <p className={`${joke.flags.nsfw ? 'bg-green-500' : ' bg-red-600'} p-2 w-32 rounded-md shadow-md`}>Nsfw</p>
                        <p className={`${joke.flags.religious ? 'bg-green-500' : ' bg-red-600'} p-2 w-32 rounded-md shadow-md`}>Religious</p>
                        <p className={`${joke.flags.political ? 'bg-green-500' : ' bg-red-600'} p-2 w-32 rounded-md shadow-md`}>Political</p>
                        <p className={`${joke.flags.racist ? 'bg-green-500' : ' bg-red-600'} p-2 w-32 rounded-md shadow-md`}>Racist</p>
                        <p className={`${joke.flags.racist ? 'bg-green-500' : ' bg-red-600'} p-2 w-32 rounded-md shadow-md`}>Sexist</p>
                        <p className={`${joke.flags.racist ? 'bg-green-500' : ' bg-red-600'} p-2 w-32 rounded-md shadow-md`}>Explicit</p>
                  </div>
              </div>
            )
          }))
          
      }
    </main>
  );
}
