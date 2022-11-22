import React from 'react'
import Image from 'next/image'
import { AvatarProps, Avatar } from './Avatar'


export interface CardProps {
    cardID: string
    image: CardImage
    user: AvatarProps
}

export interface CardImage {
    imageURL: string
}

export interface CardResource {
    title: string
    bodyText: string
    price: string
    date: string
}

function getCardResource(cardID: string) {
    console.log(cardID)

    return {
        title: 'Equilibrium #3429',
        bodyText: 'Our Equilibrium collection promotes balance and calm.',
        price: '0.041',
        date: '3 days left'
    }
}

export const Card: React.FC<CardProps> = ({ cardID, image, user }: CardProps) => {

    const cardResource: CardResource = getCardResource(cardID)

    return (
        <section className='card-main'>
            <div className='card-image'>
                <Image
                    src={image.imageURL}
                    alt="nft"
                    className="image-main"
                    width={300}
                    height={300} />
                <div className="image-overlay"></div>
                <Image
                    src="/icon-view.svg"
                    alt="view icon"
                    className="image-view"
                    width={48}
                    height={48} />
            </div>

            <div className='text-container'>
                <h1 className='text-title'>
                    {cardResource.title}
                </h1>
                <p className='text-body'>
                    {cardResource.bodyText}
                </p>
                <div className='text-info-group'>
                    <div className='text-price'>
                        <Image
                            src="/icon-ethereum.svg"
                            alt="ETH"
                            className="text-eth-icon"
                            width={11}
                            height={18} />
                        <span className="text-price">
                            {`${cardResource.price} ETH`}
                        </span>
                    </div>
                    <div className='text-date'>
                        <Image
                            src="/icon-clock.svg"
                            alt="clock"
                            className="text-date-icon"
                            width={17}
                            height={17} />
                        <span>{cardResource.date}</span>
                    </div>
                </div>
            </div>

            <Avatar avatarID={user.avatarID} />
        </section>
    )
}

