interface ErrorProps {
    error: string
}
export function Error({ error } : ErrorProps) {
    return (
        <p className='text-center'>{error}</p>
    )
}