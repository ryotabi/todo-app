import React from 'react'
import Item from './Item'

const List = ({ texts }) => {
  return (
    <>
      <ul>
        {
          texts.map((text) => {
            return (
              <Item
                content={text.content}
              />
            )
          }

          )
        }

      </ul>
    </>
  )
}

export default List