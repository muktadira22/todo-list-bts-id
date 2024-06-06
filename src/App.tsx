import React, { useEffect, useRef, useState } from "react"
import AuthorizedLayout from "./components/AuthorizedLayout"

import { getAll, save } from "./services/checklist.service";
import classNames from "classnames";
import { AxiosResponse } from "axios";
import { IChecklist } from "./types/checklist.type";
import { IResponse } from "./types/http.type";


function InputCard() {
  const [isInput, setIsInput] = useState<boolean>(false)
  const [name, setName] = useState<string>("")
  const nameRef = useRef<HTMLInputElement | null>(null)

  const handleCreateChecklist = (e: React.FormEvent) => {
    e.preventDefault();
    save(name).then((response: AxiosResponse<IResponse<IChecklist>>) => {
      const data = response.data.data
      console.log(data)
    })
  }

  return (
    <div className="bg-white rounded-lg p-4 shadow" >
      {
        isInput ? (
          <>
            <form className="space-y-2" onSubmit={handleCreateChecklist}>
              <div>
                <div className="mt-2">
                  <input
                    ref={nameRef}
                    id="name"
                    name="name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Input checklist here ..."
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex gap-2">

                <button
                  onClick={() => setIsInput(false)}
                  type="button"
                  className="flex w-full justify-center rounded-md bg-slate-600 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!name}
                  className={classNames("flex w-full justify-center rounded-md px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                    name ? "bg-red-600 hover:bg-red-500  focus-visible:outline-red-600" : "bg-gray-300"
                  )}
                >
                  Create
                </button>
              </div>
            </form>
          </>
        ) : (
          <div onClick={() => {
            setIsInput(true)
            setTimeout(() => {
              nameRef.current?.focus()
            }, 100)
          }}>
            Input checklist here ...
          </div>
        )
      }
    </div>
  )
}

function App() {

  const [response, setResponse] = useState<IChecklist[] | null>([])
  const fetchChecklist = () => {
    getAll().then((response: AxiosResponse<IResponse<IChecklist[]>>) => {
      setResponse(response.data.data)
    })
  }
  useEffect(() => {}, [
    fetchChecklist()
  ])

  const user = JSON.parse(localStorage.getItem("user") || "")
  return (
    <AuthorizedLayout>
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Welcome to TODO APPS {user?.username}</h1>
        <p className="text-lg">This is a simple todo apps created with React and TypeScript</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <InputCard />
        {response && response.map((item, key) =>
          <div key={key} className="bg-white rounded-lg p-4">
            {item.name}
          </div>
        )}
      </div>
    </AuthorizedLayout >
  )
}

export default App
