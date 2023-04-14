import { Inter } from 'next/font/google'
import CryptoList from '@/components/views/crypto-list'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <CryptoList />
}
