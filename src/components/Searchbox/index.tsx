import React from 'react'
import './Searchbox.css'

import { DebounceInput } from 'react-debounce-input';

interface Props {
    onSearch: Function
}

export function Searchbox({ onSearch }: Props) {
    return (
        <div className="box">
            <DebounceInput
                placeholder="Busque um filme por: nome, gênero ou ano..."
                minLength={2}
                debounceTimeout={300}
                onChange={(e) => onSearch(e.target.value)} />
        </div>
    )
}
