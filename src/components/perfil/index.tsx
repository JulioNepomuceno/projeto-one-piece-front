
interface LabelProps {
    img: string;
    name: string;
}
export function Perfil({ img, name }: LabelProps) {
    return (
        <div className="group flex flex-col items-center perspective">
        <div className="w-32 h-32 border-2 border-gray-500 rounded-full overflow-hidden transform group-hover:-rotateY-180 transition-all duration-300 relative">
            <div className="w-full h-full transform rotateY-0">
                <img src={img} alt={name} className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="w-full h-full transform rotateY-180 absolute inset-0 flex items-center justify-center bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               {name}
            </div>
        </div>
    </div>
    

    

    )
}