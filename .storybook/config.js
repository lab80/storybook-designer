import React from 'react'
import { configure, setAddon } from '@kadira/storybook'
import addStories from '../src/index'

setAddon(addStories)

function loadStories() {
  require('../src/stories')
}
configure(loadStories, module)
