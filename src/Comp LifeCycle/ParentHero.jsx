import React from 'react'
import ErrorBoundies from './ErrorBoundies'
import { Hero } from './Hero'

export const ParentHero = () => {
  return (
    <div>
        <ErrorBoundies>
            <Hero heroName ={"BatMan"}></Hero>
        </ErrorBoundies>
        <ErrorBoundies>
            <Hero heroName ={"ShaktiMan"}></Hero>
        </ErrorBoundies>
        <ErrorBoundies>
            <Hero heroName ={"joker"}></Hero>
        </ErrorBoundies>
        <ErrorBoundies>
            <Hero heroName ={"Iron MAn"}></Hero>
        </ErrorBoundies>
    </div>
  )
}
