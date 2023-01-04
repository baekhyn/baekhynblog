import { ImageWrapper, ProfileName, SideContainer, TextWrapper } from './SideProfile.style';
import Link from 'next/link';
import Image from 'next/image';
import { Global, css } from '@emotion/react';

export default function SideProfile() {
    return (
        <SideContainer>
            <Global
                styles={css`
                    .home-image {
                        width: 100%;
                        height: auto;
                        border-radius: 50%;
                        border: 1.5px solid var(--colors-gray4);
                        box-shadow: 0 8px 24px rgba(140, 149, 159, 0.2);
                    }
                    .svg-icon {
                        margin-right: 5px;
                    }
                `}
            />
            <ImageWrapper>
                <Image
                    src="/images/avatar.jpeg"
                    alt="profile"
                    width={280}
                    height={280}
                    sizes="100vw"
                    priority
                    className="home-image"
                />
            </ImageWrapper>
            <TextWrapper>
                <Link href="/" legacyBehavior passHref>
                    <ProfileName>baekhyunhui 🧤</ProfileName>
                </Link>
                FE 개발을 공부하고 있습니다.
                <div>
                    <a href="mailto:baekhyunhui@gmail.com">
                        <Image
                            src="/mail.svg"
                            alt="mail"
                            width={20}
                            height={20}
                            className="svg-icon"
                        />
                    </a>
                    <a href="https://github.com/baekhyn?tab=repositories">
                        <Image
                            src="/github.svg"
                            alt="mail"
                            width={20}
                            height={20}
                            className="svg-icon"
                        />
                    </a>
                </div>
            </TextWrapper>
        </SideContainer>
    );
}
