'use client'

import { useState } from 'react'

export default function CategoryFilter({ categories }:any) {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <div className="flex flex-wrap gap-3 mb-8 justify-center">
      <button
        onClick={() => setActiveCategory('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeCategory === 'all'
            ? 'bg-[#126e51] text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Tous les articles
      </button>
      {categories.map(({category}:any) => (
        <button
          key={category._id}
          onClick={() => setActiveCategory(category._id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category._id
              ? 'bg-[#126e51] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {category.title}
        </button>
      ))}
    </div>
  )
}
