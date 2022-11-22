import React from 'react'
import Image from 'next/image'

export interface AvatarProps {
    avatarID: string
}

export interface AvatarResource {
    name: string
    avatarURL: string
}

function getUser(userID: string): AvatarResource {
    console.log(userID);
    return {
        name: 'Jules Wyvern',
        avatarURL: '/image-avatar.png'
    }
}


export const Avatar: React.FC<AvatarProps> = ({ avatarID: id }: AvatarProps) => {
    const { name, avatarURL } = getUser(id);

    return (
        <div className='creator-container'>
            <Image
                className='creator-avatar'
                src={avatarURL}
                alt={''}
                width={32}
                height={32} />

            <p className='creator-text'>
                Creation of <span className='creator-name'>{name}</span>
            </p>
        </div>
    )
}
