import React from 'react'
import ConnectDiscord from './ConnectDiscord'
import ConnectX from './ConnectX'
import ConnectTelegram from './ConnectTelegram'
import ConnectYoutubeXname from './ConnectYoutubeXname'
import AddDiscordXTelegramName from './AddDiscordXTelegramName'



const SocialQuest = () => {


    return (

        <section className='mt-[3rem] lg:mt-2'>
            <h1 className='text-2xl font-semibold mb-1'>Social Quests</h1>
            <ConnectDiscord />
            <ConnectX />
            <ConnectTelegram />
            <ConnectYoutubeXname />
            <AddDiscordXTelegramName />



        </section>
    )
}

export default SocialQuest