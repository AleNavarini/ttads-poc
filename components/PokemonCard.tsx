import Image from "next/image"
import { useState } from "react"

interface Props {
    id: number
    image: string
    name: string
    checked: boolean
}

const PokemonCard = ({ id, image, name, checked }: Props) => {

    return (
        <div className="pokemon-card">
            <p>{name}</p>
            <Image
                src={image}
                width={96}
                height={96}
                alt={name}></Image>
            <input
                type="checkbox"
                name=""
                id=""
                defaultChecked={checked}
                onClick={(e) => {
                    const checkedPokemons = JSON.parse(localStorage.getItem("checkedPokemons") || "{}")
                    if (checkedPokemons[id] === true) {
                        delete checkedPokemons[id]
                    }
                    else {
                        checkedPokemons[id] = true
                    }

                    localStorage.setItem("checkedPokemons", JSON.stringify(checkedPokemons))
                }}
            />

        </div>
    )
}

export default PokemonCard