---
to: packages/ui/src/components/<%= name %>.jsx
---

import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {

    }
})

const <%= name %> = () => {
    const classes = useStyles()
    return <div></div>
}

export default <%= name %>


