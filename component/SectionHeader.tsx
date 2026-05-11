
interface SectionHeaderProps {
    title: string;
    subTitle: string;
    para: string;
  }

export default function SectionHeader({ title, subTitle, para }: SectionHeaderProps){
    return (
      <div className="w-full text-center my-10 flex flex-col align-middle justify-center gap-4 sm:w-1/2 mx-auto">
        <p className="flex mx-auto items-center justify-center w-40 gap-2 bg-amber-900/20 text-amber-700 dark:text-amber-500  px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-amber-900/10 active:scale-95">{subTitle}</p>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-4 text-[18px] ">{para}</p>
      </div>
    );
  }