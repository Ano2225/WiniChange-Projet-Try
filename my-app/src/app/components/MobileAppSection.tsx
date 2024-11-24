import Link from "next/link";

export default function ComingSoon() {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            {/* Titre */}
            <div className="flex items-center justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Applications Mobiles Bientôt Disponibles !
              </h2>
            </div>
            
            {/* Message */}
            <p className="text-gray-600 text-center mb-6">
              Nos applications iOS et Android sont en cours de développement. 
              Elles seront disponibles très prochainement sur les stores !
            </p>
  
            {/* Cartes iOS et Android */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* iOS */}
              <div className="bg-gray-50 p-4 rounded-lg text-center transform transition-all hover:scale-105 cursor-pointer">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 mx-auto mb-2 text-gray-800" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <h3 className="font-semibold text-gray-800">iOS</h3>
                <p className="text-sm text-gray-500">App Store</p>
                <div className="mt-2 text-xs text-teal-600">Bientôt disponible</div>
              </div>
  
              {/* Android */}
              <div className="bg-gray-50 p-4 rounded-lg text-center transform transition-all hover:scale-105 cursor-pointer">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 mx-auto mb-2 text-gray-800" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M16.61 15.15c-.46 0-.84-.37-.84-.83s.37-.84.84-.84c.46 0 .84.37.84.84s-.37.83-.84.83m-9.2 0c-.46 0-.84-.37-.84-.83s.37-.84.84-.84c.46 0 .84.37.84.84s-.37.83-.84.83m9.5-4.27L19 8.77c.12-.12.12-.31 0-.43-.12-.12-.31-.12-.43 0l-2.12 2.12c-.82-.46-1.89-.74-2.45-.74-1.16 0-2.31.32-3.32.93L8.6 8.57c-.12-.12-.31-.12-.43 0-.12.12-.12.31 0 .43l2.09 2.09c-1.91 1.71-2.3 3.03-2.38 3.49h10.23c-.07-.46-.47-1.78-2.38-3.49M7.32 18.32c0 .46.37.84.84.84h.62v2.17c0 .46.37.84.84.84s.84-.37.84-.84v-2.17h1.04v2.17c0 .46.37.84.84.84s.84-.37.84-.84v-2.17h1.04v2.17c0 .46.37.84.84.84s.84-.37.84-.84v-2.17h.62c.46 0 .84-.37.84-.84V9.66H7.32v8.66z"/>
                </svg>
                <h3 className="font-semibold text-gray-800">Android</h3>
                <p className="text-sm text-gray-500">Play Store</p>
                <div className="mt-2 text-xs text-teal-600">Bientôt disponible</div>
              </div>
            </div>
  
            {/* Message de bas de page */}
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-4">
                Restez connectés pour être informés de la sortie !
              </div>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
               <Link href="/">
               Me retourner
               </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }