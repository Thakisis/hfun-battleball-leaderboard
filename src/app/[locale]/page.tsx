import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useTranslations } from 'next-intl'
export default function HomePage() {
  const t = useTranslations('navigation')
  return (
    <div className="flex flex-col flex-1 bg-background text-foreground">
      <main className="flex-grow flex flex-col justify-center items-center p-4">

        <h1 className="text-6xl font-bold">HFUN.</h1>
        <p className="text-sm text-muted-foreground text-center mt-2 mb-4">
          {t('message')}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Link href="/catalog" rel="noopener noreferrer">
            <Button variant="ghost">{t('catalog')}</Button>
          </Link>
          <Link href="/leaderboard" rel="noopener noreferrer">
            <Button variant="ghost">{t('leaderboard')}</Button>
          </Link>
          <Link href="/finder" rel="noopener noreferrer">
            <Button variant="ghost">{t('finder')}</Button>
          </Link>
        </div>
        <Separator className="my-8 w-full max-w-sm" />

      </main>
    </div>
  )
}
