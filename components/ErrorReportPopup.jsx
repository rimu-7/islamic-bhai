"use client"

import { useState } from 'react'
import { X, AlertTriangle, Send, CheckCircle } from 'lucide-react'

export default function ErrorReportPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null   // ✅ controlled by parent

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Error report submitted:', formData)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setFormData({ name: '', email: '', message: '' })
    }, 2000)
  }

  return (
    <div className="fixed inset-0 backdrop-blur bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-red-500 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-white" />
            <h3 className="text-lg font-semibold text-white">ভুল ত্রুটি রিপোর্ট</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-red-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-gray-700 mb-4">
                আমাদের যদি কোনও ভুল হয় তাহলে অবশ্যই সেটি আমাদের জানিয়ে দিন। আমরা যতদ্রুত সম্ভব সমাধানের চেষ্টা করবো।
              </p>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  আপনার নাম
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 outline-2 rounded-md focus:ring-2 focus:ring-red-500"
                  placeholder="আপনার নাম লিখুন"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ইমেইল ঠিকানা
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 outline-2 rounded-md focus:ring-2 focus:ring-red-500"
                  placeholder="আপনার ইমেইল লিখুন"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ভুল ত্রুটির বিবরণ
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 outline-2 rounded-md focus:ring-2 focus:ring-red-500"
                  placeholder="আপনি কোন ভুলটি দেখেছেন তা বিস্তারিত লিখুন"
                  required
                />
              </div>
              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  পরে করব
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 flex items-center"
                >
                  <Send className="h-4 w-4 mr-1" />
                  পাঠান
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">ধন্যবাদ!</h3>
              <p className="text-gray-600">
                আপনার রিপোর্টটি সফলভাবে জমা হয়েছে। আমরা দ্রুত এটি পর্যালোচনা করব।
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-100 px-6 py-3 text-center">
          <p className="text-xs text-gray-500">
            আপনি ন্যাভবারের "ভুল ত্রুটি" অপশনে ক্লিক করে পরে ও এই ফর্মটি পূরণ করতে পারবেন।
          </p>
        </div>
      </div>
    </div>
  )
}
