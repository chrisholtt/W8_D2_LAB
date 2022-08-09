import React, { useEffect, useState } from 'react'
import TitleSelect from './TitleSelect'
import Story from './Story'

const Title = ({ stories }) => {

    const [items, setItems] = useState([])
    const [selectedStoryIndex, setSelectedStory] = useState({})
    const [selectedStories, setSelectedStories] = useState({})


    // 
    const handleSelectedStory = (obj) => {
        setSelectedStory(obj)

        const story = items[selectedStoryIndex]
        const kids = story.kids
        console.log(story)
        console.log(kids)

        const stories = kids.map((kid) => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${kid}.json`).then(res => res.json())
        })

        Promise.all(stories).then(data => {
            setSelectedStories(data)
            console.log(selectedStories)
        })
    }

    useEffect(() => {
        const titles = stories.map((story) => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json`).then(res => res.json())
        })
        Promise.all(titles).then(data => {
            setItems(data)
        })
    }, [])


    return (
        <>
            {items.length && <TitleSelect items={items} handleSelectedStory={handleSelectedStory} />}
            {selectedStories.length && <Story selectedStories={selectedStories} />}

        </>
    )
}

export default Title