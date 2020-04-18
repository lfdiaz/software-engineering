---
to: packages/ui/src/components/<%= name %>.jsx
---

import React, {useState} from 'react'
import {makeStyles, useTheme, useStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => createStyles({
    root: {

    }
}))

const <%= name %> = () => {
    const theme = useTheme()
    const classes = useStyles(theme)
    return <div></div>
}

export default <%= name %>


