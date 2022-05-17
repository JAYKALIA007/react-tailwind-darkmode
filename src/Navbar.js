import ThemeToggle from './ThemeToggle';
export default function Navbar(){
    return(
        <div className="flex" >
            <div className="w-2/3" >
                <h3 className=" text-4xl font-bold p-2 " >Dark Mode in React</h3>
            </div>
            <div className=" w-1/3 " >
                    <div className="text-right ml-96" >
                            <ThemeToggle/>
                    </div>
            </div>
        </div>
    )
}