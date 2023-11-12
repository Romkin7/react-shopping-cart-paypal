import React, { FC } from 'react';
import IImage from '../../@types/image';
import Image from '../Image/Image';
import clsx from 'clsx';
import Button from '../Button/Button';

interface ProductCardProps {
    image: IImage;
    title: string;
    price: string | number;
    brand: string;
}

const ProductCard: FC<ProductCardProps> = ({ image, title, price, brand }) => {
    const productCardSyles = clsx({
        ['productCard']: true,
    });
    return (
        <article className={productCardSyles}>
            <div className="productCard--head">
                <Image src={image.src} alt={image.alt} title={image.title} />
            </div>
            <div className="productCard--body">
                <p>{brand}</p>
                <h3>{title}</h3>
                <p>${String(price)}</p>
                <Button type="button" size="s" variant='primary'> Add to Cart </Button>
            </div>
        </article>
    );
};

export default ProductCard;
