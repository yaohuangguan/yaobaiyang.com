import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { IconMoon, IconSun } from '@arco-design/web-react/icon'
import React from 'react'
import { Button } from '@arco-design/web-react'

export const DarkmodeToggler = () => (
  <ThemeToggler>
    {({
      theme,
      toggleTheme,
    }: {
      // eslint-disable-next-line react/no-unused-prop-types
      theme: string
      // eslint-disable-next-line react/no-unused-prop-types
      toggleTheme: (e: string) => void
    }) =>
      theme === 'dark' ? (
        <Button
          onClick={() => {
            document.body.setAttribute('arco-theme', 'light')
            toggleTheme('light')
          }}
          icon={<IconMoon />}
        />
      ) : (
        <Button
          onClick={() => {
            document.body.setAttribute('arco-theme', 'dark')
            toggleTheme('dark')
          }}
          icon={<IconSun />}
        />
      )
    }
  </ThemeToggler>
)
