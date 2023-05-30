import Image from 'next/image'
import { FC } from 'react'

export const Brand: FC<{ white?: boolean }> = (props) => {
    return (
        <Image
            src={!props.white ? '/images/brand.png' : '/images/brand-white.png'}
            width={152}
            height={47}
            alt="grooploop logo"
        />
    )
}
