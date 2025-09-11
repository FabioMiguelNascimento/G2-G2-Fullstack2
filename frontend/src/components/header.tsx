import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu"
import { ChevronsUpDown, Heart, LogOut, Package, ShoppingCart, User } from "lucide-react"
import { Link } from "react-router-dom"
import { Avatar, AvatarFallback } from "./ui/avatar"
import CartSheet from "./CartSheet"

export default function Header() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  }
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
                  Produtos
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/cart"
                  className="block px-3 py-2 rounded text-white hover:text-black"
                >
                  Carrinho
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="flex items-center gap-2 px-3 py-2 rounded text-white hover:text-black hover:bg-accent cursor-pointer">
              <CartSheet />
            </NavigationMenuItem>

            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 px-3 py-2 rounded text-white hover:text-black hover:bg-accent cursor-pointer">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-blue-600 font-bold text-white text-sm text-bold">
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-bold">{user.name}</span>
                    <ChevronsUpDown  height={18} width={18}/>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/account">
                      <User className="mr-2 h-4 w-4" />
                      Minha conta
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/cart">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Meu carrinho
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/favorites">
                      <Heart className="mr-2 h-4 w-4" />
                      Meus favoritos
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/orders">
                      <Package className="mr-2 h-4 w-4" />
                      Meus pedidos
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
