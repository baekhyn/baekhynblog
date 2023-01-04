import { Global, css } from '@emotion/react';
import { getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import React from 'react';
import {
    Blockquote,
    Code,
    H1,
    H2,
    H3,
    Li,
    Line,
    MdxStyle,
    Ol,
    Strong,
    Text,
    Ul,
    CodeStyle,
    NavStyle,
} from './MdxContainer.style';

const nextImage = ({ alt, src }) => {
    return (
        <>
            <Global
                styles={css`
                    .image {
                        width: 100%;
                        height: auto;
                    }
                `}
            />
            <Image alt={alt} src={src} sizes="100vw" className="image" />
        </>
    );
};

const MdxContainer = ({ code }: { code: string }) => {
    const components = {
        h1: H1,
        h2: H2,
        h3: H3,
        blockquote: Blockquote,
        p: Text,
        code: Code,
        li: Li,
        ul: Ul,
        ol: Ol,
        strong: Strong,
        hr: Line,
        img: nextImage,
        pre: CodeStyle,
        nav: NavStyle,
    };

    const MDXComponent = React.useMemo(() => getMDXComponent(code), [code]);
    return (
        <MdxStyle>
            <MDXComponent components={components} />
        </MdxStyle>
    );
};

export default MdxContainer;
