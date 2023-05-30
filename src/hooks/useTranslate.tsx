import { en } from "@/translations/en"
import { es } from "@/translations/es"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export const useTranslate = () => {
  const [translations, setTranslations] = useState<any>(null)
  const { locale } = useRouter()

  useEffect(() => {
    const translationsFile = locale === "es" ? es : en
    setTranslations(translationsFile)
  }, [locale])

  return { t: translations, locale }
}
