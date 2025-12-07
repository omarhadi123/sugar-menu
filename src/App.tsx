import {useEffect} from "react";
import "./App.css";
import {useMenuStore} from "./store/menuStore";

// const Home = React.lazy(() => import("@pages/Home"));
import Home from "@/pages/Home";

function App() {
    const {setMenu} = useMenuStore();

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const res = await fetch("./data/menu.json");
                const data = await res.json();
                setMenu(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMenu();
    }, [setMenu]);

    return (
        <>
            <main className="w-full h-full bg-rose-100">
                <Home />
            </main>
        </>
    );
}

export default App;
