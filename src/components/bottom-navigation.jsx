import React from 'react'
import { Tabbar, Link, zmp } from 'zmp-framework/react'
import category from '../static/icons/category.svg'
import membership from '../static/icons/membership.svg'
import cart from '../static/icons/cart.svg'
import '../css/bottom-navigation.scss'


const BottomNavigation = () => {

  const links = [
    { name: 'Danh mục', href: '/', icon: category },
    { name: 'Hạng hội viên', href: '/', icon: membership },
    { name: 'Giỏ hàng', href: '/cart', icon: cart },
  ]

  return (
    <div className="bottom-navigation">

      <Tabbar bottom>
        {links.map(({ name, icon, href }) => <Link key={href} onClick={() => navigateWithoutAnimation(href)}>
          <img src={icon} />
          {name}
        </Link>)}
      </Tabbar>
    </div>
  )
}


export default BottomNavigation
