'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Loader2, MessageSquare, Send, User, Mail } from 'lucide-react'
import toast from 'react-hot-toast'

interface Comment {
  _id: string
  name: string
  email: string
  message: string
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
    message: ''
  })

  const loadComments = async () => {
    try {
      const response = await fetch(`/api/comments?postId=${postId}`)
      if (response.ok) {
        const data = await response.json()
        setComments(data)
      }
    } catch (error) {
      console.error('Error loading comments:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, postId }),
      })
      
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l\'envoi du commentaire')
      }

      setFormData({ name: '', email: '', message: '' })
      toast.success('Commentaire ajouté avec succès')
      
      await loadComments()
      
    } catch (error) {
      console.error('Error submitting comment:', error)
      toast.error(error instanceof Error ? error.message : 'Une erreur est survenue')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadComments()
    
    const interval = setInterval(loadComments, 10000) 

    return () => clearInterval(interval)
  }, [postId])

  return (
    <div className="mt-16 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="w-6 h-6 text-[#126e51]" />
        <h3 className="text-2xl font-bold">Commentaires {comments.length > 0 && `(${comments.length})`}</h3>
      </div>
      
      <motion.form 
        onSubmit={handleSubmit}
        className="mb-12 bg-white rounded-2xl p-6 border border-gray-100"
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
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full p-4 rounded-lg border border-gray-200 focus:border-[#126e51] focus:ring-1 focus:ring-[#126e51] outline-none transition-colors resize-none"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-full bg-[#126e51] text-white font-semibold hover:bg-[#126e51]/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
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
            <div className="space-y-4">
              {comments.map((comment) => (
                <motion.div
                  key={comment._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-900">{comment.name}</span>
                    <span className="text-sm text-gray-500">
                      {new Date(comment.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700">{comment.message}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </AnimatePresence>
    </div>
  )
}