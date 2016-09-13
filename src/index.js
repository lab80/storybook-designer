import React from 'react'

export default {
  addStories(Comp, storiesToAdd, options) {
    storiesToAdd.forEach((s) => {
      this.add(s.name, () => (<Comp {...s.props} />))
    })
  }
}
