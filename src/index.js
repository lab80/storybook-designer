import React from 'react'
import DesignPreview from './DesignPreview'

export default {
  addStories(Comp, storiesToAdd, options) {
    storiesToAdd.forEach((s) => {
      const implementation = <Comp {...s.props} />
      this.add(s.name, () => <DesignPreview design={s.design} implementation={implementation} />)
    })
  }
}
