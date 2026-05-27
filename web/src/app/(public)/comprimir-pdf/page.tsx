'use client'

import { Icon } from '@iconify/react'
import { useMemo, useState } from 'react'
import { useAuth } from '@/app/contexts/AuthContext'
import { PageHeader } from '@/app/components/system/PageHeader'
import { useCompressPdf } from '@/app/hooks/pdf/useCompressPdf'
import { TypewriterText } from '@/app/components/system/TypewriterText'

type ResultFile = {
    blob: Blob
    size: number
    url: string
}

export default function CompressPDFPage() {
    const { isAuthenticated } = useAuth()
    const [file, setFile] = useState<File | null>(null)
    const [result, setResult] = useState<ResultFile | null>(null)
    const [rating, setRating] = useState(0)
    const compressPdf = useCompressPdf()

    const formatSize = (bytes: number) => {
        if (!bytes) return '0 KB'
        return (bytes / 1024 / 1024).toFixed(2) + ' MB'
    }

    const originalSize = file?.size ?? 0
    const finalSize = result?.size ?? 0

    const percent = useMemo(() => {
        if (!result || !originalSize) return 0
        return ((originalSize - finalSize) / originalSize) * 100
    }, [originalSize, finalSize, result])

    const handleCompress = async () => {
        if (!file) return

        try {
            const blob = await compressPdf.mutateAsync(file)
            const url = URL.createObjectURL(blob)

            setResult({
                blob,
                url,
                size: blob.size,
            })
        } catch (err: any) {
            if (err?.error === 'DAILY_LIMIT_REACHED') {
                alert(
                    'Você atingiu o limite diário. Faça login para continuar.'
                )
            } else {
                alert('Erro ao comprimir PDF')
            }
        }
    }

    const reset = () => {
        setFile(null)
        setResult(null)
        setRating(0)
    }

    const label =
        percent > 20
            ? { label: 'Ótima compressão', color: 'bg-green-400' }
            : percent > 5
              ? { label: 'Compressão moderada', color: 'bg-yellow-400' }
              : percent > 0
                ? { label: 'Compressão leve', color: 'bg-blue-400' }
                : { label: 'Sem redução significativa', color: 'bg-slate-400' }

    return (
        <main className="mx-auto flex max-w-3xl flex-col gap-10 px-5 py-12 text-white">
            <PageHeader
                title="Comprimir PDF"
                subTitle="Reduza o tamanho dos seus PDFs de forma rápida e gratuita."
            />

            {!isAuthenticated && (
                <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4">
                    <p className="font-medium text-yellow-300">
                        Uso gratuito diário
                    </p>

                    <p className="mt-1 text-sm text-yellow-100/70">
                        Você pode usar esta ferramenta algumas vezes por dia.
                        Faça login para uso ilimitado.
                    </p>
                </div>
            )}

            <div className="-mb-6 text-sm text-slate-400">
                {result ? (
                    <p>Resultado da compressão</p>
                ) : (
                    <p>Nova compressão</p>
                )}
            </div>

            {compressPdf.isPending && (
                <div className="bg-white/5 p-5 border border-white/10 rounded-md flex justify-center items-center">
                    <TypewriterText
                        words={[
                            'Lendo arquivo...',
                            'Processando...',
                            'Comprimindo...',
                        ]}
                    />
                </div>
            )}

            {!result && !compressPdf.isPending && (
                <>
                    <label className="flex cursor-pointer flex-col items-center justify-center rounded-md border border-white/10 bg-white/5 p-12 text-center">
                        <input
                            type="file"
                            accept="application/pdf"
                            className="hidden"
                            onChange={(e) => {
                                setFile(e.target.files?.[0] || null)
                                setResult(null)
                            }}
                        />

                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
                            <Icon
                                icon="solar:upload-minimalistic-bold"
                                className="text-4xl text-blue-400"
                            />
                        </div>

                        {file ? (
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold text-white">
                                    Arquivo selecionado
                                </p>

                                <p className="text-slate-400">{file.name}</p>

                                <p className="text-sm text-slate-500">
                                    Tamanho original: {formatSize(file.size)}
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold text-white">
                                    Clique para enviar um PDF
                                </p>
                            </div>
                        )}
                    </label>

                    <button
                        disabled={!file || compressPdf.isPending}
                        onClick={handleCompress}
                        className="rounded-2xl bg-blue-500 px-6 py-4 font-semibold transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        {compressPdf.isPending
                            ? 'Comprimindo...'
                            : 'Comprimir PDF'}
                    </button>
                </>
            )}

            {result && (
                <div className="relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
                    <div
                        className={`${label.color} absolute -right-3 -top-3 rounded-xl px-4 py-2 shadow-2xl`}
                    >
                        <p className="text-sm font-bold text-black">
                            {label.label}
                        </p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-lg font-semibold text-green-400">
                            Processamento concluído
                        </p>

                        <p className="text-slate-400">
                            Seu arquivo foi processado com sucesso.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                            <p className="text-sm text-slate-400">Original</p>
                            <p className="text-xl font-bold text-white">
                                {formatSize(originalSize)}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                            <p className="text-sm text-slate-400">Final</p>
                            <p className="text-xl font-bold text-white">
                                {formatSize(finalSize)}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                            <p className="text-sm text-slate-400">Redução</p>
                            <p className="text-xl font-bold text-green-400">
                                {percent.toFixed(1)}%
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={reset}
                            className="rounded-xl bg-slate-600 px-5 py-3 font-semibold hover:bg-slate-700"
                        >
                            Novo arquivo
                        </button>

                        <a
                            href={result.url}
                            download={`compressed-${file?.name}`}
                            className="rounded-xl bg-green-600 px-5 py-3 font-semibold hover:bg-green-700"
                        >
                            Baixar PDF
                        </a>
                    </div>

                    {/* <div className="border-t border-white/10 pt-6">
                        <p className="mb-3 font-semibold">
                            Avalie sua experiência
                        </p>

                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    onClick={() => setRating(star)}
                                >
                                    <Icon
                                        icon={
                                            rating >= star
                                                ? 'material-symbols:star-rounded'
                                                : 'material-symbols:star-outline-rounded'
                                        }
                                        className={`text-4xl ${
                                            rating >= star
                                                ? 'text-yellow-400'
                                                : 'text-slate-600'
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>

                        {rating > 0 && (
                            <p className="mt-3 text-sm text-green-400">
                                Obrigado pela avaliação!
                            </p>
                        )}
                    </div> */}
                </div>
            )}
        </main>
    )
}
