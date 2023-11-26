import { FC } from 'react';
import IImage from '../../@types/image';
import Image from '../Image/Image';
import clsx from 'clsx';
import Button from '../Button/Button';
import './ProductCard.scss';
import AddToCartForm from './AddToCartForm';
import IProduct from '../../@types/product';
interface ProductCardProps {
    product: IProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const productCardSyles = clsx({
        ['productCard']: true,
    });
    const { brand, price, title } = product;
    const image: IImage = {
        alt: product.title,
        title: `${product.title} ${product.brand}`,
        src: product.thumbnail,
    };
    return (
        <article className={productCardSyles}>
            <div className="productCard--head">
                <Image src={image.src} alt={image.alt} title={image.title} />
            </div>
            <div className="productCard--body">
                <p>{brand}</p>
                <h3>{title}</h3>
                <p className="productCard--body_price">${String(price)}</p>
                <AddToCartForm product={product}>
                    <Button
                        type="submit"
                        size="s"
                        variant="success"
                        borderRadius="rounded"
                    >
                        {' '}
                        Add to Cart{' '}
                    </Button>
                </AddToCartForm>
            </div>
        </article>
    );
};

export default ProductCard;
