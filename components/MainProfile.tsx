import Image from 'next/image'
import { ImageContainer, ProfileTitle, TextContainer } from './MainProfile.style'

export default function MainProfile() {
    return (
        <div>
            <ProfileTitle>About Hyn</ProfileTitle>
            <ImageContainer>
                <Image src="/images/profile.gif" alt="main img" width={190} height={190} />
            </ImageContainer>
            <TextContainer>
                <p>
                    자기소개 이곳에 텍스트를 채웁시다 자기소개 이곳에 텍스트를 채웁시다 자기소개
                    이곳에 텍스트를 채웁시다 자기소개 이곳에 텍스트를 채웁시다 자기소개 이곳에
                    텍스트를 채웁시다 자기소개 이곳에 텍스트를 채웁시다 자기소개 이곳에 텍스트를
                    채웁시다 자기소개 이곳에 텍스트를 채웁시다 자기소개 이곳에 텍스트를 채웁시다
                    자기소개 이곳에 텍스트를 채웁시다
                </p>
            </TextContainer>
        </div>
    )
}
