import { getMDXComponent } from 'mdx-bundler/client';
import React from 'react';
import { MDXType } from '../types/type';
import {
    Blockquote,
    Code,
    H1,
    H2,
    H3,
    Li,
    Line,
    Ol,
    Strong,
    Text,
    Ul,
    CodeStyle,
    NavStyle,
} from './Components.style';

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
    pre: CodeStyle,
    nav: NavStyle,
};

const MdxPost = ({ postData }: { postData: MDXType }) => {
    const { code } = postData;
    const MDXComponent = React.useMemo(() => getMDXComponent(code), [code]);
    return <MDXComponent components={components} />;
};

export default MdxPost;
