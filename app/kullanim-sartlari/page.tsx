"use client";

import { useLanguage, LanguageProvider } from "@/lib/language-context";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function TermsOfUseContent() {
  const { language, setLanguage } = useLanguage();

  const content = {
    tr: {
      title: "Kullanım Şartları",
      lastUpdated: "Son Güncelleme: Mayıs 2025",
      backButton: "Ana Sayfaya Dön",
      sections: [
        {
          title: "1. Genel Hükümler",
          content: "Bu web sitesini ('Site') kullanarak, aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. Bu şartları kabul etmiyorsanız, lütfen sitemizi kullanmayınız.\n\nEDUTEK Eğitim Teknolojileri A.Ş. ('EDUTEK') bu kullanım şartlarını önceden haber vermeksizin değiştirme hakkını saklı tutar."
        },
        {
          title: "2. Fikri Mülkiyet Hakları",
          content: "Bu sitede yer alan tüm içerik, tasarım, grafik, logo, ikon, görüntü, metin, yazılım ve diğer materyaller EDUTEK'in veya lisans verenlerin fikri mülkiyetidir ve Türkiye Cumhuriyeti yasaları ile uluslararası fikri mülkiyet yasaları tarafından korunmaktadır.\n\nSitenin herhangi bir bölümünü EDUTEK'in yazılı izni olmaksızın kopyalayamaz, değiştiremez, dağıtamaz veya ticari amaçlarla kullanamazsınız."
        },
        {
          title: "3. Kullanım Lisansı",
          content: "EDUTEK, bu siteyi kişisel ve ticari olmayan amaçlarla görüntülemeniz için size sınırlı, geri alınabilir ve münhasır olmayan bir lisans vermektedir. Bu lisans:\n\n• İçeriği değiştirme veya kopyalama hakkı vermez\n• İçeriği ticari amaçla kullanma hakkı vermez\n• İçeriği üçüncü taraflarla paylaşma hakkı vermez\n• Tersine mühendislik yapma hakkı vermez"
        },
        {
          title: "4. Kullanıcı Yükümlülükleri",
          content: "Siteyi kullanırken aşağıdaki yükümlülüklere uymayı kabul edersiniz:\n\n• Yasalara ve düzenlemelere uygun davranmak\n• Başkalarının haklarına saygı göstermek\n• Doğru ve güncel bilgi sağlamak\n• Siteye zarar verecek faaliyetlerde bulunmamak\n• Yetkisiz erişim girişimlerinde bulunmamak\n• Spam veya zararlı içerik göndermemek"
        },
        {
          title: "5. Sorumluluk Sınırlaması",
          content: "EDUTEK, bu sitede sunulan bilgilerin doğruluğu, eksiksizliği veya güncelliği konusunda herhangi bir garanti vermemektedir. Site 'olduğu gibi' sunulmaktadır.\n\nEDUTEK, sitenin kullanımından doğabilecek doğrudan veya dolaylı zararlardan sorumlu tutulamaz. Bu sınırlama, kar kaybı, veri kaybı ve iş kesintisi dahil ancak bunlarla sınırlı olmayan tüm zararları kapsar."
        },
        {
          title: "6. Üçüncü Taraf Bağlantıları",
          content: "Bu site, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar yalnızca kullanıcı kolaylığı için sağlanmaktadır. EDUTEK, bağlantılı sitelerin içeriği, gizlilik politikaları veya uygulamaları üzerinde kontrol sahibi değildir ve bunlardan sorumlu değildir."
        },
        {
          title: "7. Hizmet Değişiklikleri",
          content: "EDUTEK, herhangi bir zamanda ve önceden bildirimde bulunmaksızın:\n\n• Sitenin herhangi bir bölümünü değiştirme\n• Özellikleri ekleme veya kaldırma\n• Hizmetleri askıya alma veya sonlandırma\n\nhakkını saklı tutar."
        },
        {
          title: "8. Uygulanacak Hukuk ve Uyuşmazlık Çözümü",
          content: "Bu kullanım şartları Türkiye Cumhuriyeti yasalarına tabidir. Bu şartlardan doğan uyuşmazlıklarda Ankara Mahkemeleri ve İcra Daireleri yetkilidir."
        },
        {
          title: "9. İletişim",
          content: "Bu kullanım şartları hakkında sorularınız için bizimle iletişime geçebilirsiniz:\n\nE-posta: info@edutek.com.tr\nTelefon: 0312 367 13 33\nAdres: Birlik Mah. 484. Cad. No 20/A Çankaya – ANKARA"
        }
      ]
    },
    en: {
      title: "Terms of Use",
      lastUpdated: "Last Updated: May 2025",
      backButton: "Back to Home",
      sections: [
        {
          title: "1. General Provisions",
          content: "By using this website ('Site'), you are deemed to have accepted the following terms of use. If you do not accept these terms, please do not use our site.\n\nEDUTEK Education Technologies Inc. ('EDUTEK') reserves the right to change these terms of use without prior notice."
        },
        {
          title: "2. Intellectual Property Rights",
          content: "All content, design, graphics, logos, icons, images, text, software, and other materials on this site are the intellectual property of EDUTEK or its licensors and are protected by the laws of the Republic of Turkey and international intellectual property laws.\n\nYou may not copy, modify, distribute, or use any part of the site for commercial purposes without EDUTEK's written permission."
        },
        {
          title: "3. License of Use",
          content: "EDUTEK grants you a limited, revocable, and non-exclusive license to view this site for personal and non-commercial purposes. This license:\n\n• Does not grant the right to modify or copy content\n• Does not grant the right to use content for commercial purposes\n• Does not grant the right to share content with third parties\n• Does not grant the right to reverse engineer"
        },
        {
          title: "4. User Obligations",
          content: "You agree to comply with the following obligations when using the site:\n\n• Act in accordance with laws and regulations\n• Respect the rights of others\n• Provide accurate and up-to-date information\n• Not engage in activities that would harm the site\n• Not attempt unauthorized access\n• Not send spam or harmful content"
        },
        {
          title: "5. Limitation of Liability",
          content: "EDUTEK does not guarantee the accuracy, completeness, or timeliness of the information provided on this site. The site is provided 'as is'.\n\nEDUTEK cannot be held responsible for direct or indirect damages that may arise from the use of the site. This limitation covers all damages including but not limited to loss of profit, loss of data, and business interruption."
        },
        {
          title: "6. Third-Party Links",
          content: "This site may contain links to third-party websites. These links are provided solely for user convenience. EDUTEK has no control over and is not responsible for the content, privacy policies, or practices of linked sites."
        },
        {
          title: "7. Service Changes",
          content: "EDUTEK reserves the right to, at any time and without prior notice:\n\n• Modify any part of the site\n• Add or remove features\n• Suspend or terminate services"
        },
        {
          title: "8. Applicable Law and Dispute Resolution",
          content: "These terms of use are subject to the laws of the Republic of Turkey. Ankara Courts and Enforcement Offices are authorized for disputes arising from these terms."
        },
        {
          title: "9. Contact",
          content: "For questions about these terms of use, you can contact us:\n\nEmail: info@edutek.com.tr\nPhone: 0312 367 13 33\nAddress: Birlik Mah. 484. Cad. No 20/A Çankaya – ANKARA"
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

export default function TermsOfUsePage() {
  return (
    <LanguageProvider>
      <TermsOfUseContent />
    </LanguageProvider>
  );
}
