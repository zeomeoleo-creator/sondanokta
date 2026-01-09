import { Phone, Truck, Package, MapPin, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-sky-600" />
              <h1 className="text-2xl font-bold text-sky-900">Sondacım.com</h1>
            </div>
            <a
              href="tel:+905332944943"
              className="flex items-center space-x-2 bg-sky-600 text-white px-6 py-2.5 rounded-full hover:bg-sky-700 transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">533 294 49 43</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-r from-sky-100 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold text-sky-900 mb-6 leading-tight">
                  Medikal Sonda Çözümleri
                  <span className="block text-sky-600 mt-2">İçin Güvenilir Adresiniz</span>
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Sağlık alanında yıllardır hizmet veren firmamız, kaliteli ve güvenilir medikal
                  sonda ürünleriyle yanınızda. Türkiye'nin her yerine hızlı teslimat ile sağlık
                  profesyonellerine destek oluyoruz.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-md">
                    <Truck className="w-5 h-5 text-sky-600" />
                    <span className="font-semibold text-gray-800">81 İle Kargo</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-md">
                    <MapPin className="w-5 h-5 text-sky-600" />
                    <span className="font-semibold text-gray-800">Adana İçi Sevkiyat</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                  <div className="aspect-square bg-gradient-to-br from-sky-200 to-blue-300 rounded-2xl flex items-center justify-center">
                    <Package className="w-32 h-32 text-white" />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-sky-50 rounded-lg">
                      <p className="text-3xl font-bold text-sky-600">100+</p>
                      <p className="text-sm text-gray-600 mt-1">Mutlu Müşteri</p>
                    </div>
                    <div className="text-center p-4 bg-sky-50 rounded-lg">
                      <p className="text-3xl font-bold text-sky-600">24/7</p>
                      <p className="text-sm text-gray-600 mt-1">Destek</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-sky-900 mb-4">Çalıştığımız Markalar</h3>
              <p className="text-xl text-gray-600">Güvenilir ve kaliteli medikal sonda markaları</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['Tibocat', 'Hi-Slip', 'Primacath', 'Goldchat'].map((brand) => (
                <div
                  key={brand}
                  className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-sky-100"
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Heart className="w-10 h-10 text-sky-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-sky-900 mb-2">{brand}</h4>
                  <p className="text-gray-600">Premium Kalite</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-sky-900 mb-4">Hizmet Alanlarımız</h3>
              <p className="text-xl text-gray-600">Türkiye genelinde ve yerel teslimat seçenekleri</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                  <Truck className="w-8 h-8 text-sky-600" />
                </div>
                <h4 className="text-2xl font-bold text-sky-900 mb-4">Türkiye'nin 81 İline Kargo</h4>
                <p className="text-gray-700 leading-relaxed">
                  Nerede olursanız olun, ürünleriniz güvenle ve hızlı bir şekilde adresinize ulaşıyor.
                  Türkiye'nin her noktasına kargo hizmetimizle kaliteli sonda ürünlerini kapınıza getiriyoruz.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-sky-600" />
                </div>
                <h4 className="text-2xl font-bold text-sky-900 mb-4">Adana İçi Özel Sevkiyat</h4>
                <p className="text-gray-700 leading-relaxed">
                  Adana ve çevresinde özel sevkiyat hizmetimizle aynı gün teslimat imkanı sunuyoruz.
                  Acil ihtiyaçlarınız için hızlı ve güvenilir çözüm ortağınızız.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-sky-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-6">Bizimle İletişime Geçin</h3>
              <p className="text-xl mb-8 text-sky-100">
                Medikal sonda ihtiyaçlarınız için bize ulaşın, size en iyi hizmeti sunalım
              </p>
              <a
                href="tel:+905332944943"
                className="inline-flex items-center space-x-3 bg-white text-sky-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-sky-50 transition-colors shadow-lg hover:shadow-xl"
              >
                <Phone className="w-6 h-6" />
                <span>533 294 49 43</span>
              </a>
              <p className="mt-6 text-sky-100">
                Hafta içi her gün 09:00 - 18:00 arası
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-sky-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6" />
            <span className="text-xl font-bold">Sondacım.com</span>
          </div>
          <p className="text-sky-300">
            Medikal Sonda Çözümleri - Türkiye'nin Her Yerine Hizmet
          </p>
          <p className="text-sky-400 mt-2 text-sm">
            © 2024 Sondacım.com - Tüm hakları saklıdır
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
