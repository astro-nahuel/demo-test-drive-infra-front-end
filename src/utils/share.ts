type ShareContent = {
    url: string
    text?: string
    title?: string
}

export const shareContent = async (
    content: ShareContent,
    onSuccess: () => void,
    // eslint-disable-next-line no-unused-vars
    onError: (error: string) => void
): Promise<void> => {
    if (navigator.share) {
        await navigator.share(content)
        onSuccess()
    } else {
        console.log('Share is not supported in this browser.')
        onError(
            'Share is not supported in this browser. Link copied to clipboard'
        )
    }
}
