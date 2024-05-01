import ComputerCanvas from "./Canvas/Model"

function App() {

  return (
    <main className='w-full bg-[#acacb7] min-h-screen'>
      <div className='max-w-7xl gap-4 w-full flex flex-col justify-center items-center mx-auto'>
        <h1 className='text-bold py-2 text-center text-8xl font-extrabold text-[#120621]'>3D Bus</h1>
        <div className="w-full">
          <ComputerCanvas />
        </div>
      </div>
    </main>
  )
}

export default App
