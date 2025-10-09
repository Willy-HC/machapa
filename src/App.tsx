import { Footprints, Sparkles, Heart, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <Footprints className="w-8 h-8 text-amber-400" />
            <h1 className="text-3xl font-bold text-white">Mapaches: Los Bandidos de la Naturaleza</h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-slate-600 to-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-24 h-24 text-amber-400 mx-auto mb-4" />
                  <p className="text-white text-xl font-semibold">Procyon lotor</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Conociendo a los Mapaches</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Los mapaches son mamíferos inteligentes y curiosos, reconocibles por su distintiva máscara facial negra
                y su cola anillada. Son nativos de América y se han adaptado extraordinariamente bien a vivir cerca de
                los humanos, convirtiéndose en uno de los animales urbanos más exitosos del mundo.
              </p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-emerald-500" />
              <h3 className="text-2xl font-bold text-slate-800">Hábitat</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Los mapaches son extremadamente adaptables y pueden vivir en una variedad de hábitats:
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span>Bosques caducifolios y mixtos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span>Áreas cercanas a ríos y humedales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span>Zonas urbanas y suburbanas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span>Parques y jardines</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-rose-500" />
              <h3 className="text-2xl font-bold text-slate-800">Características</h3>
            </div>
            <div className="space-y-4 text-slate-600">
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Tamaño</h4>
                <p>Longitud: 40-70 cm, Cola: 20-40 cm, Peso: 5-12 kg</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Longevidad</h4>
                <p>2-3 años en vida silvestre, hasta 20 años en cautiverio</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Actividad</h4>
                <p>Principalmente nocturnos y crepusculares</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Manos</h4>
                <p>Poseen dedos extremadamente hábiles y sensibles</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">Comportamiento y Alimentación</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-bold text-white mb-3 text-lg">Dieta Omnívora</h4>
              <p className="text-white/90">
                Los mapaches son oportunistas y comen casi cualquier cosa: frutas, nueces, insectos,
                pequeños animales, huevos, peces y restos humanos. Son conocidos por "lavar" su comida
                en agua antes de comerla.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-bold text-white mb-3 text-lg">Inteligencia</h4>
              <p className="text-white/90">
                Son animales muy inteligentes capaces de resolver problemas complejos, abrir cerraduras,
                y recordar soluciones durante años. Su memoria y capacidad de aprendizaje son comparables
                a las de los primates.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Datos Curiosos</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👐</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Manos Sensibles</h4>
              <p className="text-slate-600 text-sm">
                Sus patas delanteras tienen hasta cinco veces más receptores sensoriales que las traseras
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌙</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Visión Nocturna</h4>
              <p className="text-slate-600 text-sm">
                Poseen excelente visión nocturna gracias a una capa reflectante detrás de la retina
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏊</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Buenos Nadadores</h4>
              <p className="text-slate-600 text-sm">
                Pueden nadar hasta 5 km/h y bucear para buscar alimento en el agua
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-slate-400">
            Información educativa sobre mapaches • 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
