import './globals.css';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Classical Revolution | Chamber Music for the People',
	description: 'Bringing classical music to neighborhood hangouts since 2006.',
};

// We make this function "async" so we can await the session
export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/* Updated body: Removed hardcoded bg-black to support light mode */}
			<body className={`${inter.className} antialiased bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 min-h-screen transition-colors`}>
				{/* 2. Pass the session into your AuthProvider */}
				<Navbar />
				<main className="w-full">
					{children}
				</main>
			</body>
		</html>
	);
}