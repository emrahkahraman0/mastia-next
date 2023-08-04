import "/styles/style.css";
import "/styles/grid.css";
import Header from "../components/Header";
import İnfo from "../components/İnfo";
import Footer from "../components/Footer";

export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <İnfo />
        <Footer />
      </body>
    </html>
  );
}
