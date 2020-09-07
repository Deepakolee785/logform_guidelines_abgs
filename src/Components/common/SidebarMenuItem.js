import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { Collapse } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const SidebarMenuItem = ({ label, path, subMenus }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <Fragment>
      {!path ? (
        <p style={{}} className={classes.sidebarMenu} onClick={handleClick}>
          {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          {label}
        </p>
      ) : (
        <NavLink
          to={path}
          style={{
            color: 'inherit',
            textDecoration: 'none',
          }}
          activeClassName="activeSidebarMenu"
        >
          <p className={classes.sidebarSubMenu} style={{ paddingLeft: '2rem' }}>
            Guiding Principles
          </p>
        </NavLink>
      )}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ul
          style={{
            marginTop: '-0.5rem',
            marginBottom: '-0.5rem',
            // marginLeft: '-1rem',
            listStyleType: 'none',
          }}
        >
          {subMenus &&
            subMenus.map((item, index) => {
              if (item.path.includes('#')) {
                return (
                  <HashLink
                    to={item.path}
                    key={index}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <li className={classes.sidebarSubMenu}>{item.label}</li>
                  </HashLink>
                )
              }
              return (
                <NavLink
                  to={item.path}
                  key={index}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  activeClassName="activeSidebarMenu"
                >
                  <li className={classes.sidebarSubMenu}>{item.label}</li>
                </NavLink>
              )
            })}
        </ul>
      </Collapse>
    </Fragment>
  )
}
SidebarMenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  subMenus: PropTypes.array,
}
export default SidebarMenuItem

//styles
const useStyles = makeStyles(() => ({
  sidebarMenu: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '-1.5rem',
    cursor: 'pointer',
    paddingLeft: '2rem',
    transition: 'all .1s ease-in',
    borderRadius: '1rem',
    marginRight: '1rem',
    '&:hover': {
      backgroundColor: ' #f5f5f5',
      color: '#000',
    },
  },
  sidebarSubMenu: {
    paddingLeft: '0.5rem',
    borderRadius: '1rem',
    transition: 'all .1s ease-in',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: ' #f5f5f5',
      color: '#000',
    },
  },
}))
