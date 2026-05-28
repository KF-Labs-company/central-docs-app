'use client'

import dynamic from 'next/dynamic'

const ReactECharts = dynamic(() => import('echarts-for-react'), {
    ssr: false,
    loading: () => (
        <div className="h-full w-full animate-pulse rounded-xl bg-white/5" />
    ),
})

type ChartPieProps = {
    data: { name: string; value: number }[]
}

const COLORS = [
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [
            { offset: 0, color: '#3f8a29' },
            { offset: 0.5, color: '#245915' },
            { offset: 1, color: '#102e07' },
        ],
    },
    {
        type: 'linear',
        x: 1,
        y: 1,
        x2: 1,
        y2: 0,
        colorStops: [
            { offset: 0, color: '#8f0000' },
            { offset: 0.5, color: '#c70000' },
            { offset: 1, color: '#ff0000' },
        ],
    },
]

export default function ChartPie({ data }: ChartPieProps) {
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)',
        },
        legend: {
            orient: 'horizontal',
            bottom: 0,
            textStyle: { color: '#8b9ab0' },
        },
        series: [
            {
                type: 'pie',
                radius: '50%',
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    formatter: '{b}: {c} ({d}%)',
                    color: 'white',
                    fontSize: 15,
                    fontWeight: 'bold',
                    position: 'inside',
                },
                labelLine: {
                    show: true,
                    lineStyle: { color: '#8b9ab0' },
                },
                data: data.map((item, index) => ({
                    ...item,
                    itemStyle: {
                        color: COLORS[index] ?? COLORS[0],
                    },
                })),
            },
        ],
    }

    return (
        <div className="h-full w-full">
            <ReactECharts
                option={option}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    )
}
