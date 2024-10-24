function inventoryList() {
	let items = [
	  {
  	  name: 'Vladimir'
  	},
  	{
  	  name: 'Andjela'
  	},
  	{
  	  name: 'Filip'
  	}
	]

	const add = (name) => {
	  const names = items.filter(item => item.name === name)
	  if (names.length === 0) {
	    items.push({name: name})
	  }
	}

	const remove = (name) => {
	  items = items.filter(item => item.name !== name)
	}

	const getList = () => {
	  console.log(items)
		return items
	}

  getList()
  add('Vladimir')
  getList()
  add('Goran')
  getList()
  remove('Vladimir')
  getList()
  add('Gordana')
  getList()
  add('Vladimir')
  getList()

	return {add, remove, getList}

}

inventoryList()