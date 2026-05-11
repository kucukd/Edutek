"use client";

import { useLanguage, LanguageProvider } from "@/lib/language-context";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function PrivacyPolicyContent() {
  const { language, setLanguage } = useLanguage();

  const content = {
    tr: {
      title: "Gizlilik Politikası",
      lastUpdated: "Son Güncelleme: Mayıs 2025",
      backButton: "Ana Sayfaya Dön",
      sections: [
        {
          title: "1. Giriş",
          content: "EDUTEK Eğitim Teknolojileri A.Ş. ('EDUTEK', 'biz', 'bizim') olarak, kişisel verilerinizin güvenliği konusunda azami özeni göstermekteyiz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda kişisel verilerinizin nasıl toplandığını, kullanıldığını, paylaşıldığını ve korunduğunu açıklamaktadır."
        },
        {
          title: "2. Toplanan Veriler",
          content: "Hizmetlerimizi kullanırken aşağıdaki kişisel verileri toplayabiliriz:\n\n• Kimlik Bilgileri: Ad, soyad, kullanıcı adı\n• İletişim Bilgileri: E-posta adresi, telefon numarası, adres\n• Kurum Bilgileri: Çalıştığınız kurum/şirket adı, pozisyonunuz\n• Teknik Veriler: IP adresi, tarayıcı türü, cihaz bilgileri\n• Kullanım Verileri: Site içi etkileşimler, tercihler"
        },
        {
          title: "3. Verilerin Kullanım Amaçları",
          content: "Kişisel verilerinizi aşağıdaki amaçlarla kullanmaktayız:\n\n• Hizmetlerimizi sunmak ve geliştirmek\n• Taleplerinize yanıt vermek\n• Size özelleştirilmiş deneyimler sunmak\n• Yasal yükümlülüklerimizi yerine getirmek\n• Güvenlik ve dolandırıcılık önleme"
        },
        {
          title: "4. Verilerin Paylaşımı",
          content: "Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz. Verilerinizi yalnızca hizmet sağlayıcılarımız (hosting, e-posta servisleri vb.) ile ve yalnızca hizmetlerimizi sunmak için gerekli olduğu ölçüde paylaşabiliriz."
        },
        {
          title: "5. Veri Güvenliği",
          content: "Kişisel verilerinizi korumak için endüstri standardı güvenlik önlemleri uyguluyoruz. Bu önlemler arasında SSL şifreleme, güvenli sunucular ve düzenli güvenlik denetimleri bulunmaktadır."
        },
        {
          title: "6. Haklarınız",
          content: "KVKK kapsamında aşağıdaki haklara sahipsiniz:\n\n• Verilerinize erişim hakkı\n• Verilerinizin düzeltilmesini talep etme hakkı\n• Verilerinizin silinmesini talep etme hakkı\n• Veri işlemeye itiraz etme hakkı\n• Veri taşınabilirliği hakkı"
        },
        {
          title: "7. İletişim",
          content: "Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:\n\nE-posta: info@edutek.com.tr\nTelefon: 0312 367 13 33\nAdres: Birlik Mah. 484. Cad. No 20/A Çankaya – ANKARA"
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: May 2025",
      backButton: "Back to Home",
      sections: [
        {
          title: "1. Introduction",
          content: "At EDUTEK Education Technologies Inc. ('EDUTEK', 'we', 'our'), we take the utmost care regarding the security of your personal data. This Privacy Policy explains how your personal data is collected, used, shared, and protected when you visit our website and use our services."
        },
        {
          title: "2. Data Collected",
          content: "We may collect the following personal data when you use our services:\n\n• Identity Information: Name, surname, username\n• Contact Information: Email address, phone number, address\n• Organization Information: Your company/institution name, position\n• Technical Data: IP address, browser type, device information\n• Usage Data: On-site interactions, preferences"
        },
        {
          title: "3. Purposes of Data Use",
          content: "We use your personal data for the following purposes:\n\n• To provide and improve our services\n• To respond to your requests\n• To offer personalized experiences\n• To fulfill our legal obligations\n• Security and fraud prevention"
        },
        {
          title: "4. Data Sharing",
          content: "Your personal data is not shared with third parties except for legal obligations. We may share your data only with our service providers (hosting, email services, etc.) and only to the extent necessary to provide our services."
        },
        {
          title: "5. Data Security",
          content: "We implement industry-standard security measures to protect your personal data. These measures include SSL encryption, secure servers, and regular security audits."
        },
        {
          title: "6. Your Rights",
          content: "Under KVKK, you have the following rights:\n\n• Right to access your data\n• Right to request correction of your data\n• Right to request deletion of your data\n• Right to object to data processing\n• Right to data portability"
        },
        {
          title: "7. Contact",
          content: "For questions about our privacy policy, you can contact us:\n\nEmail: info@edutek.com.tr\nPhone: 0312 367 13 33\nAddress: Birlik Mah. 484. Cad. No 20/A Çankaya – ANKARA"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-[#040810] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#040810]/95 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edutek-logo-My2ShdW4J64S4QqE7YYgTVpIkp0GVm.png" 
              alt="EDUTEK Logo" 
              className="h-12 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
            <button 
              onClick={() => setLanguage("tr")}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${language === "tr" ? "bg-[#e67e22]/20 text-white" : "text-neutral-400 hover:text-white"}`}
            >
              TR
            </button>
            <button 
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${language === "en" ? "bg-[#e67e22]/20 text-white" : "text-neutral-400 hover:text-white"}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-neutral-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.backButton}
          </Button>
        </Link>

        <h1 className="mb-2 text-4xl font-bold text-white">{t.title}</h1>
        <p className="mb-12 text-sm text-neutral-500">{t.lastUpdated}</p>

        <div className="space-y-8">
          {t.sections.map((section, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">{section.title}</h2>
              <p className="whitespace-pre-line text-neutral-300 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} EDUTEK. {language === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}
        </div>
      </footer>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <LanguageProvider>
      <PrivacyPolicyContent />
    </LanguageProvider>
  );
}
