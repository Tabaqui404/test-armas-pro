import React from 'react'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">📋 Test Armas Pro</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">✅ ¡Funcionando en Vercel!</h2>
          <p className="text-gray-600 mb-6">
            Simulador de examen para Licencia de Armas de la Guardia Civil
          </p>
          <p className="text-lg text-green-600 font-bold">✨ Base funcional lista para expandir</p>
        </div>
      </main>
    </div>
  )
}

export default App