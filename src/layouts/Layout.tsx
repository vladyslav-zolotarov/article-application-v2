import { Outlet } from "react-router-dom";
import { useAppStore } from "../utils/store";
import Aside from "./Aside/Aside";

export const Layout = () => {
    const { token } = useAppStore(state => ({
        token: state.token,
    }));

    return (
        <div className='App flex flex-col min-h-screen'>
            <div className='flex-1 text-slate-900 dark:text-slate-300 bg-gray-100 relative'>
                {token && <Aside />}
                <div className={token ? 'p-7 ml-80' : 'p-7'}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}