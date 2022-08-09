import React, { useState, useEffect } from 'react'
import Title from './Title'

const Stories = () => {

    const [stories, setStories] = useState()

    useEffect(() => {
        const url = 'https://hacker-news.firebaseio.com/v0/topstories.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setStories(data))

    }, [])


    return (
        <>
            {stories && <Title stories={stories} />}
        </>
    )
}

export default Stories