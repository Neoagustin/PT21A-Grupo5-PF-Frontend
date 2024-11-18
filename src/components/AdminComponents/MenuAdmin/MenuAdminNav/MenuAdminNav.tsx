import React from "react";
import MenuAdminItems from "./MenuAdminItems/MenuAdminItems";
import { usePathname } from "next/navigation";
import menuItems from "./utils";

const MenuAdminNav = () => {
  const pathname = usePathname();
  const isSelected = (href: string) => pathname === href;

  return (
    <nav className="flex flex-col gap-[12px] mt-10">
      {menuItems.map((item, index) => (
        <MenuAdminItems
          key={index}
          text={item.text}
          href={item.href}
          icon={item.icon}
          isSelected={item.isSelected ?? isSelected(item.href)}
        />
      ))}
    </nav>
  );
};

export default MenuAdminNav;
