'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Plane, Hotel, Utensils, User, Briefcase } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'concierge'
  timestamp: Date
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello, and welcome to The Concierge by Shirob.\n\nI'm your personal lifestyle assistant — ready to help you book, plan, or manage your day.\n\nHow may I assist you today?",
      sender: 'concierge',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickActions = [
    { icon: <Plane className="w-5 h-5" />, text: 'Arrange airport pickup', emoji: '✈' },
    { icon: <Hotel className="w-5 h-5" />, text: 'Book or recommend a hotel', emoji: '🏨' },
    { icon: <Utensils className="w-5 h-5" />, text: 'Find diet-friendly restaurants', emoji: '🍽' },
    { icon: <User className="w-5 h-5" />, text: 'Request an on-ground personal assistant', emoji: '🧍' },
    { icon: <Briefcase className="w-5 h-5" />, text: 'Plan corporate or leisure experiences', emoji: '💼' },
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateConciergeResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('airport') || lowerMessage.includes('pickup') || lowerMessage.includes('pick up')) {
      return "Absolutely. Could you please share your pickup location, flight time, and preferred vehicle type? I'll schedule a trusted driver immediately."
    }
    
    if (lowerMessage.includes('hotel') || lowerMessage.includes('accommodation') || lowerMessage.includes('stay')) {
      return "I'd be happy to help you find the perfect hotel. What are your preferences for location, dates, and budget? I'll match you with trusted options that suit your needs."
    }
    
    if (lowerMessage.includes('restaurant') || lowerMessage.includes('food') || lowerMessage.includes('dining') || lowerMessage.includes('diet')) {
      return "Of course. What type of cuisine are you interested in, and do you have any dietary requirements? I'll find the perfect restaurant and handle the reservation for you."
    }
    
    if (lowerMessage.includes('assistant') || lowerMessage.includes('standby') || lowerMessage.includes('help')) {
      return "I can arrange a trained, well-mannered personal assistant for you. When and where would you need them? They'll be ready to help with errands, directions, or any last-minute needs."
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm here to help make your day seamless. What can I assist you with today?"
    }
    
    return "I understand. Let me help you with that. Could you provide a few more details so I can assist you perfectly? Consider it done."
  }

  const handleSend = (text?: string) => {
    const messageText = text || input.trim()
    if (!messageText) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const conciergeResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateConciergeResponse(messageText),
        sender: 'concierge',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, conciergeResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleQuickAction = (text: string) => {
    handleSend(text)
  }

  return (
    <div className="min-h-screen py-20 bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-4">
            Chat with Your Concierge
          </h1>
          <p className="text-lg text-luxury-text">
            Your personal lifestyle assistant is ready to help
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-sm shadow-lg border border-cream-200 flex flex-col" style={{ height: '600px' }}>
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.sender === 'user'
                      ? 'bg-gold-500 text-white'
                      : 'bg-cream-100 text-luxury-dark border border-cream-200'
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-gold-100' : 'text-luxury-text opacity-60'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-cream-100 border border-cream-200 rounded-lg p-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-6 pb-4 border-t border-cream-200">
              <p className="text-sm text-luxury-text mb-3 mt-4">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.text)}
                    className="flex items-center gap-2 px-4 py-2 bg-cream-50 border border-cream-200 rounded-sm hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all duration-200 text-sm"
                  >
                    <span>{action.emoji}</span>
                    <span>{action.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-cream-200 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSend()
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-cream-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-luxury-dark bg-cream-50"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className="bg-gold-500 text-white px-6 py-3 rounded-sm hover:bg-gold-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span className="hidden sm:inline">Send</span>
              </button>
            </div>
            <p className="text-xs text-luxury-text opacity-60 mt-2 text-center">
              Just tell me what you need, and I'll handle the rest — seamlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

