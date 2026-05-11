

export default function BrownBtn({title}:{title:string}){
    return(
       <button 
            className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-amber-900/10 active:scale-95"
            id="nav-cta"
          >
           {title}
          </button>

    )
};