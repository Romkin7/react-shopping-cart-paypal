import { FC } from 'react';
import IImage from '../../@types/image';
import Image from '../Image/Image';
import clsx from 'clsx';
import Button from '../Button/Button';
import './ProductCard.scss';

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
                <p className="productCard--body_price">${String(price)}</p>
                <Button type="button" size="s" variant="success">
                    {' '}
                    Add to Cart{' '}
                </Button>
            </div>
        </article>
    );
};

export default ProductCard;
