import { Box } from '@mui/material'
import Image from 'next/image'
import { TitleAndSubtitle } from '../TitleAndSubtitle'

interface IProps {
    title: string
    subtitle?: string
    image?: string
    withImage?: boolean
}
export default function EmptyState(props: IProps) {
    const { title, subtitle, image, withImage = true } = props
    return (
        <Box
            sx={{
                py: 6,
                textAlign: 'center',
            }}
        >
            {withImage && (
                <Image
                    src={image ?? '/images/empty-state.png'}
                    alt="empty-state"
                    width={120}
                    height={150}
                />
            )}
            <TitleAndSubtitle title={title} subtitle={subtitle ?? ''} />
        </Box>
    )
}
