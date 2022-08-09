import React, { useEffect, useState } from 'react'

const Story = ({ selectedStories }) => {



    const storyNodes = selectedStories.map((story) => {
        console.log(story)
        return (
            <div className='story'>
                <h2>{story.by}</h2>
                <h4>{story.text}</h4>
            </div>
        )
    })





    return (
        <div>
            {storyNodes}
        </div>
    )
}

export default Story