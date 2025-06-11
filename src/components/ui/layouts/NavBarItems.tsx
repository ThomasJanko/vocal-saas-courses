"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
    {label: "Home", href: "/"},
    {label: "Companions", href: "/companions"},
    {label: "My Journey", href: "/my-journey"},
    {label: "Subscription", href: "/subscription"}
]

const NavBarItems = () => {

    const pathname = usePathname()
  return (
    <div className="flex items-center gap-8">
        {navItems.map((item) => (
            <Link className={cn("text-sm font-medium text-gray-500 hover:text-gray-900", pathname === item.href && "text-gray-900")} href={item.href} key={item.label}>{item.label}</Link>
        ))}
    </div>
  )
}

export default NavBarItems