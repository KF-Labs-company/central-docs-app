'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'

import Division from './Division'

const ChartBar = dynamic(() => import('../dashboard/bar'), {
    ssr: false,
    loading: () => (
        <div className="flex h-full flex-col justify-center gap-6 px-2">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4">
                    <div className="h-4 w-24 rounded-full bg-white/4" />
                    <div className="h-5 flex-1 rounded-full bg-white/4" />
                </div>
            ))}
        </div>
    ),
})

const ChartPie = dynamic(() => import('../dashboard/pie'), {
    ssr: false,
    loading: () => (
        <div className="flex h-full items-center justify-center">
            <div className="h-48 w-48 rounded-full bg-white/4" />
        </div>
    ),
})

const colSpanMap: Record<number, string> = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
}

const rowSpanMap: Record<number, string> = {
    1: 'row-span-1',
    2: 'row-span-2',
    3: 'row-span-3',
    4: 'row-span-4',
    5: 'row-span-5',
    6: 'row-span-6',
}

type OptionsProps = {
    title: string
    subTitle?: string
    type?: 'bar' | 'line' | 'pie' | 'number'
    value?: number | string
    data?: { name: string; value: number }[]
    colSpan?: number
    rowSpan?: number
    isLoading?: boolean
}

export default function GridCockpit({
    title,
    subTitle,
    type,
    value,
    data = [],
    colSpan,
    rowSpan,
    isLoading = false,
}: OptionsProps) {
    const [expanded, setExpanded] = useState(false)

    const renderContent = () => {
        if (isLoading) {
            return (
                <>
                    {type === 'number' && (
                        <div className="flex h-full items-center justify-center">
                            <div className="h-28 w-52 rounded-3xl bg-white/4" />
                        </div>
                    )}

                    {type === 'bar' && (
                        <div className="flex h-full flex-col justify-center gap-6 px-2">
                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-4"
                                >
                                    <div className="h-4 w-24 rounded-full bg-white/4" />
                                    <div className="h-5 flex-1 rounded-full bg-white/4" />
                                </div>
                            ))}
                        </div>
                    )}

                    {type === 'pie' && (
                        <div className="flex h-full items-center justify-center">
                            <div className="h-48 w-48 rounded-full bg-white/4" />
                        </div>
                    )}
                </>
            )
        }

        if (type === 'number') {
            return (
                <div
                    className={cn(
                        'flex h-full items-center justify-center font-bold',
                        expanded ? 'text-[150px]' : 'text-[80px]'
                    )}
                >
                    {value}
                </div>
            )
        }

        if (type === 'bar') {
            return <ChartBar data={data} />
        }

        if (type === 'pie') {
            return <ChartPie data={data} />
        }

        return null
    }

    return (
        <div
            className={cn(
                'relative overflow-hidden rounded-md border border-white/10 p-5 shadow-2xl transition-all duration-500',

                expanded
                    ? 'fixed inset-0 z-60 h-screen w-screen rounded-none bg-[#020617]'
                    : 'h-100',

                isLoading
                    ? 'border-white/5 bg-[#0f172a]'
                    : 'bg-black/35 backdrop-blur-xl',

                colSpan && !expanded && colSpanMap[colSpan],
                rowSpan && !expanded && rowSpanMap[rowSpan],
                rowSpan && !expanded && 'h-auto'
            )}
        >
            {isLoading && (
                <>
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="animate-shimmer absolute inset-0 bg-linear-to-r from-transparent via-white/3 to-transparent" />
                    </div>

                    <div className="absolute -left-20 top-0 h-full w-40 rotate-12 bg-white/2 blur-3xl" />
                </>
            )}

            <div className="relative z-10 flex items-center">
                <div className="flex-1">
                    {isLoading ? (
                        <>
                            <div className="h-6 w-40 rounded-full bg-white/4" />
                            <div className="mt-3 h-4 w-64 rounded-full bg-white/4" />
                        </>
                    ) : (
                        <>
                            <p
                                className={cn(
                                    'font-bold',
                                    expanded ? 'text-[50px]' : 'text-lg'
                                )}
                            >
                                {title}
                            </p>

                            <p
                                className={cn(
                                    'font-semibold text-slate-400',
                                    expanded ? 'text-[25px]' : 'text-sm'
                                )}
                            >
                                {subTitle}
                            </p>
                        </>
                    )}
                </div>

                <button
                    onClick={() => setExpanded(!expanded)}
                    disabled={isLoading}
                    className={cn(
                        'ml-auto rounded-full p-1.5 transition-all duration-300',
                        !isLoading && 'hover:bg-slate-700',
                        isLoading && 'bg-white/4'
                    )}
                >
                    {!isLoading && (
                        <Icon
                            icon={
                                expanded
                                    ? 'material-symbols:close-rounded'
                                    : 'pepicons-pop:expand'
                            }
                            className="h-7 w-7"
                        />
                    )}

                    {isLoading && (
                        <div className="h-7 w-7 rounded-full bg-white/4" />
                    )}
                </button>
            </div>

            <Division />

            <div
                className={cn(
                    'relative z-10 transition-all duration-500',
                    expanded ? 'h-[90vh]' : rowSpan ? 'h-full' : 'h-70'
                )}
            >
                {renderContent()}
            </div>
        </div>
    )
}
