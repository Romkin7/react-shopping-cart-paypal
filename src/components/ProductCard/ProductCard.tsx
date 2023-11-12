import React, { FC } from 'react';
import IImage from '../../@types/image';
import Image from '../Image/Image'
import clsx from 'clsx';

interface ProductCardProps {
    image: IImage;
    title: string;
    price: string | number;
    brand: string;
}

const ProductCard: FC<ProductCardProps> = ({ image, title, brand }) => {
    const productCardSyles = clsx({
        ['productCard']: true,
    });
    return (
        <article className={productCardSyles}>
            <div className="productCard--head">
                <Image src={image.src} alt={image.alt} title={image.title}/>
            </div>
            <div className='productCard--body'>
                <p>{brand}</p>
                <h3>{title}</h3>
            </div>
        </article>
    );
};

export default ProductCard;
