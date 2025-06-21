import { inter } from "@/app/ui/styles/fonts/fonts.font";
import "@/app/ui/styles/global.css";

type Layout = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Layout) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
