import AuthorizedLayout from "./components/AuthorizedLayout"

const todoList: { name: string }[] = [
  {
    name: "Create a new project"
  },
  {
    name: "Create a new component"
  },
  {
    name: "Create a new page"
  },
  {
    name: "Create a new page"
  },
  {
    name: "Create a new page"
  }
]

function App() {
  return (
    <AuthorizedLayout>
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Welcome to TODO APPS</h1>
        <p className="text-lg">This is a simple todo apps created with React and TypeScript</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {todoList.map((item, key) =>
          <div key={key} className="bg-white rounded-lg p-4">
            {item.name}
          </div>
        )}
      </div>
    </AuthorizedLayout>
  )
}

export default App
