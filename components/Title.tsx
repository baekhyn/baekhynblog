import { TitleContainer } from './Title.style';

export default function Title({ name }: { name: string }) {
    return (
        <TitleContainer>
            <h1>{name}</h1>
        </TitleContainer>
    );
}
