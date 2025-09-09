import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-blue-500 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-white hover:text-blue-200">
          OsGuriShop
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-6">

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/"
                  className="text-white font-medium hover:text-black"
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                      <Link
                        to="/product"
                        className="block px-3 py-2 rounded text-white hover:text-black"
                      >
                        Todos os Produtos
                      </Link>
                    </NavigationMenuLink>
            </NavigationMenuItem>
            
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
