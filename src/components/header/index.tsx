import Link from "next/link";
import { ChevronDown } from "lucide-react";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components";

import { limit_text } from "@/lib/utils";

export function Header() {
  const full_name = "vinicius italo";
  const first_letter = full_name.charAt(0).toUpperCase();
  const full_name_formatted = limit_text(full_name);

  return (
    <header className="p-6 container flex items-center justify-between gap-6">
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link className="p-3 rounded-md hover:bg-primary/15" href="Contas">
              Página inicial
            </Link>
          </li>

          <li>
            <Link className="p-3 rounded-md hover:bg-primary/15" href="Contas">
              Contas
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        <span>{full_name_formatted}</span>

        <div className="rounded-full bg-slate-300 flex items-center justify-center w-10 h-10 text-slate-700">
          <span>{first_letter}</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <ChevronDown className="text-slate-600" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Button className="w-full">Sair</Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
