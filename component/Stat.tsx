interface Buttondetails{
   title : string;
   stat : number;
}


export default function Stat({title, stat}:Buttondetails){
    return(
        <div className="rounded-full p-2 flex flex-nowrap flex-col items-center bg-white/10 backdrop-blur-md border border-white/20" >
            <p className="text-white md:text-base">{title} <span className="text-white ">({stat})</span></p>
        </div>
    )
};