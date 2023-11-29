import { FC } from 'react';
import clsx from 'clsx';
import './Image.scss';
import IImage from '../../@types/image';

interface Source {
    id: number;
    media: string;
    srcSet: string;
}

interface ImageProps extends IImage {
    sources?: Source[];
    fluid?: boolean;
}

const Image: FC<ImageProps> = ({ alt, src, sources, title, fluid = true }) => {
    const imageStyles = clsx({
        ['image']: true,
        ['image--fluid']: fluid,
    });
    return (
        <picture className={imageStyles}>
            {sources &&
                sources.map((source: Source) => {
                    return (
                        <source
                            key={source.id}
                            media={source.media}
                            srcSet={source.srcSet}
                        />
                    );
                })}
            <img title={title} alt={alt} src={src} />
        </picture>
    );
};

export default Image;
