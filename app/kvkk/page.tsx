"use client";

import { useLanguage, LanguageProvider } from "@/lib/language-context";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function KVKKContent() {
  const { language, setLanguage } = useLanguage();

  const content = {
    tr: {
      title: "KVKK Aydınlatma Metni",
      lastUpdated: "Son Güncelleme: Mayıs 2025",
      backButton: "Ana Sayfaya Dön",
      sections: [
        {
          title: "1. Veri Sorumlusu",
          content: "6698 sayılı Kişisel Verilerin Korunması Kanunu ('KVKK') uyarınca, kişisel verileriniz; veri sorumlusu olarak EDUTEK Eğitim Teknolojileri A.Ş. ('EDUTEK') tarafından aşağıda açıklanan kapsamda işlenebilecektir.\n\nVeri Sorumlusu:\nEDUTEK Eğitim Teknolojileri A.Ş.\nBirlik Mah. 484. Cad. No 20/A Çankaya – ANKARA\nE-posta: info@edutek.com.tr\nTelefon: 0312 367 13 33"
        },
        {
          title: "2. Kişisel Verilerin İşlenme Amaçları",
          content: "Kişisel verileriniz EDUTEK tarafından aşağıdaki amaçlarla işlenmektedir:\n\n• Ürün ve hizmetlerimizin sunulması\n• Müşteri ilişkilerinin yönetimi\n• Talep ve şikayetlerin değerlendirilmesi\n• Yasal yükümlülüklerin yerine getirilmesi\n• Kurumsal iletişim faaliyetleri\n• Bilgi güvenliği süreçlerinin yürütülmesi\n• İstatistiksel analizler ve raporlama"
        },
        {
          title: "3. Kişisel Verilerin Aktarılması",
          content: "Toplanan kişisel verileriniz; KVKK'nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak:\n\n• İş ortaklarımıza\n• Tedarikçilerimize\n• Hissedarlarımıza\n• Kanunen yetkili kamu kurumlarına\n• Kanunen yetkili özel kişilere\n\naktarılabilecektir."
        },
        {
          title: "4. Kişisel Veri Toplama Yöntemi ve Hukuki Sebebi",
          content: "Kişisel verileriniz, EDUTEK tarafından farklı kanallar ve farklı hukuki sebeplere dayanılarak toplanmaktadır:\n\n• Web sitemiz üzerinden doldurulan formlar\n• E-posta yazışmaları\n• Telefon görüşmeleri\n• Fiziksel ortamda gerçekleştirilen toplantılar\n\nHukuki Sebepler:\n• Açık rıza\n• Sözleşmenin kurulması ve ifası\n• Veri sorumlusunun meşru menfaati\n• Hukuki yükümlülüğün yerine getirilmesi"
        },
        {
          title: "5. Kişisel Veri Sahibinin Hakları",
          content: "KVKK'nın 11. maddesi uyarınca, kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:\n\n• Kişisel verilerinizin işlenip işlenmediğini öğrenme\n• Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme\n• Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme\n• Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme\n• Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme\n• KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme\n• Düzeltme, silme veya yok etme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme\n• İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme\n• Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme"
        },
        {
          title: "6. Başvuru Yöntemi",
          content: "Yukarıda belirtilen haklarınızı kullanmak için:\n\n• Kimlik tespiti yapılabilmesi adına kimliğinizi tevsik edici belge\n• Başvuru konusuna ilişkin açıklamalarınız\n\nile birlikte aşağıdaki yöntemlerden biri ile başvurabilirsiniz:\n\nE-posta: info@edutek.com.tr\nPosta: Birlik Mah. 484. Cad. No 20/A Çankaya – ANKARA\n\nBaşvurular en geç 30 gün içinde sonuçlandırılacaktır."
        }
      ]
    },
    en: {
      title: "KVKK Privacy Notice",
      lastUpdated: "Last Updated: May 2025",
      backButton: "Back to Home",
      sections: [
        {
          title: "1. Data Controller",
          content: "In accordance with the Personal Data Protection Law No. 6698 ('KVKK'), your personal data may be processed by EDUTEK Education Technologies Inc. ('EDUTEK') as the data controller, within the scope explained below.\n\nData Controller:\nEDUTEK Education Technologies Inc.\nBirlik Mah. 484. Cad. No 20/A Çankaya – ANKARA\nEmail: info@edutek.com.tr\nPhone: 0312 367 13 33"
        },
        {
          title: "2. Purposes of Personal Data Processing",
          content: "Your personal data is processed by EDUTEK for the following purposes:\n\n• Providing our products and services\n• Customer relationship management\n• Evaluating requests and complaints\n• Fulfilling legal obligations\n• Corporate communication activities\n• Conducting information security processes\n• Statistical analysis and reporting"
        },
        {
          title: "3. Transfer of Personal Data",
          content: "Your collected personal data may be transferred to:\n\n• Our business partners\n• Our suppliers\n• Our shareholders\n• Legally authorized public institutions\n• Legally authorized private persons\n\nin accordance with the conditions specified in Articles 8 and 9 of KVKK."
        },
        {
          title: "4. Personal Data Collection Method and Legal Basis",
          content: "Your personal data is collected by EDUTEK through various channels and based on various legal grounds:\n\n• Forms filled on our website\n• Email correspondence\n• Phone calls\n• Meetings held in physical environments\n\nLegal Grounds:\n• Explicit consent\n• Establishment and performance of contract\n• Legitimate interest of data controller\n• Fulfillment of legal obligation"
        },
        {
          title: "5. Rights of the Data Subject",
          content: "Pursuant to Article 11 of KVKK, as a personal data subject, you have the following rights:\n\n• To learn whether your personal data is processed\n• To request information about processing if your data has been processed\n• To learn the purpose of processing and whether they are used in accordance with their purpose\n• To know the third parties to whom your personal data is transferred domestically or abroad\n• To request correction if your personal data is incomplete or incorrectly processed\n• To request deletion or destruction of your personal data within the framework of conditions set forth in Article 7 of KVKK\n• To request notification of correction, deletion or destruction operations to third parties to whom personal data has been transferred\n• To object to the emergence of a result against you by analyzing processed data exclusively through automated systems\n• To claim compensation if you suffer damage due to unlawful processing of your personal data"
        },
        {
          title: "6. Application Method",
          content: "To exercise your rights mentioned above:\n\n• A document verifying your identity for identification purposes\n• Your explanations regarding the subject of application\n\nYou can apply through one of the following methods:\n\nEmail: info@edutek.com.tr\nMail: Birlik Mah. 484. Cad. No 20/A Çankaya – ANKARA\n\nApplications will be concluded within 30 days at the latest."
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

export default function KVKKPage() {
  return (
    <LanguageProvider>
      <KVKKContent />
    </LanguageProvider>
  );
}
