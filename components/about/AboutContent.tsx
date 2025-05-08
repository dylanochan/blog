'use client'
import { useState } from 'react'

export default function AboutContent() {
  const [isKorean, setIsKorean] = useState<boolean>(true)
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value
    setIsKorean(selectedLanguage === 'cn')
  }
  return (
    <div>
      <div className="flex items-center justify-end">
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
          id="language"
          onChange={handleLanguageChange}
          defaultValue={'cn'} // 현재 선택된 언어를 표시
        >
          <option selected value="cn">
            中文
          </option>
          <option value="en">English</option>
        </select>
      </div>
      <div className="p-4">{isKorean ? <ChineseContent /> : <EnglishContent />}</div>
    </div>
  )
}

const ChineseContent = () => {
  return (
    <div>
      我将稍后介绍自己。
    </div>
  )
}
const EnglishContent = () => {
  return (
    <div>
      I will introduce myself later.
    </div>
  )
}
