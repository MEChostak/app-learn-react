import React from 'react'
import './Card.css'

const PromotionCard = ({ promotion }) => (
    <div className="promotionCard">
        <img src={promotion.imageUrl} className="promotionCard__image"/>
        <div className="promotionCard__info">
            <h1 className="promotionCard__title">{promotion.title}</h1>
            <span className="promotionCard__price">R$ {promotion.price}</span>
            <footer className="promotionCard__footer">
                {promotion.comments.length > 0 && (
                    <div className="promotionCard__comment">
                        "{promotion.comments[0].comment}"
                    </div>
                )}
                <div className="promotionCard__comments-count">{promotion.comments.length} {promotion.comments.length > 1 ? 'Comentários' : 'Comentário'}</div>
                <a href={promotion.url} target="_blank" className="promotionCard__link">IR PARA O SITE</a>
            </footer>
        </div>
    </div>

);

export default PromotionCard;