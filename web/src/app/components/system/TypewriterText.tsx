'use client'

import { useEffect, useRef, useState } from 'react'

type TypewriterTextProps = {
    words: string[]
    typingSpeed?: number
    deletingSpeed?: number
    delayBetweenWords?: number
}

export function TypewriterText({
    words,
    typingSpeed = 100,
    deletingSpeed = 60,
    delayBetweenWords = 1200,
}: TypewriterTextProps) {
    const [text, setText] = useState('')
    const [index, setIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)
    const wordsRef = useRef(words)

    useEffect(() => {
        const current = wordsRef.current[index]
        let timer: NodeJS.Timeout

        if (!deleting && text.length < current.length) {
            timer = setTimeout(
                () => setText(current.slice(0, text.length + 1)),
                typingSpeed
            )
        }

        if (!deleting && text.length === current.length) {
            timer = setTimeout(() => setDeleting(true), delayBetweenWords)
        }

        if (deleting && text.length > 0) {
            timer = setTimeout(
                () => setText(current.slice(0, text.length - 1)),
                deletingSpeed
            )
        }

        if (deleting && text.length === 0) {
            setDeleting(false)
            setIndex((prev) => (prev + 1) % wordsRef.current.length)
        }

        return () => clearTimeout(timer)
    }, [text, deleting, index, typingSpeed, deletingSpeed, delayBetweenWords])

    return (
        <span className="text-[20px] text-slate-400">
            {text} <span className="animate-pulse">|</span>
        </span>
    )
}
