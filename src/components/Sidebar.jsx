import React from "react";
import {
  Home,
  ShoppingCart,
  Building,
  Users,
  Briefcase,
  Wallet,
  Headset,
  Settings
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { label: "Dashboard", icon: Home },
    { label: "Orders", icon: ShoppingCart },
    { label: "Companies", icon: Building },
    { label: "Clients", icon: Users },
    { label: "Employees", icon: Briefcase },
    { label: "Vendors", icon: Briefcase },
    { label: "Billings", icon: Wallet },
    { label: "Support", icon: Headset },
    { label: "Master Settings", icon: Settings }
  ];

  return (
    <div className="w-25 bg-white border-r-0.1 h-screen py-4 px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-5 text-center">
        vState
      </h1>
      <ul className="flex flex-col items-center gap-4">
        {menuItems.map(({ label, icon: Icon }, i) => (
          <li
            key={i}
            className="flex flex-col items-center text-center text-gray-700 text-b[02px] hover:text-blue-600 transition cursor-pointer"
          >
            <Icon size={18} className="mb-1" />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
