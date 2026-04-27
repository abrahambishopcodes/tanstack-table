import SampleTable1 from "./sample-table1"

const App = () => {
  return (
    <section className="w-full h-screen bg-slate-800 text-white p-6">
      <h1 className="text-2xl font-bold">Tanstack table practice</h1>
      <div className="mt-6 max-w-xl">
        <SampleTable1 />
      </div>
    </section>
  )
}

export default App