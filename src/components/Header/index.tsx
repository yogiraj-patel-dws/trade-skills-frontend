import { Link, useLocation } from 'react-router-dom';
import { Layout, Input, Badge, Avatar } from 'antd';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';
import { Leaf } from 'lucide-react';

const { Header } = Layout;

const Navigation = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        if (path === '/dashboard') return location.pathname === '/' || location.pathname === '/dashboard';
        return location.pathname === path;
    };

    return (
        <Header style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: '0 24px',
            borderBottom: '1px solid #f0f0f0',
            height: '72px',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto">

                {/* Left Section: Logo */}
                <Link to="/dashboard" className="flex items-center gap-2 cursor-pointer">
                    <div className="bg-[#22C55E] p-1.5 rounded-lg flex items-center justify-center">
                        <Leaf size={20} className="text-white" fill="white" />
                    </div>
                    <span className="text-slate-900 font-extrabold text-xl tracking-tight">TradeSkill</span>
                </Link>

                {/* Center Section: Search Bar */}
                <div className="hidden md:flex flex-1 max-w-md mx-8">
                    <Input
                        prefix={<SearchOutlined className="text-slate-400 mr-2" />}
                        placeholder="Find a skill to learn..."
                        className="bg-[#F1F5F9] border-none rounded-2xl h-11 hover:bg-slate-200 focus:bg-white transition-all"
                        style={{ fontSize: '15px' }}
                    />
                </div>

                {/* Right Section: Nav Links & Profile */}
                <div className="flex items-center gap-6">
                    <nav className="hidden lg:flex items-center gap-7 mr-4">
                        <Link
                            to="/dashboard"
                            className={`text-[15px] font-bold transition-colors ${isActive('/dashboard') ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'}`}
                        >
                            Dashboard
                        </Link>
                        <Link
                            to="/myskills"
                            className={`text-[15px] font-bold transition-colors ${isActive('/myskills') ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'}`}
                        >
                            My skills
                        </Link>
                        <Link
                            to="/aboutus"
                            className={`text-[15px] font-bold transition-colors ${isActive('/aboutus') ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'}`}
                        >
                            About Us
                        </Link>
                    </nav>

                    <div className="flex items-center gap-5 border-l border-slate-100 pl-6">
                        <Badge dot color="#ef4444" offset={[-2, 5]}>
                            <BellOutlined className="text-[22px] text-slate-600 cursor-pointer hover:text-slate-900 transition-colors" />
                        </Badge>
                        <Avatar
                            src="https://i.pravatar.cc/150?u=jamie"
                            size={40}
                            className="cursor-pointer border-2 border-white shadow-sm"
                        />
                    </div>
                </div>

            </div>
        </Header>
    );
};

export default Navigation;