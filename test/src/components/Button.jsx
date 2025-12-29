export function Button({children, onClick, variant="bg-primary-800"}){

    return(
        <button className={`w-64  px-4 py-2 ${variant} text-black`} onClick={onClick}>
          {children}
        </button>
    );

}
    
