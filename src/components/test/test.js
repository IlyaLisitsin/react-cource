import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'

import s from './styles.scss'

export default () => withStyles(s)(<h3 className={s.title}>Im testo</h3>)
// export default () => (<h3 className={s.title}>Im testo</h3>)
