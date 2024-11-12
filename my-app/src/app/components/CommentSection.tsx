'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, MessageSquare, Send, User, Mail } from 'lucide-react'

interface Comment {
  _id: string
  name: string
  email: string
  comment: string
  publishedAt: string
}

interface CommentSectionProps {
  postId: string
  initialComments: Comment[]
}

export default function CommentSection({ postId, initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments || [])
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch('/api/comments/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, postId }),
      })
      
      if (response.ok) {
        const newComment = await response.json()
        setComments([newComment, ...comments])
        setFormData({ name: '', email: '', comment: '' })
      }
    } catch (error) {
      console.error('Error posting comment:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mt-16 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="w-6 h-6 text-[#126e51]" />
        <h3 className="text-2xl font-bold">Commentaires</h3>
      </div>
      
      <motion.form 
        onSubmit={handleSubmit} 
        className="mb-12 bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Votre nom"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#126e51] focus:ring-1 focus:ring-[#126e51] outline-none transition-colors"
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#126e51] focus:ring-1 focus:ring-[#126e51] outline-none transition-colors"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Votre commentaire"
            value={formData.comment}
            onChange={(e) => setFormData({...formData, comment: e.target.value})}
            className="w-full p-4 rounded-lg border border-gray-200 focus:border-[#126e51] focus:ring-1 focus:ring-[#126e51] outline-none transition-colors resize-none"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center justify-center w-full md:w-auto px-4 md:px-6 py-2 md:py-3 rounded-full bg-[#126e51] text-white font-semibold hover:bg-[#126e51]/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Publier le commentaire
            </>
          )}
        </button>
      </motion.form>

      <AnimatePresence>
        <div className="space-y-6">
          {comments.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500 py-8"
            >
              Aucun commentaire pour le moment. Soyez le premier à commenter !
            </motion.div>
          ) : (
            comments.map((comment) => (
              <motion.div
                key={comment._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#126e51]/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-[#126e51]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                      <time className="text-sm text-gray-500">
                        {new Date(comment.publishedAt).toLocaleDateString('fr-FR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </time>
                    </div>
                  </div>
                </div>
                <div className="ml-13">
                  <p className="text-gray-600 leading-relaxed">{comment.comment}</p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </AnimatePresence>
    </div>
  )
}