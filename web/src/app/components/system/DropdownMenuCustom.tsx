import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu'
import { Icon } from '@iconify/react'
import Link from 'next/dist/client/link'

interface DropdownMenuIconsProps {
    user: {
        name: string
        email: string
        avatar?: string
        role: string
    }

    logout: () => void
}

export function DropdownMenuCustom({ user, logout }: DropdownMenuIconsProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-md border border-white/10 bg-container-primary px-3 py-2 transition hover:bg-white/5">
                    {user.avatar ? (
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="h-8 w-8 rounded-full object-cover"
                        />
                    ) : (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                            {user.name.charAt(0)}
                        </div>
                    )}

                    <div className="hidden text-left md:block">
                        <p className="text-sm font-medium text-white">
                            {user.name}
                        </p>

                        <p className="text-xs text-slate-400">{user.email}</p>
                    </div>
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuItem>
                    <Link
                        href="/minha-conta"
                        className="flex items-center gap-2"
                    >
                        <Icon icon="boxicons:user-filled" />
                        Minha conta
                    </Link>
                </DropdownMenuItem>

                {user.role === 'admin' && (
                    <DropdownMenuItem>
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2"
                        >
                            <Icon icon="solar:chart-bold" />
                            Dashboard
                        </Link>
                    </DropdownMenuItem>
                )}

                <DropdownMenuItem>
                    <Link
                        href="/configuracoes"
                        className="flex items-center gap-2"
                    >
                        <Icon icon="icon-park-solid:config" />
                        Configurações
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                    onClick={logout}
                    className="bg-red-600 mt-3 hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 transition-colors"
                >
                    <Icon icon="majesticons:logout" />
                    Sair
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
