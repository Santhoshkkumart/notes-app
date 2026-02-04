import {Link} from "react-router-dom";
import {PlusIcon} from "lucide-react";

const Navbar = () => {
  return (
<header className="bg-black border-b border-green-500/30">
  <div className="mx-8 max-w-8xl p-4">
    <div className="flex items-center justify-between">
      
      <h1 className="text-2xl font-bold text-green-400 font-mono tracking-tight">
        Thinkboard
      </h1>

      <div className="flex items-center gap-4">
        <Link
          to="/create"
          className="btn bg-green-500 text-black hover:bg-green-400 border-none"
        >
          <PlusIcon className="size-5" />
          <span>Add Note</span>
        </Link>
      </div>

    </div>
  </div>
</header>

  )
}

export default Navbar
