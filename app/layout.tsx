import "/public/assets/css/vendors/bootstrap.min.css";
import "/public/assets/css/vendors/swiper-bundle.min.css";
import "/public/assets/css/vendors/aos.css";
import "/public/assets/css/vendors/odometer.css";
import "/public/assets/css/vendors/carouselTicker.css";
import "/public/assets/css/vendors/magnific-popup.css";
import "/public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css";
import "/public/assets/fonts/boxicons/boxicons.min.css";
import "/public/assets/fonts/satoshi/satoshi.css";
import "/public/assets/css/main.css";

import "@/node_modules/react-modal-video/css/modal-video.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kerrsor - Your AI Team",
    description:
        "Hire a full Data Science team for a fixed monthly fee to enhance efficiency, unlock new revenue streams, and future-proof your operations.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Google Tag/Google Ads Manager */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=AW-16828184207"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'AW-16828184207');
                        `,
                    }}
                ></script>
            </head>
            <body>{children}</body>
        </html>
    );
}