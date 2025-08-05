import Navbar from "./_components/navbar"

const PublicLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="bg-gradient-to-b from-black to-violet-900/40 h-screen ">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}
export default PublicLayout