import React from 'react'

const TitleSelect = ({ items, handleSelectedStory }) => {

    const titleOption = items.map((item, index) => {
        return <option value={index} key={index}>{item.title}</option>
    })

    const handleChange = (e) => {
        const { value } = e.target
        handleSelectedStory(value)

    }


    return (
        <div>
            <select name="title-select" id="title-select" onChange={handleChange}>
                {titleOption}
            </select>
        </div>
    )
}

export default TitleSelect