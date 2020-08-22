import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Button from '../../Button';
import Section from '../../Section';
import SliderArrows from '../../SliderArrows';

import styles from './Blog.module.css';
import { Next } from '../../icons';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function Blog() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('');
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchBlogs = () => {
    return fetch(`/api/articles/${activeTab}`)
      .then((res) => res.json())
      .then((res) => setArticles(res.articles));
  };

  useEffect(() => {
    fetchBlogs();
  }, [activeTab]);

  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((res) => setCategories(res.categories));
  }, []);

  return (
    <Section id="blog" className={styles.container} column>
      <div className={styles.top}>
        <div className={styles.body}>
          <Section.Name>Blog Yazılarımız</Section.Name>
          <Section.Title className={styles.title}>
            Altı farklı kategoride 24 içerik
          </Section.Title>
          <SliderArrows
            activeIndex={activeItemIndex}
            setActive={(index) => setActiveItemIndex(index)}
            length={articles.length}
          />
        </div>
        <ul className={styles.tab}>
          <li className={activeTab === '' ? styles.active : ''}>
            <Button onClick={() => setActiveTab('')} reset>
              Tümü
            </Button>
          </li>
          {categories.map((category) => (
            <li
              key={category.id}
              className={
                activeTab === category.slug ? styles.active : ''
              }
            >
              <Button
                onClick={() => setActiveTab(category.slug)}
                reset
              >
                {category.title}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <ItemsCarousel
        gutter={20}
        numberOfCards={articles.length > 4 ? 4 : articles.length}
        slidesToScroll={articles.length > 4 ? 4 : 1}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={setActiveItemIndex}
        classes={{
          wrapper: styles.slider,
          itemsWrapper: styles.wrapper,
        }}
      >
        {articles.map((article) => (
          <article className={styles.card} key={article.id}>
            <div className={styles.header}>
              <img src={article.poster} />
              <Button className={styles.categoryBtn}>
                {article.category.toUpperCase()}
              </Button>
              <div className={styles.back}>
                <Next />
              </div>
            </div>
            <div className={styles.cardBody}>
              <time className={styles.date}>{article.date}</time>
              <h3 className={styles.title}>{article.title}</h3>
            </div>
          </article>
        ))}
      </ItemsCarousel>
      <Button>Tüm Blog Yazıları</Button>
    </Section>
  );
}

export default Blog;
