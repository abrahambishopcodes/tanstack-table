import SampleTable1 from "./tables/sample-table1";
import TableWithOrdering from "./tables/table-with-ordering";

const App = () => {
  return (
    <section className="w-full min-h-screen bg-slate-800 text-white p-6">
      <h1 className="text-2xl font-bold">Tanstack table practice</h1>
      <main className="flex flex-col gap-6 mt-6">
        {/* Simple Sample Table */}
        <div className="max-w-xl">
          <SampleTable1 />
        </div>

        {/* Table With Ordering */}
        <div className="max-w-xl">
          <TableWithOrdering />
        </div>
      </main>
    </section>
  );
};

export default App;
