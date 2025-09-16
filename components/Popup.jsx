"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

// Popup কম্পোনেন্ট
export function Popup({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-red-500 flex items-center hover:text-red-700 font-bold"
            aria-label="Close popup"
          >
           বন্ধ করুন <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  );
}

