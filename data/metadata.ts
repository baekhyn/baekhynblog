const metadata = {
    title: 'Hyn blog',
    description: 'Hyn의 블로그입니다.',
    cononical: 'https://hynblog.vercel.app',
    openGraph: {
        type: 'website',
        url: 'https://hynblog.vercel.app',
        title: 'Hyn blog',
        site_name: 'Hyn blog',
        locale: 'ko_KR',
        images: [
            {
                url: '/images/hyn.png',
                width: 800,
                height: 400,
                alt: '블로그 홈 이미지',
            },
        ],
    },
    twitter: {
        card: 'summary',
        cardType: 'summary_large_image',
    },
}

export default metadata
