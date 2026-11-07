
import "./globals.css";

export const metadata = {
  title: {
    default: "Hillcity International Ministries",
    template: "%s | Hillcity International Ministries",
  },
  description:
    "Hillcity International Ministries — sharing the gospel of Jesus Christ through biblical teaching, evangelism, missions, and outreach.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
