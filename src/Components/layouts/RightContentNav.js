import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Scrollspy from 'react-scrollspy'

const RightContentNav = ({ title, headingIds }) => {
  const classes = useStyles()
  return (
    <Fragment>
      <h4>Contents</h4>
      <ul className={classes.rightNavList}>
        <li className={classes.rightNavListItem}>{title}</li>

        <div>
          <Scrollspy
            style={{
              listStyleType: 'none',
              marginLeft: '-3.2rem',
            }}
            items={headingIds}
            currentClassName="active-right-sidebar"
          >
            {headingIds.map((_id, index) => (
              <li key={index}>
                <a
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    textTransform: 'capitalize',
                  }}
                  href={`#${_id}`}
                >
                  {_id.replace(/-/gi, ' ')}
                </a>
              </li>
            ))}
          </Scrollspy>
        </div>
      </ul>
    </Fragment>
  )
}

export default RightContentNav

const useStyles = makeStyles((theme) => ({
  rightNavList: {
    marginTop: '-1.3rem',
    borderLeft: '4px solid #1a73e8',
    listStyleType: 'none',
    listStylePosition: 'revert',
    width: '11.5rem',
  },
  rightNavListItem: {
    marginLeft: '-2rem',
  },
}))
