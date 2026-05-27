type PageHeaderProps = {
    title: string
    subTitle: string
}

export function PageHeader({ title, subTitle }: PageHeaderProps) {
    return (
        <section className="flex flex-col gap-2">
            <h1 className="text-4xl font-black">{title}</h1>

            <p className="text-slate-400">{subTitle}</p>
        </section>
    )
}
