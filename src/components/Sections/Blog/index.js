import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Button from '../../Button';
import Section from '../../Section';
import SliderArrows from '../../SliderArrows';

import styles from './Blog.module.css';
import { Next } from '../../icons';
import { Link } from '../../Link';
import Placeholder from '../../Placeholder';

function Blog() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('');
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchBlogs = () => {
    return fetch(`/api/articles/${activeTab}`)
      .then((res) => res.json())
      .then((res) => setArticles(res.articles))
      .finally(() => setLoading(false));
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
    <Section
      id="blog"
      className={[styles.container, 'section']}
      column
    >
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
        placeholderItem={<Placeholder />}
        enablePlaceholder={true}
        numberOfPlaceholderItems={4}
        gutter={20}
        numberOfCards={articles.length > 4 ? 4 : articles.length}
        slidesToScroll={articles.length > 4 ? 4 : articles.length}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={setActiveItemIndex}
        classes={{
          wrapper: styles.slider,
          itemsWrapper: styles.wrapper,
        }}
      >
        {loading
          ? []
          : articles.map((article) => (
              <article className={styles.card} key={article.id}>
                <div className={styles.header}>
                  <img src={article.poster} />
                  <Button className={styles.categoryBtn}>
                    {article.category.toUpperCase()}
                  </Button>
                  <Link href="/">
                    <a className={styles.back}>
                      <Next />
                    </a>
                  </Link>
                </div>
                <div className={styles.cardBody}>
                  <time className={styles.date}>{article.date}</time>
                  <h3 className={styles.title}>
                    <Link href="/">
                      <a>{article.title}</a>
                    </Link>
                  </h3>
                </div>
              </article>
            ))}
      </ItemsCarousel>
      <Button>Tüm Blog Yazıları</Button>
    </Section>
  );
}

export default Blog;
