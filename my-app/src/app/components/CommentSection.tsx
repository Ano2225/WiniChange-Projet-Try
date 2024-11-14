'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,  
          postId: postId
        }),
      })
      
      console.log('Request body:', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        postId: postId
      });
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Erreur lors de l\'envoi du commentaire')
      }

      const data = await response.json()
      console.log('Response data:', data);
      
      toast.success('Commentaire ajouté avec succès!')

    } catch (error) {
      console.error('Detailed error:', error)
      toast.error('Une erreur est survenue')
    } finally {
      setIsLoading(false)
    }
  }

  const refreshComments = async () => {
    try {
      const response = await fetch(`/api/comments?postId=${postId}`)
      if (response.ok) {
        const freshComments = await response.json()
        setComments(freshComments)
      }
    } catch (error) {
      console.error('Error refreshing comments:', error)
      toast.error('Erreur lors du rafraîchissement des commentaires')
    }
  }

  return (
    <div className="mt-16 max-w-3xl mx-auto mb-10">
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
            <div>
              <h2 className="text-2xl font-bold mb-4">Tous les commentaires</h2>
              <ul>
                {comments.map((comment) => (
                  <div key={comment._id} className="border-b border-[#696969]/50 py-2">
                    <p>
                      <strong>{comment.name}</strong>{" "}
                      <span className="text-[#696969] text-sm sm:w-1/2">
                        {new Date(comment.publishedAt).toLocaleString()}
                      </span>
                    </p>
                    <p>{comment.message}</p> 
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </AnimatePresence>
     
      <motion.form 
        onSubmit={handleSubmit}
        className="mb-12 mt-10  bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
         <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="w-6 h-6 text-[#126e51]" />
        <h3 className="text-2xl font-bold">Laissez un commentaire</h3>
      </div>
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

    
    </div>
  )
}