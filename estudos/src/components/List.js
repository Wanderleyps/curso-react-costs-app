import Item from "./Item"

function List(){
    // uso de fragments <></>
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Fiat" ano_lancamento={1993}/>
                <Item marca="Renault" ano_lancamento={1992}/>
                <Item marca="Renault" />
            </ul>
        </>
    )
}

export default List