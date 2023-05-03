import { PostTag, TitleBox, MdxContainer } from './MdxLayout.style';
import Date from './Date';
import { MDXType } from '../types/type';
import Link from 'next/link';
import React, { ReactNode } from 'react';

export default function MdxLayout({
    postData,
    children,
}: {
    postData: MDXType;
    children: ReactNode;
}) {
    const { frontmatter } = postData;
    return (
        <MdxContainer>
            <TitleBox>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.subtitle}</p>
                {frontmatter.category.map((category) => (
                    <Link
                        key={category}
                        href={`/category/${category}/page/1`}
                        passHref
                        legacyBehavior
                    >
                        <PostTag>{category}</PostTag>
                    </Link>
                ))}
                <Date dateString={frontmatter.date} />
            </TitleBox>
            {children}
        </MdxContainer>
    );
}
