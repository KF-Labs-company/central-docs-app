'use client'

import dynamic from 'next/dynamic'
import * as echarts from 'echarts'

const ReactECharts = dynamic(() => import('echarts-for-react'), {
    ssr: false,
})

type ChartPieProps = {
    data: { name: string; value: number }[]
}

export default function ChartPie({ data }: ChartPieProps) {
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)',
        },
        legend: {
            orient: 'horizontal',
            bottom: 0,
            textStyle: {
                color: '#8b9ab0',
            },
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

                    lineStyle: {
                        color: '#8b9ab0',
                    },
                },
                data: data.map((item, index) => ({
                    ...item,
                    itemStyle: {
                        color:
                            index === 0
                                ? new echarts.graphic.LinearGradient(
                                      0,
                                      0,
                                      1,
                                      1,
                                      [
                                          { offset: 0, color: '#3f8a29' },
                                          { offset: 0.5, color: '#245915' },
                                          { offset: 1, color: '#102e07' },
                                      ]
                                  )
                                : new echarts.graphic.LinearGradient(
                                      1,
                                      1,
                                      1,
                                      0,
                                      [
                                          { offset: 0, color: '#8f0000' },
                                          { offset: 0.5, color: '#c70000' },
                                          { offset: 1, color: '#ff0000' },
                                      ]
                                  ),
                    },
                })),
            },
        ],
    }

    return (
        <div className="h-full w-full">
            <ReactECharts
                option={option}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    )
}
