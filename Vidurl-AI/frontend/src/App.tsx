
function App() {
 
  return (
    <>
    <main className="max-w-2xl mx-auto flex gap-8 px-4">
      <div className="py-8 flex gap-8 flex-col justify-center">
        <h1 className="text-4xl font-bold uppercase mb-4">
          <span className="text-5xl ">
            URL to Video
          </span>
          <br/>
          <span className="bg-gradient-to-br from-emerald-300 from-30% to-sky-300 bg-clip-text text-transparent">with power of AI</span>
          </h1>
        <form action="" className="grid gap-2">
          <input 
          className="bg-transparent text-white border-2 rounded-full px-4 py-2 grow"
          type="url" placeholder="https://...."/>
          <button type="submit" className="bg-emerald-500 border rounded-full px-4 py-2 text-black font-bold">Create video</button>
        </form>
      </div>
      <div className="py-4">
        <div className="bg-gray-200 w-[240px] h-[380px] text-gray-500 rounded-2xl p-8">Vide here</div>
      </div>
    </main>
    
    </>
  )
}

export default App
