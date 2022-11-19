import { MouseEvent, useState } from 'react'
import '../DropDown/drop-down.scss'
import 'material-symbols'

type Items = { name: string; isChecked: boolean }

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [items, setItems] = useState<Items[]>([
    { name: 'ITEM 1', isChecked: false },
    { name: 'ITEM 2', isChecked: false },
    { name: 'ITEM 3', isChecked: false }
  ])

  const handleClick = () => setIsOpen(!isOpen)

  const handleChange = (e: MouseEvent<HTMLInputElement>, item: string) => {
    const itemsCopy = [...items]
    const foundItem = items?.find(s => s.name === item)
    if (!foundItem) {
      return
    }

    foundItem.isChecked = e.currentTarget.checked
    setItems(itemsCopy)
  }

  return (
    <div className="dropdown">
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        {items.map(item => (
          <label key={item.name}>
            <input
              type="checkbox"
              onClick={(e: MouseEvent<HTMLInputElement>) =>
                handleChange(e, item.name)
              }
            />
            <span>{item.name}</span>
          </label>
        ))}
      </div>

      <button onClick={handleClick}>
        {items.some(s => s.isChecked) ? (
          items
            .filter(s => s.isChecked)
            .map((s, i) => (
              <span>
                {' '}
                {i !== 0 && ', '}
                {s.name}
              </span>
            ))
        ) : (
          <span className="placeholder">
            Please Select
            <span className="material-symbols-outlined">
              {isOpen ? 'close' : 'expand_more'}
            </span>
          </span>
        )}
      </button>
    </div>
  )
}
