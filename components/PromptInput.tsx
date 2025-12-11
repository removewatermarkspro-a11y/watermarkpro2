'use client'

import { useState } from 'react'
import styles from './PromptInput.module.css'

interface PromptInputProps {
    placeholder?: string
    onPromptSubmit?: (prompt: string) => void
}

export default function PromptInput({
    placeholder = "Describe what you want to do...",
    onPromptSubmit
}: PromptInputProps) {
    const [prompt, setPrompt] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (prompt.trim() && onPromptSubmit) {
            onPromptSubmit(prompt)
        }
    }

    const handleAddClick = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
    }

    return (
        <div className={styles.promptContainer}>
            <form onSubmit={handleSubmit} className={styles.promptForm}>
                <button
                    type="button"
                    className={styles.addButton}
                    onClick={handleAddClick}
                    aria-label="Add"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 5V15M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={placeholder}
                    className={styles.promptInput}
                />

                <div className={styles.rightControls}>
                    <button type="submit" className={styles.submitButton} aria-label="Submit">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 12V4M8 4L5 7M8 4L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}
