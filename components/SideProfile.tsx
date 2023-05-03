import { ImageWrapper, ProfileName, SideContainer, TextWrapper } from './SideProfile.style';
import Link from 'next/link';
import Image from 'next/image';
import userdata from '../data/userdata';

export default function SideProfile() {
    return (
        <SideContainer>
            <ImageWrapper>
                <Image
                    src="/avatar.jpeg"
                    alt="profile"
                    width={280}
                    height={280}
                    sizes="30vw"
                    priority
                    className="home-image"
                />
            </ImageWrapper>
            <TextWrapper>
                <div>
                    <Link href="/" legacyBehavior passHref>
                        <ProfileName>{userdata.fullName} 🧤</ProfileName>
                    </Link>
                    <div>{userdata.nickName}</div>
                </div>
                <p>{userdata.intro}</p>
                <div>
                    <a href={userdata.email} target="_blank" rel="noreferrer">
                        <Image
                            src="/mail.svg"
                            alt="mail"
                            width={20}
                            height={20}
                            priority
                            className="svg-icon"
                        />
                    </a>
                    <a href={userdata.github} target="_blank" rel="noreferrer">
                        <Image
                            src="/github.svg"
                            alt="mail"
                            width={20}
                            height={20}
                            priority
                            className="svg-icon"
                        />
                    </a>
                </div>
            </TextWrapper>
        </SideContainer>
    );
}
