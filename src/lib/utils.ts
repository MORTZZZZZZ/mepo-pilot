export function formatDuration(ms: number): string {
    if (ms < 1000) {
        return `${ms}ms` ;
    }
    return `${(ms / 1000).toFixed(1)}s` ;
}

export function truncate(text: string, maxLength: number): string {
    return text.length <= maxLength ? text : text.slice(0, maxLength) + '...' ;
}

export function formatTokens(n: number): string {
    if (n < 1000) return String(n) ;
    return `${(n / 1000).toFixed(1)}k` ;
}

export function percent(a: number, b: number): string {
    if (b === 0) return 'N/A' ;
    return `${((a / b) * 100).toFixed(2)}%` ;
}

export function shortPath(path: string, maxLength: number): string {
    const parts = path.split("/") ;
    return parts.length <= 2 ? path : `.../${parts.slice(-2).join("/")}` ;
}
