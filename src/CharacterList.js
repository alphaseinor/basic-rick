import React from 'react'
import Rick from './Rick'

const CharacterList = (props) => {
    console.log(props)
    return(
        <section>
            {
                props.characters.map(rick => (
                    <Rick name={rick.name} status={rick.status} species={rick.species} image={rick.image} />
                ))
            }
        </section>
    )
}

export default CharacterList