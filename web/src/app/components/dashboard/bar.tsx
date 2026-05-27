'use client'

import * as echarts from 'echarts'
import dynamic from 'next/dynamic'

const ReactECharts = dynamic(() => import('echarts-for-react'), {
    ssr: false,
})

type ChartBarProps = {
    data: { name: string; value: number }[]
}

export default function ChartBar({ data }: ChartBarProps) {
    const option = {
        grid: {
            left: 5,
            right: 10,
            top: 10,
            bottom: 0,
            containLabel: true,
        },
        yAxis: {
            type: 'category',
            data: data.map((item) => item.name),
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { color: '#8b9ab0', margin: 15 },
        },
        xAxis: {
            show: false,
            type: 'value',
            splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } },
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { color: '#8b9ab0' },
        },
        series: [
            {
                type: 'bar',
                data: data.map((item) => item.value),
                barWidth: '85%',
                label: {
                    show: true,
                    position: 'insideRight',
                    color: '#dfcce3',
                    fontWeight: 'bold',
                    fontFamily: 'Arial Black',
                    fontSize: 15,
                    offset: [-1, 1],
                },
                itemStyle: {
                    borderRadius: [0, 5, 5, 0],
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        { offset: 0, color: '#631d8a' },
                        { offset: 0.5, color: '#470f66' },
                        { offset: 1, color: '#28053b' },
                    ]),
                },
            },
        ],
    }

    return (
        <div className="h-full w-full overflow-y-auto">
            <ReactECharts
                option={option}
                style={{
                    width: '100%',
                    height: `${data.length * 70}px`,
                }}
            />
        </div>
    )
}
